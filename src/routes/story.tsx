import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, ExternalLink, Sparkles, Star } from "lucide-react";
import { book, storySpreads, purchaseUrl } from "@/lib/books";
import { Starfield } from "@/components/Starfield";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function Story() {
  const [active, setActive] = useState(0);
  const total = storySpreads.length;
  const go = (d: number) => setActive((prev) => (prev + d + total) % total);

  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative py-16 text-center overflow-hidden">
        <Starfield count={55} shootingStars={3} />
        <div className="relative mx-auto max-w-3xl px-6 text-cream">
          <span className="eyebrow text-gold">Peek Inside</span>
          <h1 className="mt-4 section-title text-4xl md:text-6xl text-cream">
            Step into <span className="gold-text">Astro Academy</span>
          </h1>
          <p className="mt-4 text-cream/75 leading-relaxed">
            A look at the hand-painted spreads of <em>{book.title}</em>. Turn the pages, then take the whole story home.
          </p>
        </div>
      </section>

      {/* VIEWER */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="card-soft overflow-hidden">
            <div className="relative bg-night">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={storySpreads[active].image}
                  alt={storySpreads[active].caption}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full aspect-[16/9] object-contain bg-night"
                />
              </AnimatePresence>

              <button
                onClick={() => go(-1)}
                aria-label="Previous page"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-night/70 text-cream grid place-items-center border border-cream/30 hover:bg-violet transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next page"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-night/70 text-cream grid place-items-center border border-cream/30 hover:bg-violet transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <span className="absolute top-3 right-3 chip-night !text-[11px]">
                {active + 1} / {total}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <p className="font-script text-2xl text-navy">{storySpreads[active].caption}</p>
              <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold shrink-0 !py-2.5 !px-4 text-sm">
                <ShoppingBag className="w-4 h-4" /> Get the Book
              </a>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
            {storySpreads.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Page ${i + 1}`}
                className={`relative rounded-lg overflow-hidden border-2 transition ${
                  i === active ? "border-violet shadow-md scale-105" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={s.image} alt="" className="w-full aspect-[16/9] object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-night relative py-20 overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
          <Sparkles className="w-9 h-9 text-gold mx-auto" />
          <h2 className="mt-5 section-title text-4xl md:text-6xl text-cream">
            Read the whole <span className="gold-text">story.</span>
          </h2>
          <p className="mt-5 text-cream/75 leading-relaxed">
            Bring Lester, Ahmi, and all of Astro Academy home — in paperback, hardcover, or e-book.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5 justify-center">
            <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold">
              <ExternalLink className="w-4 h-4" /> Buy the Book
            </a>
            <Link to="/books" className="btn-ghost">
              <ShoppingBag className="w-4 h-4" /> See all formats
            </Link>
          </div>
          <p className="mt-7 inline-flex items-center gap-2 text-cream/60 text-sm">
            <Star className="w-4 h-4 fill-gold text-gold" /> Every star shines in its own special way
          </p>
        </div>
      </section>
    </>
  );
}
