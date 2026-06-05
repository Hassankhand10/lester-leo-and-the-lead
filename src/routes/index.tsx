import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  ArrowRight,
  Heart,
  Sparkles,
  Quote,
  ShoppingBag,
  ExternalLink,
  Users,
  Wand2,
} from "lucide-react";
import { book, author, characters, purchaseUrl } from "@/lib/books";
import { Starfield } from "@/components/Starfield";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function Home() {
  const fromPrice = Math.min(...book.formats.map((f) => f.price));

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="panel-night relative overflow-hidden">
        <Starfield count={70} shootingStars={3} />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-violet/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-cream"
          >
            <span className="chip-night">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Astro Academy · New Release
            </span>

            <h1 className="mt-6 section-title text-[clamp(2.8rem,7vw,5.5rem)] text-cream">
              Lester Leo
              <br />
              <span className="gold-text">And The Lead</span>
            </h1>

            <p className="mt-4 font-script text-2xl text-gold/90">Every star shines in its own special way.</p>

            <p className="mt-6 text-lg text-cream/80 max-w-md leading-relaxed">{book.tagline}</p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold">
                <ShoppingBag className="w-4 h-4" /> Buy the Book
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-cream/70 text-sm">
              <span className="inline-flex items-center gap-2">
                <Star className="w-4 h-4 fill-gold text-gold" /> Ages {book.ageRange}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold" /> {book.pages} pages
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" /> Leo · {book.signDates}
              </span>
            </div>
          </motion.div>

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-12 bg-gold/15 blur-3xl rounded-full" />
            <div className="relative animate-float">
              <img
                src={book.coverFront}
                alt="Lester Leo And The Lead — front cover"
                className="relative w-[300px] sm:w-[380px] lg:w-[440px] rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-cream/20 -rotate-2"
              />
              <motion.div
                initial={{ opacity: 0, rotate: -16 }}
                animate={{ opacity: 1, rotate: 10 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-5 -right-5 bg-gradient-to-br from-gold to-amber-400 text-night w-24 h-24 rounded-full grid place-items-center text-center shadow-lg border-2 border-cream/40 animate-bouncy"
              >
                <div className="leading-tight">
                  <p className="text-[10px] font-extrabold tracking-widest uppercase">Picture</p>
                  <p className="font-display text-2xl font-bold">Book</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="bg-night text-cream py-5 border-y border-violet/25 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track font-display text-xl md:text-2xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-7 pr-7 shrink-0">
              {[
                "Lester Leo And The Lead",
                "Astro Academy",
                "The Power of Friendship",
                "Every star shines",
                "Ages 4–8",
                "Robin Lee Bartkovsky",
              ].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-7">
                  <span className="text-cream/90">{t}</span>
                  <Star className="w-4 h-4 text-gold fill-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== THE STORY ===== */}
      <section className="panel-parchment py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">The Story</span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-navy">
              One spotlight. <span className="gradient-text">Two best friends.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              {book.longDescription.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg leading-relaxed text-foreground/85"
                >
                  {p}
                </motion.p>
              ))}
              <blockquote className="card-soft p-7">
                <Quote className="w-7 h-7 text-violet" />
                <p className="mt-3 font-script text-3xl text-navy leading-snug">"{book.excerpt}"</p>
              </blockquote>
            </div>

            <div className="lg:col-span-5">
              <div className="card-soft p-7">
                <h3 className="font-display text-2xl font-semibold text-navy">A Leo at heart</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Inspired by the real strengths of the Leo sun sign ({book.signDates}).
                </p>
                <ul className="mt-5 space-y-2.5">
                  {book.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-foreground/85">
                      <Star className="w-4 h-4 shrink-0 mt-1 text-gold fill-gold" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {book.themes.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET THE CLASS ===== */}
      <section className="panel-night relative py-24 px-6 lg:px-12 overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow text-gold">
              <Users className="w-4 h-4" /> Meet the Class
            </span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-cream">
              Friends from <span className="gold-text">Astro Academy</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {characters.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-night p-8 text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-white/10 border border-cream/20 grid place-items-center text-3xl">
                  {c.emoji}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">{c.name}</h3>
                <p className="mt-1 text-gold text-sm font-semibold">{c.role}</p>
                <p className="mt-4 text-cream/75 leading-relaxed text-sm">{c.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATS ===== */}
      <section className="bg-secondary py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Formats</span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-navy">
              Choose how you <span className="gradient-text">hold the story.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {book.formats.map((f, i) => {
              const popular = f.type === "Hardcover";
              return (
                <motion.div
                  key={f.type}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 ${popular ? "card-night" : "card-soft"}`}
                >
                  {popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-night text-xs font-extrabold tracking-wide whitespace-nowrap shadow">
                      ★ Most Loved
                    </span>
                  )}
                  <h3 className={`font-display text-2xl font-semibold ${popular ? "text-cream" : "text-navy"}`}>
                    {f.type}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${popular ? "text-cream/75" : "text-muted-foreground"}`}>
                    {f.tagline}
                  </p>
                  <p className={`mt-6 font-display text-5xl font-bold ${popular ? "gold-text" : "gradient-text"}`}>
                    ${f.price}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {f.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${popular ? "text-gold" : "text-violet"}`} />
                        <span className={popular ? "text-cream/85" : "text-foreground/85"}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/books" className={`mt-8 w-full ${popular ? "btn-gold" : "btn-primary"}`}>
                    Choose {f.type} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="panel-parchment py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Praise</span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-navy">
              Little humans. <span className="gradient-text">Big feelings.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                q: "A gentle, beautiful lesson about friendship and humility. My son asked for it three nights in a row.",
                a: "Maya R.",
                role: "Parent of a proud little Leo",
              },
              {
                q: "The watercolor art is stunning and the message is exactly what kids need. We love Astro Academy!",
                a: "Daniel K.",
                role: "Dad of a 6-year-old",
              },
              {
                q: "A picture book with a real heart. Perfect for talking about big emotions and cheering each other on.",
                a: "Hannah P.",
                role: "Children's Librarian",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-soft p-8"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-violet mt-5" />
                <blockquote className="mt-4 text-lg leading-snug text-foreground/85">"{r.q}"</blockquote>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-display text-lg font-semibold text-navy">{r.a}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="panel-night relative py-24 px-6 lg:px-12 overflow-hidden">
        <Starfield count={60} shootingStars={3} />
        <div className="relative mx-auto max-w-4xl text-center text-cream">
          <span className="eyebrow text-gold">
            <Wand2 className="w-4 h-4" /> Bring it home
          </span>
          <h2 className="mt-5 section-title text-5xl md:text-7xl text-cream">
            Take <span className="gold-text">Lester Leo</span>
            <br />
            home tonight.
          </h2>
          <p className="mt-7 text-lg text-cream/75 max-w-xl mx-auto leading-relaxed">
            Available in three loving formats, from just ${fromPrice.toFixed(2)}. Read it once at bedtime — and again
            tomorrow, because they'll ask.
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5 justify-center">
            <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold">
              <ExternalLink className="w-4 h-4" /> Buy the Book
            </a>
            <Link to="/books" className="btn-ghost">
              <ShoppingBag className="w-4 h-4" /> Shop all formats
            </Link>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-cream/60 text-sm">
            <Heart className="w-4 h-4 fill-gold text-gold" /> A story about the power of friendship
          </p>
        </div>
      </section>
    </>
  );
}
