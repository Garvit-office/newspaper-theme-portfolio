import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Ph } from "@/components/Ph";
import { Picture } from "@/components/Picture";
import { SectionTitle } from "@/components/SectionTitle";
import { caseStudies } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((c) => c.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.summary, openGraph: { title: c.title, description: c.summary } };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const c = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="study wrap">
      <header className="study__head">
        <Link href="/#work" className="study__back">← All work</Link>
        <p className="kicker"><span>Case study · No. {c.no}</span></p>
        <h1 className="study__title"><Ph>{c.title}</Ph></h1>
        <p className="study__summary"><Ph>{c.summary}</Ph></p>
        <dl className="study__meta">
          <div><dt>Client</dt><dd><Ph>{c.client}</Ph></dd></div>
          <div><dt>Year</dt><dd><Ph>{c.year}</Ph></dd></div>
          <div><dt>Channels</dt><dd><Ph>{c.channels}</Ph></dd></div>
          <div><dt>Duration</dt><dd><Ph>{c.duration}</Ph></dd></div>
        </dl>
      </header>

      <div className="study__cover reveal">
        <Picture img={c.cover} ratio="wide" sizes="(max-width: 1200px) 100vw, 1100px" priority />
      </div>

      <div className="study__body">
        <div className="study__block">
          <SectionTitle kicker="01" title="The challenge" />
          <p><Ph>{c.challenge}</Ph></p>
        </div>
        <div className="study__block">
          <SectionTitle kicker="02" title="The approach" />
          <p><Ph>{c.approach}</Ph></p>
        </div>
        <div className="study__block">
          <SectionTitle kicker="03" title="In practice" />
          <ol className="study__steps">
            {c.execution.map((step) => (
              <li key={step}><span><Ph>{step}</Ph></span></li>
            ))}
          </ol>
        </div>
      </div>

      <section className="stats" aria-label="Results">
        {c.results.map((r) => (
          <div key={r.label} className="stat reveal">
            <span className="stat__num"><Ph>{r.value}</Ph></span>
            <span className="stat__label"><Ph>{r.label}</Ph></span>
          </div>
        ))}
      </section>

      <div className="study__gallery reveal">
        {c.gallery.map((g) => (
          <Picture key={g.label} img={g} ratio="portrait" sizes="(max-width: 720px) 100vw, 33vw" />
        ))}
      </div>

      <div className="study__body">
        <div className="study__block">
          <SectionTitle kicker="04" title="What I learned" />
          <p><Ph>{c.learnings}</Ph></p>
        </div>
      </div>

      <Link href={`/work/${next.slug}`} className="study__next">
        <span className="kicker"><span>Next story · No. {next.no}</span></span>
        <span className="study__next-title"><Ph>{next.title}</Ph> →</span>
      </Link>
    </article>
  );
}
