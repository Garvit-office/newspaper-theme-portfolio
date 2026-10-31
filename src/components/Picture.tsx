import Image from "next/image";
import type { Img } from "@/content/site";

type Ratio = "portrait" | "wide" | "square";

/** Shows the image when one is set, otherwise a labelled placeholder box of the same shape. */
export function Picture({ img, ratio = "square", sizes = "100vw", priority }: { img: Img; ratio?: Ratio; sizes?: string; priority?: boolean }) {
  if (!img.image) {
    return <div className={`img-ph img-ph--${ratio}`} data-label={img.label} role="img" aria-label={`${img.label} (placeholder)`} />;
  }
  return (
    <div className={`pic pic--${ratio}${img.tone === "halftone" ? " pic--halftone" : ""}`}>
      <Image src={img.image} alt={img.alt ?? img.label} fill sizes={sizes} priority={priority} />
    </div>
  );
}
