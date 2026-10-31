import Link from "next/link";
import { Mark } from "@/components/Mark";
import { Today } from "@/components/Today";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Digital Marketing" },
  { href: "/#competencies", label: "Competencies" },
  { href: "/#experience", label: "Career" },
  { href: "/#contact", label: "Contact" },
];

/** Newspaper front: issue line, nameplate with ears, section links, then a rolling headline ticker. */
export function Nav() {
  const { linkedin, instagram } = site.contact;
  const volume = new Date().getFullYear() - Number(site.established);
  // Doubled so the ticker can loop seamlessly
  const ticker = [...site.headlines, ...site.headlines];
  return (
    <header className="masthead wrap">
      <div className="masthead__top">
        <span>Vol. {volume} · Est. {site.established}</span>
        <Today />
        <span className="masthead__follow">
          Follow me
          <a href={linkedin.href} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={instagram.href} target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
      </div>

      <div className="masthead__plate">
        <p className="masthead__ear">The Digital<br />Marketing Edition</p>
        <Link href="/" className="masthead__name">
          {site.name}
          <Mark size={16} className="masthead__mark" />
        </Link>
        <p className="masthead__ear masthead__ear--right">10+ years<br />6 global brands</p>
      </div>

      <div className="rule-double" />
      <nav className="masthead__nav" aria-label="Sections">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>

      <div className="ticker" aria-label="Latest">
        <span className="ticker__label">Latest</span>
        <div className="ticker__track">
          <p className="ticker__items">
            {ticker.map((h, i) => (
              <span key={i} aria-hidden={i >= site.headlines.length}>{h}</span>
            ))}
          </p>
        </div>
      </div>
    </header>
  );
}
