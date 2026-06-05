import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { book, type Format, purchaseUrl } from "@/lib/books";
import { useCart } from "@/lib/cart";
import {
  Check,
  ShoppingBag,
  Star,
  Sparkles,
  Truck,
  ShieldCheck,
  Gift,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function BooksPage() {
  const [format, setFormat] = useState<Format>("Hardcover");
  const { add } = useCart();
  const selected = book.formats.find((f) => f.type === format)!;

  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative py-16 text-center overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-3xl px-6 text-cream">
          <span className="eyebrow text-gold">The Book</span>
          <h1 className="mt-4 section-title text-4xl md:text-6xl text-cream">
            One story. <span className="gold-text">Three ways to read.</span>
          </h1>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Hold it, gift it, or carry it on your tablet — pick the format that fits your little one's bedtime best.
          </p>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
          {/* COVER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="absolute -inset-10 bg-violet/15 blur-3xl rounded-full" />
            <img
              src={book.coverFront}
              alt={`${book.title} — front cover`}
              className="relative w-full max-w-md mx-auto rounded-2xl border border-violet/20 shadow-[0_30px_70px_-25px_rgba(54,36,120,0.6)] rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto">
              {[
                { icon: Truck, t: "Free over $35" },
                { icon: ShieldCheck, t: "30-day returns" },
                { icon: Gift, t: "Gift wrap" },
              ].map((i) => (
                <div key={i.t} className="card-soft flex flex-col items-center gap-1.5 p-3 text-center">
                  <i.icon className="w-4 h-4 text-violet" />
                  <span className="text-[11px] font-semibold text-foreground/70">{i.t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DETAILS */}
          <div>
            <span className="eyebrow">
              <Sparkles className="w-4 h-4" /> {book.series} · Leo
            </span>
            <h2 className="mt-3 section-title text-4xl md:text-6xl text-navy">{book.title}</h2>
            <p className="mt-3 text-muted-foreground italic">{book.subtitle}</p>

            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                4.9 · 218 reviews · {book.pages} pages · Ages {book.ageRange}
              </span>
            </div>

            <p className="mt-6 text-foreground/85 leading-relaxed">{book.blurb}</p>

            <blockquote className="mt-6 card-soft p-6">
              <p className="font-script text-2xl text-navy leading-snug">"{book.excerpt}"</p>
            </blockquote>

            {/* FORMAT PICKER */}
            <div className="mt-8">
              <p className="text-sm font-bold tracking-wide text-foreground/60 uppercase">Choose your format</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {book.formats.map((f) => {
                  const active = format === f.type;
                  return (
                    <button
                      key={f.type}
                      onClick={() => setFormat(f.type)}
                      className={`relative p-4 rounded-2xl border text-left transition-all ${
                        active
                          ? "bg-gradient-to-br from-violet to-indigo text-cream border-violet shadow-lg -translate-y-0.5"
                          : "bg-card border-border hover:border-violet/40 hover:-translate-y-0.5"
                      }`}
                    >
                      {active && (
                        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gold text-night grid place-items-center">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                      <span className={`block font-display text-base font-semibold ${active ? "text-cream" : "text-navy"}`}>
                        {f.type}
                      </span>
                      <span className={`block font-display text-xl font-bold ${active ? "text-gold" : "text-violet"}`}>
                        ${f.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={format}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 card-soft p-5"
              >
                <p className="text-sm text-foreground/85">{selected.tagline}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {selected.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  add({
                    bookId: book.id,
                    title: book.title,
                    cover: book.coverFront,
                    format,
                    price: selected.price,
                  });
                  toast.success(`${book.title} (${format}) added to cart`);
                }}
                className="btn-primary flex-1"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart — ${selected.price}
              </button>
              <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold flex-1">
                <ExternalLink className="w-4 h-4" /> Buy Now
              </a>
            </div>

            <Link
              to="/story"
              className="mt-5 inline-flex items-center gap-2 text-violet font-semibold hover:gap-3 transition-all"
            >
              <BookOpen className="w-4 h-4" /> Take a peek inside first
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT THE BOOK */}
      <section className="panel-night relative py-20 overflow-hidden">
        <Starfield count={45} shootingStars={2} />
        <div className="relative mx-auto max-w-5xl px-6 text-cream">
          <div className="text-center mb-12">
            <span className="eyebrow text-gold">About the Book</span>
            <h2 className="mt-4 section-title text-4xl md:text-6xl text-cream">
              A quiet kind of <span className="gold-text">brave.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-cream/85 leading-relaxed">
              {book.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="space-y-5">
              <div className="card-night p-6">
                <h3 className="font-display text-2xl font-semibold text-cream">At a glance</h3>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <dt className="text-cream/55 font-semibold">Pages</dt>
                  <dd className="font-bold">{book.pages}</dd>
                  <dt className="text-cream/55 font-semibold">Ages</dt>
                  <dd className="font-bold">{book.ageRange}</dd>
                  <dt className="text-cream/55 font-semibold">Sign</dt>
                  <dd className="font-bold">Leo · {book.signDates}</dd>
                  <dt className="text-cream/55 font-semibold">Series</dt>
                  <dd className="font-bold">{book.series}</dd>
                  <dt className="text-cream/55 font-semibold">Author</dt>
                  <dd className="font-bold">Robin Lee Bartkovsky</dd>
                </dl>
              </div>
              <div className="card-night p-6">
                <h3 className="font-display text-2xl font-semibold text-cream">Themes</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {book.themes.map((t) => (
                    <span key={t} className="chip-night">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
