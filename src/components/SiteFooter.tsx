import { Link } from "react-router-dom";
import { useState } from "react";
import { Instagram, Mail, BookOpen, Heart, Send, Moon, Star, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";
import { author, purchaseUrl } from "@/lib/books";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="panel-night relative overflow-hidden">
      <Starfield count={50} shootingStars={2} />

      {/* Newsletter band */}
      <div className="relative border-b border-violet/25">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow text-gold">✦ Starlight Letters</span>
            <h3 className="mt-4 section-title text-4xl md:text-5xl text-cream">
              Little notes,
              <br />
              <span className="gold-text">sent gently.</span>
            </h3>
            <p className="mt-5 text-cream/75 leading-relaxed max-w-md">
              One short letter a month — sneak peeks of new Astro Academy friends, free printables for little hands, and
              the quiet stories behind the paintings.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("You're in! Check your inbox for a tiny hello ✨");
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3 bg-white/5 border border-cream/20 rounded-3xl p-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@stardust.com"
              className="flex-1 px-5 py-3.5 bg-transparent placeholder:text-cream/45 text-cream focus:outline-none"
            />
            <button type="submit" className="btn-primary">
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

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
          <a
            href={purchaseUrl}
            target={purchaseUrl.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="btn-gold mt-7"
          >
            Buy the Book <ExternalLink className="w-4 h-4" />
          </a>
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
              <Link to="/audiobook" className="hover:text-gold transition">
                Audiobook
              </Link>
            </li>
            <li>
              <Link to="/videobook" className="hover:text-gold transition">
                Videobook
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
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow text-gold mb-5">Find Us</h4>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Mail, href: "mailto:hello@astroacademybooks.com", label: "Email" },
              { Icon: BookOpen, href: "#", label: "Goodreads" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full bg-white/5 border border-cream/25 text-cream grid place-items-center hover:bg-gold hover:text-night hover:border-gold transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-cream/70 leading-relaxed">
            Drop a note any time — little readers always get a reply.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-cream/70 text-sm">
            <Star className="w-4 h-4 text-gold fill-gold" /> Leo · {author.name}
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
