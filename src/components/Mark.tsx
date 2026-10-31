/** Botanical monogram: two crossed stems with blooms, after the Aesté reference. */
export function Mark({ size = 56, className }: { size?: number; className?: string }) {
  const petals = (cx: number, cy: number) =>
    Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2;
      return <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * 6} y2={cy + Math.sin(a) * 6} />;
    });
  return (
    <svg className={className} width={size} height={size * 1.33} viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true">
      <path d="M23 77 C 25 58, 35 42, 41 18" />
      <path d="M37 77 C 35 58, 25 42, 19 18" />
      <path d="M31 52 c 7 -7 13 -8 18 -6 c -5 5 -11 7 -18 6 z" />
      <path d="M29 52 c -7 -7 -13 -8 -18 -6 c 5 5 11 7 18 6 z" />
      {petals(41, 14)}
      {petals(19, 14)}
      <circle cx="30" cy="9" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="30" cy="15" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
