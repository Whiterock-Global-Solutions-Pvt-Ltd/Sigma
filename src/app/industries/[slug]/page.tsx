import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import SectorPageTemplate from "@/components/industries/SectorPageTemplate";
import { industries, getIndustryBySlug } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return pageMetadata({
    title: `${industry.name} Finance`,
    description: industry.heroDescription,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const path = `/industries/${slug}`;
  const title = `${industry.name} Finance`;

  return (
    <>
      <SectorPageTemplate industry={industry} />
      <JsonLd data={faqJsonLd(industry.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
    </>
  );
}
