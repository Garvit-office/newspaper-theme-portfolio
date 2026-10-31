"use client";

import { useEffect, useState } from "react";

/** Today's date in newspaper style. Set after mount so the static page never shows a stale build date. */
export function Today() {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  }, []);
  return <span suppressHydrationWarning>{date}</span>;
}
