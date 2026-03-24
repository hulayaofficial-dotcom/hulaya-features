import { PageShell } from "@/components/page-shell";

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageShell title={`Listing: ${slug}`} description="Listing detail page with variants, availability and booking." />;
}
