import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Quote, Moon, Mail } from "lucide-react";
import { book, author, seriesTagline } from "@/lib/books";
import { BuyTheBookLink } from "@/components/BuyTheBookLink";
import { Starfield } from "@/components/Starfield";
import authorPhoto from "@/assets/robin.png";

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="panel-night relative px-6 py-20 overflow-hidden text-cream text-center">
        <Starfield count={55} shootingStars={3} />
        <div className="relative mx-auto max-w-3xl">
          <span className="eyebrow text-gold">About the Author</span>
          <h1 className="mt-4 section-title text-[clamp(2.6rem,6vw,5rem)] text-cream">
            Hello, I'm <span className="gold-text">Robin</span>
          </h1>
          <p className="mt-5 text-cream/80 max-w-xl mx-auto leading-relaxed">{author.bio}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-cream/70 text-sm">
            <Moon className="w-4 h-4 text-gold" /> {author.name}
          </div>
        </div>
      </section>

      {/* AUTHOR LETTER */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative"
          >
            <div className="absolute -inset-6 bg-violet/15 blur-3xl rounded-full" />
            <img
              src={authorPhoto}
              alt={author.name}
              className="relative w-full rounded-2xl border border-violet/20 shadow-[0_24px_60px_-25px_rgba(54,36,120,0.6)] -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-5 text-foreground"
          >
            <span className="eyebrow">A note from Robin</span>
            <h2 className="section-title text-3xl md:text-5xl text-navy">Dear Young Leo,</h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              As I tell all signs, astrology is a powerful tool — amongst many — to get through this thing we call life.
              My stories are meant to highlight a few of the strengths and growth areas each sign typically shows. They
              could never capture the beautiful, complex nature of each one of us.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Astrology has helped me navigate many situations in life, and I hope these stories show you how it can do
              just that. I hope they spark a curiosity that encourages you to explore more about your own personal
              astrology. Your sun sign is just one of the many energies that make up who you are.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              My curiosity led me to take a beginner astrology course, and the knowledge I gained is what inspired me to
              create this series. I hope you find astrology to be as helpful and enlightening as I have.
            </p>
            <p className="font-script text-3xl text-violet">Sincerely, Robin</p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link to="/books" className="btn-primary">
                <BookOpen className="w-4 h-4" /> Read the Book
              </Link>
              <a href={`mailto:${author.email}`} className="btn-outline-ink">
                <Mail className="w-4 h-4" /> Email me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="panel-night relative py-24 overflow-hidden">
        <Starfield count={45} shootingStars={2} />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-cream">
          <Quote className="w-10 h-10 text-gold mx-auto" />
          <blockquote className="mt-7 section-title text-3xl md:text-5xl text-cream leading-tight">
            {seriesTagline}
          </blockquote>
          <p className="mt-7 text-cream/70 text-sm tracking-widest uppercase">— {author.name} · {book.title}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <BuyTheBookLink className="btn-gold">
              <BookOpen className="w-4 h-4" /> Buy the Book
            </BuyTheBookLink>
          </div>
        </div>
      </section>
    </>
  );
}
