import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, Sparkles, Quote, Sprout, Moon, ExternalLink } from "lucide-react";
import { book, author, purchaseUrl } from "@/lib/books";
import { Starfield } from "@/components/Starfield";
import coverBack from "@/assets/cover-back.webp";
import spreadTeacher from "@/assets/illustrations/spread-12.webp";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative px-6 py-20 overflow-hidden text-cream">
        <Starfield count={55} shootingStars={3} />
        <div className="relative mx-auto max-w-6xl">
          <span className="eyebrow text-gold">About the Author</span>
          <h1 className="mt-4 section-title text-[clamp(2.6rem,6vw,5rem)] text-cream">
            Hello, I'm <span className="gold-text">Robin</span>
          </h1>
          <p className="mt-5 text-cream/80 max-w-xl leading-relaxed">
            Storyteller, lifelong daydreamer, and creator of the Astro Academy series — gentle picture books inspired by
            the stars.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-cream/70 text-sm">
            <Moon className="w-4 h-4 text-gold" /> {author.name}
          </div>
        </div>
      </section>

      {/* AUTHOR LETTER */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative"
          >
            <div className="absolute -inset-6 bg-violet/15 blur-3xl rounded-full" />
            <img
              src={coverBack}
              alt="Lester Leo And The Lead — back cover"
              className="relative w-full rounded-2xl border border-violet/20 shadow-[0_24px_60px_-25px_rgba(54,36,120,0.6)] -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-5 text-foreground"
          >
            <span className="eyebrow">A note from Robin</span>
            <h2 className="section-title text-3xl md:text-5xl text-navy">Dear Young Leo,</h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              As I tell all signs, astrology is a powerful tool — amongst many — to get through this thing we call life.
              My stories are meant to highlight a few of the strengths and growth areas each sign typically shows. They
              could never capture the beautiful, complex nature of each one of us.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Astrology has helped me navigate many situations in life, and I hope these stories show you how it can do
              just that. I hope they spark a curiosity that encourages you to explore more about your own personal
              astrology. Your sun sign is just one of the many energies that make up who you are.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              My curiosity led me to take a beginner astrology course, and the knowledge I gained is what inspired me to
              create this series. I hope you find astrology to be as helpful and enlightening as I have.
            </p>
            <p className="font-script text-3xl text-violet">With love, Robin</p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link to="/books" className="btn-primary">
                <BookOpen className="w-4 h-4" /> Read the Book
              </Link>
              <Link to="/contact" className="btn-outline-ink">
                Say hello
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ASTRO ACADEMY */}
      <section className="panel-night relative py-24 overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="eyebrow text-gold">
              <Sparkles className="w-4 h-4" /> The Series
            </span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-cream">
              Welcome to <span className="gold-text">Astro Academy</span>
            </h2>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed">
              Astro Academy is a school where every little student carries the spark of their star sign. Each story
              follows one of them through a very real, very kid-sized feeling — and the gentle lesson the stars have to
              teach.
            </p>
            <p className="mt-4 text-lg text-cream/80 leading-relaxed">
              In <em>{book.title}</em>, our confident lion Lester learns that the brightest stars know how to let others
              shine, too.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { l: "Pages", v: book.pages },
                { l: "Ages", v: book.ageRange },
                { l: "Sign", v: "Leo" },
              ].map((s) => (
                <div key={s.l} className="card-night p-5 text-center">
                  <p className="font-display text-3xl font-bold gold-text">{s.v}</p>
                  <p className="mt-1 text-xs tracking-widest uppercase text-cream/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-6 bg-gold/15 blur-3xl rounded-full" />
            <img
              src={spreadTeacher}
              alt="A spread from Lester Leo And The Lead"
              className="relative w-full rounded-2xl border border-cream/15 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* LEO STRENGTHS + GROWTH */}
      <section className="panel-parchment py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">The Leo Sun Sign</span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-navy">
              Born to <span className="gradient-text">shine.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Leo · {book.signDates}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-soft p-8">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-gold/20 grid place-items-center">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-navy">Strengths</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {book.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-foreground/85">
                    <Star className="w-4 h-4 shrink-0 mt-1 text-gold fill-gold" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-soft p-8">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-violet/15 grid place-items-center">
                  <Sprout className="w-5 h-5 text-violet" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-navy">Room to grow</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {book.growth.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-foreground/85">
                    <Sparkles className="w-4 h-4 shrink-0 mt-1 text-violet" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="panel-night relative py-24 overflow-hidden">
        <Starfield count={45} shootingStars={2} />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-cream">
          <Quote className="w-10 h-10 text-gold mx-auto" />
          <blockquote className="mt-7 section-title text-3xl md:text-5xl text-cream leading-tight">
            "Every star shines in its <span className="gold-text">own special way.</span>"
          </blockquote>
          <p className="mt-7 text-cream/70 text-sm tracking-widest uppercase">— {author.name} · {book.title}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold">
              <ExternalLink className="w-4 h-4" /> Buy the Book
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
