import { Mail } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { author } from "@/lib/books";

export default function Contact() {
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
            Have a question or a note for Robin? Send an email any time.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="card-soft p-10">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-violet to-indigo text-cream grid place-items-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-navy">Email Robin</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              The best way to reach me — for questions, fan mail, or hello.
            </p>
            <a href={`mailto:${author.email}`} className="btn-primary mt-7 inline-flex">
              <Mail className="w-4 h-4" /> {author.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
