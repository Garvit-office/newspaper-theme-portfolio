/** Newspaper heading: a small kicker set between rules, then the headline, e.g. "— I do —" / "Digital Marketing". */
export function SectionTitle({ kicker, title, center }: { kicker: string; title: string; center?: boolean }) {
  return (
    <header className={`head reveal${center ? " head--center" : ""}`}>
      <p className="kicker"><span>{kicker}</span></p>
      <h2 className="head__title">{title}</h2>
    </header>
  );
}
