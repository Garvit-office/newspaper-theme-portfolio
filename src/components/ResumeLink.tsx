import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

const available = existsSync(path.join(process.cwd(), "public", site.resumeFile));

/** Download link for the résumé PDF; disabled until the file is added to /public. */
export function ResumeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  if (!available) {
    return (
      <span className={`${className ?? ""} is-disabled`} aria-disabled="true" title="Résumé coming soon">
        {children}
      </span>
    );
  }
  return (
    <a className={className} href={`/${site.resumeFile}`} download>
      {children}
    </a>
  );
}
