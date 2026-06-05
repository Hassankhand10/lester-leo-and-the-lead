import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/lib/cart";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

import Home from "./routes/index";
import About from "./routes/about";
import Books from "./routes/books";
import Story from "./routes/story";
import Audiobook from "./routes/audiobook";
import Videobook from "./routes/videobook";
import Contact from "./routes/contact";
import Cart from "./routes/cart";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display gradient-text">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">This little star drifted off the map.</p>
        <Link to="/" className="btn-primary mt-6">
          Take me home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ScrollToTop />
        <SiteHeader />
        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/story" element={<Story />} />
            <Route path="/audiobook" element={<Audiobook />} />
            <Route path="/videobook" element={<Videobook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
        <Toaster richColors position="top-center" />
      </CartProvider>
    </QueryClientProvider>
  );
}
