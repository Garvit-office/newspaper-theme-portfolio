import type { Metadata, Viewport } from "next";
import { Courier_Prime, Newsreader, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/content/site";
import "./globals.css";

/* Headlines use "The Seasons" when its font file is in /public/fonts (see globals.css); Playfair Display stands in until then. */
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-courier" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: { type: "website", siteName: site.name, title: `${site.name} — ${site.role}`, description: site.description, locale: "en_IN" },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.role}`, description: site.description },
};

export const viewport: Viewport = { themeColor: "#efeadf" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { email, linkedin, instagram } = site.contact;
  return (
    <html lang="en" className={`${playfair.variable} ${newsreader.variable} ${courier.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide .reveal content only when JS is available to show it again */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="footer wrap">
          <div className="rule-double" />
          <p className="footer__name">{site.name}</p>
          <nav className="footer__links" aria-label="Footer">
            <Link href="/#work">Work</Link>
            <Link href="/#competencies">Competencies</Link>
            <Link href="/#experience">Experience</Link>
            <a href={`mailto:${email}`}>Email</a>
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={instagram.href} target="_blank" rel="noopener noreferrer">Instagram</a>
          </nav>
          <Link href="/" className="footer__top">Back to the front page ↑</Link>
          <p className="footer__meta">
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
        </footer>
        <RevealObserver />
      </body>
    </html>
  );
}
