import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import OtherSolutionPageTemplate from "@/components/otherSolutions/OtherSolutionPageTemplate";
import { otherSolutions, getOtherSolutionBySlug } from "@/data/otherSolutions";

export function generateStaticParams() {
  return otherSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata(
  props: PageProps<"/other-solutions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getOtherSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return pageMetadata({
    title: solution.name,
    description: solution.heroDescription,
    path: `/other-solutions/${slug}`,
  });
}

export default async function OtherSolutionPage(props: PageProps<"/other-solutions/[slug]">) {
  const { slug } = await props.params;
  const solution = getOtherSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const path = `/other-solutions/${slug}`;
  const title = solution.name;

  return (
    <>
      <OtherSolutionPageTemplate solution={solution} />
      <JsonLd data={faqJsonLd(solution.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({ name: title, description: solution.heroDescription, path })}
      />
    </>
  );
}
