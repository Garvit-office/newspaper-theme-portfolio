/** Vintage handset hanging from a coiled cord, with halftone highlights. */
export function Telephone({ className }: { className?: string }) {
  const coils = Array.from({ length: 16 }, () => "c 13 0 13 10 0 10 c -13 0 -13 -4 0 -4").join(" ");
  return (
    <svg className={className} viewBox="0 0 100 330" width="100" height="330" aria-hidden="true">
      <defs>
        <pattern id="tel-dots" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <circle cx="1.5" cy="1.5" r="0.95" fill="#efeadf" />
        </pattern>
      </defs>

      {/* cord */}
      <path d={`M30 0 V 58 ${coils} V 178`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* handset, side view: earpiece cup, curved grip, mouthpiece cup */}
      <g transform="translate(0 172)">
        <path d="M32 26 Q 14 80 32 132" fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" />
        <rect x="20" y="6" width="56" height="34" rx="16" fill="currentColor" />
        <rect x="20" y="118" width="56" height="34" rx="16" fill="currentColor" />
        {/* cup rims */}
        <rect x="68" y="9" width="10" height="28" rx="5" fill="currentColor" stroke="#efeadf" strokeOpacity="0.25" strokeWidth="1" />
        <rect x="68" y="121" width="10" height="28" rx="5" fill="currentColor" stroke="#efeadf" strokeOpacity="0.25" strokeWidth="1" />
        {/* halftone light along the grip and cups */}
        <path d="M30 34 Q 17 80 30 124" fill="none" stroke="url(#tel-dots)" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
        <rect x="30" y="11" width="30" height="9" rx="4.5" fill="url(#tel-dots)" opacity="0.8" />
        <rect x="30" y="123" width="30" height="9" rx="4.5" fill="url(#tel-dots)" opacity="0.8" />
      </g>
    </svg>
  );
}
