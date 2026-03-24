import { PageShell } from "@/components/page-shell";

export default async function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <PageShell title={`Edit Listing ${id}`} description="Update listing details, variants and publication status." />;
}
