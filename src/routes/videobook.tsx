import { Link } from "react-router-dom";
import { Play, ShoppingBag, ExternalLink, Sparkles, Tv, Star, Check } from "lucide-react";
import { book, videobook, storySpreads, purchaseUrl } from "@/lib/books";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function VideoPage() {
  const { add } = useCart();

  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative py-16 text-center overflow-hidden">
        <Starfield count={50} shootingStars={2} />
        <div className="relative mx-auto max-w-3xl px-6 text-cream">
          <span className="eyebrow text-gold">
            <Tv className="w-4 h-4" /> Videobook Edition
          </span>
          <h1 className="mt-4 section-title text-4xl md:text-6xl text-cream">
            Watch <span className="gold-text">Lester Leo</span>
          </h1>
          <p className="mt-4 text-cream/75 leading-relaxed">{videobook.tagline}</p>
        </div>
      </section>

      {/* PREVIEW (still image, no player) + BUY */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Static preview poster — intentionally not a player */}
          <div className="relative card-soft overflow-hidden">
            <img src={storySpreads[15].image} alt={`${book.title} videobook preview`} className="w-full aspect-video object-cover" />
            <div className="absolute inset-0 bg-night/35" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="w-16 h-16 rounded-full bg-cream/90 text-night grid place-items-center shadow-lg">
                <Play className="w-7 h-7 ml-1" />
              </span>
            </div>
            <span className="absolute bottom-3 left-3 chip-night">
              <Tv className="w-3.5 h-3.5 text-gold" /> {videobook.minutes} min · HD
            </span>
          </div>

          {/* Buy details */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">{book.title}</h2>
            <p className="mt-1 text-muted-foreground italic">Animated read-along videobook</p>

            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>

            <p className="mt-6 font-display text-5xl font-bold gradient-text">${videobook.price}</p>

            <ul className="mt-6 space-y-2.5 text-sm">
              {videobook.perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-violet" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={videobook.buyUrl} target={buyTarget} rel="noreferrer" className="btn-gold flex-1">
                <ExternalLink className="w-4 h-4" /> Buy Videobook
              </a>
              <button
                onClick={() => {
                  add({
                    bookId: `${book.id}-video`,
                    title: `${book.title} (Videobook)`,
                    cover: book.coverFront,
                    format: videobook.format,
                    price: videobook.price,
                  });
                  toast.success("Videobook added to cart");
                }}
                className="btn-primary flex-1"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet" /> Watch after purchase on your own device.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 mt-12 text-center">
          <Link to="/books" className="btn-outline-ink">
            See all formats
          </Link>
        </div>
      </section>
    </>
  );
}

export { VideoPage };
