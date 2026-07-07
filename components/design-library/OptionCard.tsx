interface OptionCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function OptionCard({
  title,
  description,
  children,
}: OptionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-slate-600">
          {description}
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8">
        {children}
      </div>

    </div>
  );
}