import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Flourish } from "@/components/Flourish";
import { Mark } from "@/components/Mark";
import { Picture } from "@/components/Picture";
import { ResumeLink } from "@/components/ResumeLink";
import { SectionTitle } from "@/components/SectionTitle";
import { Telephone } from "@/components/Telephone";
import { caseStudies, site } from "@/content/site";

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <Mark size={14} />
    </div>
  );
}

export default function Home() {
  const { contact, freelance } = site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${contact.email}`,
    telephone: contact.phoneHref,
    sameAs: [contact.linkedin.href, contact.instagram.href],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────── FRONT PAGE ───────── */}
      <section className="front wrap">
        <figure className="front__photo reveal">
          <Picture img={site.portrait} ratio="square" sizes="(max-width: 860px) 90vw, 40vw" priority />
          <figcaption>{site.caption}</figcaption>
        </figure>

        <div className="front__copy reveal">
          <p className="kicker"><span>I do</span></p>
          <h1 className="front__title">
            <span className="front__title-big">Digital</span>
            <span className="front__title-big">
              <Flourish className="front__flourish" />
              Marketing
              <Flourish flip className="front__flourish" />
            </span>
            <span className="front__title-small">&amp; Content Strategy</span>
          </h1>
          {site.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="front__actions">
            <Link href="#work" className="btn">Read the work</Link>
            <ResumeLink className="btn btn--quiet">Download résumé</ResumeLink>
          </div>
        </div>
      </section>

      <Divider />

      {/* ───────── STATS ───────── */}
      <section className="wrap stats" aria-label="Highlights">
        <p className="kicker stats__kicker"><span>By the numbers</span></p>
        {site.stats.map((s) => (
          <div key={s.label} className="stat reveal">
            <span className="stat__num">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ───────── FEATURE: DIGITAL MARKETING ───────── */}
      <section className="section wrap" id="work">
        <SectionTitle kicker="Section A · The lead story" title={freelance.title} center />
        <p className="dateline reveal">{freelance.dates} · Meta Ads · Lead generation · Social campaigns</p>
        <ul className="columns reveal">
          {freelance.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <blockquote className="pullquote reveal">
          <p>“120+ leads within one week, through targeted Meta advertising.”</p>
          <footer>From the event campaign file</footer>
        </blockquote>

        <div className="stories">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="story reveal">
              <span className="story__no">No. {c.no}</span>
              <h3 className="story__title">{c.title}</h3>
              <p className="story__summary">{c.summary}</p>
              <span className="story__cta">Read the story →</span>
            </Link>
          ))}
        </div>
      </section>

      <Divider />

      {/* ───────── CORE COMPETENCIES ───────── */}
      <section className="section wrap" id="competencies">
        <SectionTitle kicker="Section B · What I bring" title="Core Competencies" center />
        <div className="competencies">
          {site.competencies.map((c, i) => (
            <article key={c.title} className={`competency reveal${i === 0 ? " competency--lead" : ""}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* ───────── CAREER CONTOUR ───────── */}
      <section className="section wrap ledger" id="experience">
        <div>
          <SectionTitle kicker={`Section C · Since ${site.established}`} title="Career Contour" />
          <ol className="timeline">
            {site.experience.map((e) => (
              <li key={e.dates} className="entry reveal">
                <span className="entry__date">{e.dates}</span>
                <span className="entry__role">{e.role}</span>
                <span className="entry__org">{e.org}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="ledger__aside">
          <div className="box reveal">
            <h3>Achievements</h3>
            <ul>
              {site.achievements.map((a) => (
                <li key={a.title}><strong>{a.title}</strong><span>{a.detail}</span></li>
              ))}
            </ul>
          </div>
          <div className="box reveal">
            <h3>Scholastic</h3>
            <ul>
              {site.education.map((e) => (
                <li key={e.title}><strong>{e.title}</strong><span>{e.org}, {e.year}</span></li>
              ))}
            </ul>
          </div>
          <div className="box reveal">
            <h3>Interests</h3>
            <p className="interests">{site.interests.join(" · ")}</p>
          </div>
          <div className="box reveal">
            <h3>On Instagram</h3>
            <p className="box__note">
              Writing and creating for a community of 36k+ at{" "}
              <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer">{contact.instagram.label}</a>.
            </p>
          </div>
          <ResumeLink className="btn">Download full résumé</ResumeLink>
        </aside>
      </section>

      <Divider />

      {/* ───────── CONTACT ───────── */}
      <section className="section wrap contact" id="contact">
        <div className="contact__intro">
          <Telephone className="contact__phone" />
          <SectionTitle kicker="Section D · Classifieds" title="Let’s work together!" />
          <p className="contact__lede reveal">Open to {contact.availability}.</p>
          <ul className="contact__links reveal">
            <li><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><span>Phone</span><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
            <li><span>LinkedIn</span><a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">{contact.linkedin.label}</a></li>
            <li><span>Instagram</span><a href={contact.instagram.href} target="_blank" rel="noopener noreferrer">{contact.instagram.label}</a></li>
          </ul>
        </div>
        <div className="contact__panel reveal">
          <p className="contact__panel-kicker">Classified ad</p>
          <p className="contact__panel-title">Wanted: brands ready to grow.</p>
          <p className="contact__panel-note">Tell me about your brand, your audience and the result you’re after. I reply to every message.</p>
          <ContactForm fallbackEmail={contact.email} />
        </div>
      </section>
    </>
  );
}
