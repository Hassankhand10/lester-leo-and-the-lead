import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Format } from "./books";

export interface CartItem {
  bookId: string;
  title: string;
  cover: string;
  format: Format;
  price: number;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (bookId: string, format: Format) => void;
  setQty: (bookId: string, format: Format, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "zodiac-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add: CartCtx["add"] = (item) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.bookId === item.bookId && p.format === item.format);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };
  const remove: CartCtx["remove"] = (bookId, format) =>
    setItems((prev) => prev.filter((p) => !(p.bookId === bookId && p.format === format)));
  const setQty: CartCtx["setQty"] = (bookId, format, qty) =>
    setItems((prev) =>
      prev.map((p) => (p.bookId === bookId && p.format === format ? { ...p, qty: Math.max(1, qty) } : p)),
    );
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, total }}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
