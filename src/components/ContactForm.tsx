"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ kind: "sending" });
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      form.reset();
      setStatus({ kind: "success", message: "Thank you, your message is on its way. I’ll reply soon." });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input type="text" name="name" required maxLength={120} autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} required minLength={10} maxLength={5000} />
      </label>
      {/* Honeypot: hidden from people, catches bots */}
      <label className="form__hp" aria-hidden="true">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="btn" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className={`form__note form__note--${status.kind}`} role="status" aria-live="polite">
        {status.message}
        {status.kind === "error" && (
          <>
            {" "}You can also email <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
          </>
        )}
      </p>
    </form>
  );
}
