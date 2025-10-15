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
    <section id="contact" className="w-full max-w-5xl section-spacing">
      <div className="text-center mb-12">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss how we can work together</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="professional-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📧</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-secondary">joseph.a@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">💼</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-secondary">linkedin.com/in/joseph-a</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">🌍</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Availability</p>
                  <p className="text-secondary">Open for freelance & full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="professional-card">
          <h3 className="text-xl font-semibold text-foreground mb-6">Send Message</h3>
          <form onSubmit={submit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input 
                id="name"
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full border border-border rounded-lg p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                placeholder="Your full name" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input 
                id="email"
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full border border-border rounded-lg p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                placeholder="your.email@example.com" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea 
                id="message"
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full border border-border rounded-lg p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" 
                rows={6} 
                placeholder="Tell me about your project or opportunity..." 
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === "sending"}
              className="btn-primary w-full py-3 text-center font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending Message..." : "Send Message"}
            </button>
            
            {status === "sent" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  ✓ Message sent successfully! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">
                  ✗ Error sending message. Please try again or contact me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
