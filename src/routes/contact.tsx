import { useState } from "react";
import { Mail, MessageCircle, Send, Sparkles, School } from "lucide-react";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";

export default function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative px-6 py-16 overflow-hidden text-cream">
        <Starfield count={45} shootingStars={2} />
        <div className="relative mx-auto max-w-6xl">
          <span className="eyebrow text-gold">Get in Touch</span>
          <h1 className="mt-4 section-title text-[clamp(2.4rem,6vw,4.5rem)] text-cream">
            Say <span className="gold-text">hello</span>
          </h1>
          <p className="mt-4 text-cream/80 max-w-xl leading-relaxed">
            School visits, bulk orders, or fan mail from tiny humans — I read every message.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-5">
            {[
              { icon: Mail, title: "Email", val: "hello@astroacademybooks.com" },
              { icon: School, title: "School Visits", val: "Book a virtual or in-person reading." },
              { icon: Sparkles, title: "Bulk Orders", val: "Classroom sets — 20% off for educators." },
            ].map((c) => (
              <div key={c.title} className="card-soft flex gap-4 p-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-indigo text-cream grid place-items-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{c.val}</p>
                </div>
              </div>
            ))}
            <div className="card-soft p-5">
              <MessageCircle className="w-6 h-6 text-violet" />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Robin replies to little readers and grown-ups alike — usually within 48 hours.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                toast.success("Message sent! Robin will reply within 48 hours ✨");
                setSending(false);
                (e.target as HTMLFormElement).reset();
              }, 800);
            }}
            className="md:col-span-3 card-soft p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" placeholder="Stardust the Magnificent" />
              <Field label="Email" name="email" type="email" placeholder="you@stars.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="A note about Lester Leo…" />
            <div>
              <label className="block text-sm font-bold tracking-wide text-foreground/70 mb-2">Message</label>
              <textarea
                required
                rows={6}
                name="message"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-violet focus:ring-2 focus:ring-violet/30 focus:outline-none transition"
              />
            </div>
            <button disabled={sending} type="submit" className="btn-primary disabled:opacity-60">
              <Send className="w-4 h-4" /> {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-bold tracking-wide text-foreground/70 mb-2">{label}</label>
      <input
        required
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-violet focus:ring-2 focus:ring-violet/30 focus:outline-none transition"
      />
    </div>
  );
}
