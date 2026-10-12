export function Benefit({ icon, title, text }: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-text-muted">{text}</p>
      </div>
    </div>
  );
}