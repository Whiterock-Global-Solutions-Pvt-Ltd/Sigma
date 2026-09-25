import type { NextRequest } from "next/server";
import type { CompanySuggestion } from "@/components/eligibility/funding-assessment";
import { companiesHouseErrorResponse, companiesHouseFetch } from "@/lib/companies-house";

type CompaniesHouseSearchItem = {
  title?: string;
  company_number?: string;
  company_status?: string;
  company_type?: string;
  date_of_creation?: string;
  address_snippet?: string;
};

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim().slice(0, 100) ?? "";
  if (query.length < 2) return Response.json({ items: [] });

  try {
    const data = await companiesHouseFetch<{ items?: CompaniesHouseSearchItem[] }>(
      `/search/companies?q=${encodeURIComponent(query)}&items_per_page=20`
    );
    const items: CompanySuggestion[] = (data?.items ?? [])
      .filter((item) => item.title && item.company_number && item.company_status === "active")
      .slice(0, 8)
      .map((item) => ({
        name: item.title!,
        number: item.company_number!,
        status: item.company_status ?? "",
        type: item.company_type ?? "",
        incorporatedOn: item.date_of_creation ?? null,
        address: item.address_snippet ?? "",
      }));

    return Response.json({ items });
  } catch (error) {
    return companiesHouseErrorResponse(error);
  }
}
