import Link from "next/link";

const items = [
  ["Workshops", "/listing/category/workshops"],
  ["Camps", "/listing/category/camps"],
  ["Events", "/listing/category/events"],
  ["For Organizers", "/features"],
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"]
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">Hulaya Marketplace</Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {items.map(([label, href]) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-black">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/listing/new" className="rounded-full bg-hulaya-gold px-4 py-2 text-sm font-medium text-black">
          Add a new listing
        </Link>
      </div>
    </header>
  );
}
