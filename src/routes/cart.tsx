import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Starfield } from "@/components/Starfield";
import { purchaseUrl } from "@/lib/books";

const buyTarget = purchaseUrl.startsWith("http") ? "_blank" : undefined;

export default function CartPage() {
  const { items, setQty, remove, total, clear } = useCart();
  const shipping = total > 0 ? (total > 35 ? 0 : 4.99) : 0;
  const tax = total * 0.08;
  const grand = total + shipping + tax;

  return (
    <>
      {/* HERO */}
      <section className="panel-night relative py-14 overflow-hidden">
        <Starfield count={40} shootingStars={2} />
        <div className="relative mx-auto max-w-5xl px-6 text-cream text-center lg:text-left">
          <span className="eyebrow text-gold">Your Little Library</span>
          <h1 className="mt-4 section-title text-4xl md:text-6xl text-cream">
            Your <span className="gold-text">Cart</span>
          </h1>
          <p className="mt-3 text-cream/75">
            {items.length === 0
              ? "Empty — for now ✨"
              : `${items.length} title${items.length > 1 ? "s" : ""} ready to come home with you.`}
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet to-indigo text-cream grid place-items-center shadow-lg">
                <Sparkles className="w-9 h-9" />
              </div>
              <p className="mt-6 text-xl text-foreground/75 font-medium">Your cart is waiting for its first story.</p>
              <Link to="/books#order" className="btn-primary mt-8">
                <ShoppingBag className="w-4 h-4" /> Browse the Book <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map((it) => (
                    <motion.div
                      key={`${it.bookId}-${it.format}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      className="card-soft flex gap-4 p-4 items-center"
                    >
                      <img
                        src={it.cover}
                        alt={it.title}
                        className="w-16 h-20 object-cover rounded-lg border border-border"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold text-navy truncate">{it.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{it.format}</p>
                        <p className="font-display text-xl font-bold text-violet mt-1">
                          ${(it.price * it.qty).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 border border-border rounded-full p-1">
                        <button
                          onClick={() => setQty(it.bookId, it.format, it.qty - 1)}
                          className="w-8 h-8 rounded-full hover:bg-violet hover:text-cream grid place-items-center transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-semibold">{it.qty}</span>
                        <button
                          onClick={() => setQty(it.bookId, it.format, it.qty + 1)}
                          className="w-8 h-8 rounded-full hover:bg-violet hover:text-cream grid place-items-center transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(it.bookId, it.format)}
                        className="p-2 text-muted-foreground hover:text-destructive transition"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <button
                  onClick={clear}
                  className="text-sm font-semibold text-muted-foreground hover:text-destructive transition"
                >
                  Clear cart
                </button>
              </div>

              <aside className="card-soft p-7 h-fit sticky top-24">
                <h2 className="font-display text-2xl font-semibold text-navy">Order Summary</h2>
                <div className="mt-5 space-y-3 text-sm">
                  <Row label="Subtotal" val={`$${total.toFixed(2)}`} />
                  <Row label="Shipping" val={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
                  <Row label="Tax (est.)" val={`$${tax.toFixed(2)}`} />
                  <div className="border-t border-border pt-3 mt-3">
                    <Row
                      label={<span className="font-display text-lg font-semibold text-navy">Total</span>}
                      val={<span className="font-display text-2xl font-bold text-violet">${grand.toFixed(2)}</span>}
                    />
                  </div>
                </div>
                {total < 35 && (
                  <p className="mt-4 text-xs bg-violet/10 border border-violet/30 rounded-xl p-3 font-medium text-foreground/80">
                    ✨ Add ${(35 - total).toFixed(2)} more for free shipping
                  </p>
                )}
                <button
                  onClick={() => toast.success("Checkout coming soon! ✨")}
                  className="btn-primary mt-6 w-full"
                >
                  Checkout
                </button>
                <a href={purchaseUrl} target={buyTarget} rel="noreferrer" className="btn-gold mt-3 w-full">
                  <ExternalLink className="w-4 h-4" /> Buy from retailer
                </a>
                <p className="mt-3 text-center text-xs text-muted-foreground">Secure · 30-day returns</p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Row({ label, val }: { label: React.ReactNode; val: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{val}</span>
    </div>
  );
}
