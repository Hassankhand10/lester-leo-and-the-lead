import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Moon, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { purchaseUrl } from "@/lib/books";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/books", label: "The Book" },
  { to: "/story", label: "Peek Inside" },
  { to: "/audiobook", label: "Audio" },
  { to: "/videobook", label: "Video" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;

  return (
    <header className="sticky top-0 z-50 bg-night/95 backdrop-blur-md border-b border-violet/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="relative grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-violet to-indigo border border-cream/30">
            <Moon className="w-4 h-4 text-gold group-hover:rotate-12 transition" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-cream leading-none">
            Astro <span className="text-gold">Academy</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link" data-active={path === n.to}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={purchaseUrl}
            target={purchaseUrl.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="hidden lg:inline-flex btn-gold !py-2 !px-4 text-sm"
          >
            Buy the Book <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cream/40 text-cream hover:bg-cream hover:text-night transition"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-night text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold border-2 border-night">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full text-cream hover:bg-white/10"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-night border-t border-violet/30"
          >
            <div className="px-5 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 font-display text-lg text-cream hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={purchaseUrl}
                target={purchaseUrl.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="btn-gold mt-2"
                onClick={() => setOpen(false)}
              >
                Buy the Book <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
