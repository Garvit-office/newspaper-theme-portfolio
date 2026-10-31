"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Fades in `.reveal` elements as they scroll into view, and handles the ?clean preview flag. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("clean")) {
      document.documentElement.classList.add("clean");
    }

    const show = (el: Element) => el.classList.add("is-in");
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    let observerAlive = false;
    const io = new IntersectionObserver(
      (entries) => {
        observerAlive = true;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      // Anything already on screen shows immediately; the rest waits for scroll
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else io.observe(el);
    });
    // Safety net: if the observer never reports, show everything rather than leave it hidden
    const fallback = window.setTimeout(() => {
      if (!observerAlive) document.querySelectorAll(".reveal:not(.is-in)").forEach(show);
    }, 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
