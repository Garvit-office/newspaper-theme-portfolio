import { Fragment } from "react";

const BRACKETS = /(\[[^\]]+\])/g;

/** Renders text, highlighting any [placeholder] segments so they're easy to find. */
export function Ph({ children }: { children: string }) {
  const parts = children.split(BRACKETS);
  if (parts.length === 1) return <>{children}</>;
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="ph">{part}</span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export const isPlaceholder = (s: string) => s.includes("[");
