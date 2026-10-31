import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section wrap notfound">
      <p className="kicker"><span>Page 404</span></p>
      <h1>This page has gone missing</h1>
      <Link href="/" className="btn">Back to the front page</Link>
    </section>
  );
}
