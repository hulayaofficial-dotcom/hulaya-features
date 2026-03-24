import { PageShell } from "@/components/page-shell";

export default async function OrganizerStorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageShell title={`Organizer: ${slug}`} description="Public organizer storefront with active listings." />;
}
