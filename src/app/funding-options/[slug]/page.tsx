import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import FundingSolutionPageTemplate from "@/components/solutions/FundingSolutionPageTemplate";
import { solutions, getSolutionBySlug } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata(
  props: PageProps<"/funding-options/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return pageMetadata({
    title: solution.name,
    description: solution.heroDescription,
    path: `/funding-options/${slug}`,
  });
}

export default async function FundingSolutionPage(props: PageProps<"/funding-options/[slug]">) {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const path = `/funding-options/${slug}`;
  const title = solution.name;

  return (
    <>
      <FundingSolutionPageTemplate solution={solution} />
      <JsonLd data={faqJsonLd(solution.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Funding Options", path: "/funding-options" },
          { name: title, path },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({ name: title, description: solution.heroDescription, path })}
      />
    </>
  );
}
