"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full max-w-2xl mt-12">
      <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
      <p className="text-sm text-gray-600 mb-4">I'm available for freelance and full-time roles.</p>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded p-2" placeholder="Your name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded p-2" placeholder="Your email" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border rounded p-2" rows={6} placeholder="Message" />
        <div>
          <button type="submit" className="px-4 py-2 bg-foreground text-background rounded">Send</button>
        </div>
        {status === "sending" && <p className="text-sm">Sending…</p>}
        {status === "sent" && <p className="text-sm text-green-600">Message sent. Thank you!</p>}
        {status === "error" && <p className="text-sm text-red-600">Error sending message.</p>}
      </form>
    </section>
  );
}
