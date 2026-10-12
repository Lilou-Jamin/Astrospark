export function Step({ number, title, text }: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative">
      <span className="text-5xl font-bold text-primary/20">{number}</span>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-3 max-w-sm leading-7 text-text-muted">{text}</p>
    </div>
  );
}