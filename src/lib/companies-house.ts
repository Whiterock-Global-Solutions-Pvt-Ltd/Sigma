const API_BASE = "https://api.company-information.service.gov.uk";

export class CompaniesHouseError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
  }
}

// Server-only: the API key must never reach the browser.
export async function companiesHouseFetch<T>(path: string): Promise<T | null> {
  const apiKey = process.env.COMPANIES_HOUSE_API_KEY;
  if (!apiKey) throw new CompaniesHouseError("Company lookup is not configured.", 503);

  const response = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}` },
    signal: AbortSignal.timeout(5000),
  });

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new CompaniesHouseError("Company lookup failed.", response.status === 429 ? 429 : 502);
  }
  return response.json();
}

export const companiesHouseErrorResponse = (error: unknown) =>
  error instanceof CompaniesHouseError
    ? Response.json({ error: error.message }, { status: error.status })
    : Response.json({ error: "Company lookup failed." }, { status: 502 });
