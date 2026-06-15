import { Link } from "react-router-dom";
import { Headphones, ShoppingBag, ExternalLink, Sparkles, Moon, Star, Check, Mic } from "lucide-react";
import { book, audiobook, purchaseUrl } from "@/lib/books";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function AudioPage() {
  const { add } = useCart();

  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative py-16 text-center overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-3xl px-6 text-cream">
          <span className="eyebrow text-gold">
            <Headphones className="w-4 h-4" /> Audiobook Edition
          </span>
          <h1 className="mt-4 section-title text-4xl md:text-6xl text-cream">
            Listen to <span className="gold-text">Lester Leo</span>
          </h1>
          <p className="mt-4 text-cream/75 leading-relaxed">{audiobook.tagline}</p>
        </div>
      </section>

      {/* BUY PANEL */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="card-soft overflow-hidden grid md:grid-cols-[auto,1fr]">
            {/* Cover */}
            <div className="panel-night relative grid place-items-center p-10">
              <Starfield count={30} shootingStars={1} />
              <div className="relative">
                <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full" />
                <img
                  src={book.coverFront}
                  alt={book.title}
                  className="relative w-48 rounded-xl border border-cream/20 shadow-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 chip-night whitespace-nowrap">
                  <Headphones className="w-3.5 h-3.5 text-gold" /> {audiobook.minutes} min listen
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 md:p-10">
              <h2 className="font-display text-3xl font-semibold text-navy">{book.title}</h2>
              <p className="mt-1 text-muted-foreground italic">Audiobook · Narrated by {audiobook.narrator}</p>

              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-6 font-display text-5xl font-bold gradient-text">${audiobook.price}</p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {audiobook.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 text-violet" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={audiobook.buyUrl} target={buyTarget} rel="noreferrer" className="btn-gold flex-1">
                  <ExternalLink className="w-4 h-4" /> Buy Audiobook
                </a>
                <button
                  onClick={() => {
                    add({
                      bookId: `${book.id}-audio`,
                      title: `${book.title} (Audiobook)`,
                      cover: book.coverFront,
                      format: audiobook.format,
                      price: audiobook.price,
                    });
                    toast.success("Audiobook added to cart");
                  }}
                  className="btn-primary flex-1"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Recording guide for Robin */}
          <div className="mt-14 card-soft p-8 md:p-10 max-w-3xl">
            <span className="eyebrow">
              <Mic className="w-4 h-4" /> Recording the audiobook
            </span>
            <h3 className="mt-4 section-title text-2xl md:text-3xl text-navy">
              How we'll capture <span className="gradient-text">your narration</span>
            </h3>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              Robin narrates the audiobook herself. The team will schedule one or two quiet recording sessions — either
              remotely with a quality USB microphone at home, or in a local studio for polished sound.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li>Read through the full story in a calm, bedtime-friendly pace (~{audiobook.minutes} minutes)</li>
              <li>Soft background music is added afterward in post-production</li>
              <li>Final files are delivered as MP3 for download on the site</li>
            </ul>
            <Link to="/contact" className="btn-outline-ink mt-8">
              Contact the team to schedule recording
            </Link>
          </div>

          {/* When to listen */}
          <div className="mt-14 text-center">
            <span className="eyebrow">Perfect for</span>
            <h3 className="mt-3 section-title text-3xl md:text-4xl text-navy">
              Quiet little <span className="gradient-text">moments</span>
            </h3>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { icon: Moon, t: "Bedtime", d: "Short enough to finish before sleep, gentle enough to drift away to." },
              { icon: Sparkles, t: "Long drives", d: "Calm narration that won't startle the back seat." },
              { icon: Headphones, t: "Anytime", d: "On repeat, all afternoon, if that's what they ask for." },
            ].map((m) => (
              <div key={m.t} className="card-soft p-6">
                <m.icon className="w-7 h-7 text-violet" />
                <h4 className="mt-4 font-display text-xl font-semibold text-navy">{m.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/books#order" className="btn-outline-ink">
              Prefer the printed book?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export { AudioPage };
