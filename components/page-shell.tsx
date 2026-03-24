import type { ReactNode } from "react";

export function PageShell({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8">
      <section className="card">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? <p className="mt-2 text-gray-600">{description}</p> : null}
      </section>
      {children}
    </main>
  );
}
