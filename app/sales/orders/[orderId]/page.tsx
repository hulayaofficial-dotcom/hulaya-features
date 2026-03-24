import { PageShell } from "@/components/page-shell";

export default async function SalesOrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return <PageShell title={`Sales Order ${orderId}`} description="Organizer order detail, resend and refund actions." />;
}
