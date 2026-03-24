import { PageShell } from "@/components/page-shell";

export default async function OrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return <PageShell title={`Order ${orderId}`} description="Ticket details and QR view." />;
}
