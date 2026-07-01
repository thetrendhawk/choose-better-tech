type PageHeaderProps = { title: string; eyebrow?: string; description: string };

export function PageHeader({ title, eyebrow, description }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
        <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{description}</p>
      </div>
    </header>
  );
}
