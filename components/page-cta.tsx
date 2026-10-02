type CtaAction = { label: string; href: string };

type PageCtaProps = {
  title: string;
  subtitle?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  note?: string;
  className?: string;
};

export function PageCta({ title, subtitle, primary, secondary, note, className }: PageCtaProps) {
  return (
    <section className={className ? `pcta ${className}` : "pcta"}>
      <h2 className="display pcta-title">
        {title}
        {subtitle && (
          <>
            <br />
            <span>{subtitle}</span>
          </>
        )}
      </h2>
      <div className="pcta-actions">
        <div className="pcta-btns">
          <a href={primary.href} className="pcta-btn solid">{primary.label}</a>
          {secondary && (
            <a href={secondary.href} className="pcta-btn outline">{secondary.label}</a>
          )}
        </div>
        {note && <p className="pcta-note">{note}</p>}
      </div>
    </section>
  );
}
