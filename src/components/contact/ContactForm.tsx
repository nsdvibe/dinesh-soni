"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { site } from "@/lib/site";
import { getDb, WEB3FORMS_KEY } from "@/lib/firebase";
import { ActionButton } from "@/components/ui/GoldButton";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-gold/60 focus:bg-surface";
const labelCls = "mb-1.5 block text-sm font-medium text-ink-soft";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot — bots fill hidden fields.
    if ((data.get("company") as string)?.length) return;

    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      phone: (data.get("phone") as string)?.trim() || "",
      eventType: (data.get("eventType") as string) || "",
      eventDate: (data.get("eventDate") as string) || "",
      message: (data.get("message") as string)?.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setError("Please fill in your name, email and a short message.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      let delivered = false;

      // 1) Store in Firestore (primary record of the enquiry).
      const db = getDb();
      if (db) {
        await addDoc(collection(db, "enquiries"), {
          ...payload,
          createdAt: serverTimestamp(),
          source: "website",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        });
        delivered = true;
      }

      // 2) Optional email alert via Web3Forms (activates once a key is set).
      if (WEB3FORMS_KEY) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New booking enquiry — ${payload.name}`,
            from_name: `${site.name} Website`,
            ...payload,
          }),
        });
        if (res.ok) delivered = true;
      }

      if (!delivered) {
        // Neither backend configured yet — guide the user to email directly.
        throw new Error("no-backend");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message === "no-backend"
          ? `Booking isn't connected yet. Please email ${site.contact.email} directly — I'll get right back to you.`
          : "Something went wrong sending your message. Please try again or email me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-gold/30 bg-surface/50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold" strokeWidth={1.4} />
        <h3 className="mt-5 font-serif text-2xl text-ink">Message received — thank you!</h3>
        <p className="mt-2 max-w-sm text-ink-soft">
          I&rsquo;ll be in touch within 24 hours. For anything urgent, call or WhatsApp{" "}
          <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-gold hover:underline">
            {site.contact.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 cursor-pointer text-sm text-gold transition-colors hover:text-gold-bright"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface/40 p-6 sm:p-8" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name <span className="text-gold">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-gold">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 …" className={inputCls} />
        </div>
        <div>
          <label htmlFor="eventDate" className={labelCls}>
            Event date
          </label>
          <input id="eventDate" name="eventDate" type="date" className={`${inputCls} [color-scheme:dark]`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="eventType" className={labelCls}>
            Type of event
          </label>
          <select id="eventType" name="eventType" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select an event type…
            </option>
            {site.contact.eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Tell me about your event <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Date, city, audience size, and what you have in mind…"
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <ActionButton type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </ActionButton>
        <p className="text-xs text-muted">
          Or email{" "}
          <a href={`mailto:${site.contact.email}`} className="text-gold hover:underline">
            {site.contact.email}
          </a>
        </p>
      </div>
    </form>
  );
}
