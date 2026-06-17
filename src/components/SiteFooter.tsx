import { Link } from "react-router-dom";
import { Mail, Heart, Moon, Star } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { BuyTheBookLink } from "@/components/BuyTheBookLink";
import { author } from "@/lib/books";

export function SiteFooter() {
  return (
    <footer className="panel-night relative overflow-hidden">
      <Starfield count={50} shootingStars={2} />

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-violet to-indigo border border-cream/30">
              <Moon className="w-5 h-5 text-gold" />
            </span>
            <span className="font-display text-2xl font-semibold text-cream">
              Astro <span className="text-gold">Academy</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-cream/75 leading-relaxed">
            <em>Lester Leo And The Lead</em> — a warm picture book about a confident little lion, his best friend, and
            the gentle magic of letting someone else shine. Made for bedtimes, blanket forts, and big little hearts.
          </p>
          <BuyTheBookLink className="btn-gold mt-7">
            Buy the Book
          </BuyTheBookLink>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-cream/80 font-semibold">
            <li>
              <Link to="/books" className="hover:text-gold transition">
                The Book
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition">
                About the Author
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/marketing" className="hover:text-gold transition">
                Social Images
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow text-gold mb-5">Say Hello</h4>
          <a
            href={`mailto:${author.email}`}
            className="inline-flex items-center gap-2.5 text-cream/85 hover:text-gold transition font-semibold"
          >
            <span className="w-11 h-11 rounded-full bg-white/5 border border-cream/25 grid place-items-center">
              <Mail className="w-5 h-5" />
            </span>
            {author.email}
          </a>
          <p className="mt-4 inline-flex items-center gap-2 text-cream/70 text-sm">
            <Star className="w-4 h-4 text-gold fill-gold" /> {author.name}
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative border-t border-violet/25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-cream/60">
          <p>© {new Date().getFullYear()} {author.name} · Astro Academy · All rights reserved</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 fill-gold text-gold" /> for little stars
          </p>
        </div>
      </div>
    </footer>
  );
}
