import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function HomePage() {
  return (
    <PageShell
      title="One place for dance workshops, camps & events."
      description="Discover events fast, book without friction, and help organizers sell and manage with confidence."
    >
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Workshops", "/listing/category/workshops"],
          ["Camps", "/listing/category/camps"],
          ["Events", "/listing/category/events"]
        ].map(([label, href]) => (
          <Link key={href} href={href} className="card block hover:border-hulaya-gold">
            <p className="text-lg font-semibold">{label}</p>
            <p className="mt-1 text-sm text-gray-600">Browse curated {label.toLowerCase()}.</p>
          </Link>
        ))}
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold">Phase 1 foundation is live</h2>
        <p className="mt-2 text-gray-600">
          This repository now contains the initial Next.js application shell and route structure for public, dancer, organizer and admin areas.
        </p>
      </section>
    </PageShell>
  );
}
