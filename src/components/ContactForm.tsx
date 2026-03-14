"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  initialSubject?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ initialSubject = "" }: ContactFormProps) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus("submitting");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      subject: (formData.get("subject") as string) || "",
      message: (formData.get("message") as string) || "",
      company: (formData.get("company") as string) || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your message.");
      }

      setStatus("success");
      setMessage("Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again.",
      );
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Your Name *" required />
        <input type="email" name="email" placeholder="Your Email *" required />
      </div>
      <input type="text" name="subject" placeholder="Subject" defaultValue={initialSubject} />
      <textarea name="message" placeholder="Your Message *" rows={6} required></textarea>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />
      {status !== "idle" ? (
        <p
          className={`rounded-md px-4 py-3 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-700"
              : status === "error"
                ? "bg-red-50 text-red-700"
                : "bg-slate-100 text-slate-600"
          }`}
          role="status"
        >
          {status === "submitting" ? "Sending your message..." : message}
        </p>
      ) : null}
      <button type="submit" className="btn-primary disabled:opacity-70" disabled={status === "submitting"}>
        {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
