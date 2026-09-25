import type { NextRequest } from "next/server";
import type { CompanyDetails, CompanyDirector } from "@/components/eligibility/funding-assessment";
import { companiesHouseErrorResponse, companiesHouseFetch } from "@/lib/companies-house";

type CompanyProfile = {
  company_name?: string;
  company_status?: string;
  date_of_creation?: string;
  sic_codes?: string[];
  has_insolvency_history?: boolean;
  accounts?: { overdue?: boolean };
  confirmation_statement?: { overdue?: boolean };
  registered_office_address?: {
    premises?: string;
    address_line_1?: string;
    address_line_2?: string;
    locality?: string;
    region?: string;
    postal_code?: string;
  };
};

type ChargesResponse = { items?: { status?: string }[] };

type OfficersResponse = {
  items?: { name?: string; officer_role?: string; resigned_on?: string }[];
};

const outstandingChargeStatuses = ["outstanding", "part-satisfied"];

const titleCase = (value: string) =>
  value.toLowerCase().replace(/(^|[\s'-])\p{L}/gu, (match) => match.toUpperCase());

// Companies House returns officer names as "SURNAME, Forename Middlenames".
const parseOfficerName = (raw: string): CompanyDirector => {
  const [surname, forenames = ""] = raw.split(",").map((part) => part.trim());
  const firstName = titleCase(forenames.split(/\s+/)[0] ?? "");
  const lastName = titleCase(surname);
  return { name: [firstName, lastName].filter(Boolean).join(" "), firstName, lastName };
};

export async function GET(_request: NextRequest, { params }: { params: Promise<{ number: string }> }) {
  const { number } = await params;
  const companyNumber = number.toUpperCase();
  if (!/^[A-Z0-9]{8}$/.test(companyNumber)) {
    return Response.json({ error: "Invalid company number." }, { status: 400 });
  }

  try {
    const [profile, charges, officers] = await Promise.all([
      companiesHouseFetch<CompanyProfile>(`/company/${companyNumber}`),
      companiesHouseFetch<ChargesResponse>(`/company/${companyNumber}/charges?items_per_page=100`),
      companiesHouseFetch<OfficersResponse>(`/company/${companyNumber}/officers?items_per_page=100`),
    ]);

    if (!profile) return Response.json({ error: "Company not found." }, { status: 404 });

    const office = profile.registered_office_address ?? {};
    const directors = (officers?.items ?? [])
      .filter((officer) => officer.officer_role?.includes("director") && !officer.resigned_on && officer.name)
      .map((officer) => parseOfficerName(officer.name!));

    const details: CompanyDetails = {
      name: profile.company_name ?? "",
      status: profile.company_status ?? "",
      incorporatedOn: profile.date_of_creation ?? null,
      sicCodes: profile.sic_codes ?? [],
      outstandingCharges: (charges?.items ?? []).filter((charge) =>
        outstandingChargeStatuses.includes(charge.status ?? "")
      ).length,
      activeDirectors: directors.length,
      directors,
      hasInsolvencyHistory: Boolean(profile.has_insolvency_history),
      filingsOverdue: Boolean(profile.accounts?.overdue || profile.confirmation_statement?.overdue),
      address: {
        line: [[office.premises, office.address_line_1].filter(Boolean).join(" "), office.address_line_2]
          .filter(Boolean)
          .join(", "),
        city: office.locality ?? office.region ?? "",
        postcode: office.postal_code ?? "",
      },
    };

    return Response.json(details);
  } catch (error) {
    return companiesHouseErrorResponse(error);
  }
}
