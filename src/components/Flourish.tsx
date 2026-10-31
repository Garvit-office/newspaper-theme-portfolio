/** Engraved-style scroll that flanks a headline, after the reference; `flip` mirrors it for the right side. */
export function Flourish({ flip, className }: { flip?: boolean; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      width="64"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M62 20 H 30 C 22 20 16 14 18 9 C 20 4 28 5 28 11 C 28 15 23 16 22 13" />
      <path d="M30 20 C 22 20 16 26 18 31 C 20 36 28 35 28 29 C 28 25 23 24 22 27" />
      <path d="M14 20 C 10 20 6 17 2 20 C 6 23 10 20 14 20 Z" fill="currentColor" />
    </svg>
  );
}
