import { Download, ImageIcon, Share2 } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import { book, author } from "@/lib/books";

const socialAssets = [
  {
    file: "cover-front.webp",
    title: "Book cover",
    description: "Front cover — great for launch posts and link-in-bio.",
    aspect: "square",
  },
  {
    file: "robin-author.png",
    title: "Author photo",
    description: "Robin Bartkovsky — use for author spotlights and Q&A posts.",
    aspect: "portrait",
  },
  {
    file: "spread-opening.webp",
    title: "Opening spread",
    description: "Lester Leo could not WAIT to get to school.",
    aspect: "landscape",
  },
  {
    file: "spread-classroom.webp",
    title: "Mrs. Sourcey moment",
    description: "A warm classroom scene from the story.",
    aspect: "landscape",
  },
  {
    file: "spread-finale.webp",
    title: "Standing ovation",
    description: "Ahmi's big night — perfect for celebration posts.",
    aspect: "landscape",
  },
];

const basePath = `${import.meta.env.BASE_URL}social`;

export default function Marketing() {
  return (
    <>
      <section className="panel-night relative px-6 py-16 overflow-hidden text-cream text-center">
        <Starfield count={45} shootingStars={2} />
        <div className="relative mx-auto max-w-3xl">
          <span className="eyebrow text-gold">
            <Share2 className="w-4 h-4" /> Marketing
          </span>
          <h1 className="mt-4 section-title text-[clamp(2.4rem,6vw,4.5rem)] text-cream">
            Social media <span className="gold-text">images</span>
          </h1>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto leading-relaxed">
            Download these images to start promoting <em>{book.title}</em>. Right-click or use the download button — then
            post on Instagram, Facebook, or anywhere you share.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialAssets.map((asset) => (
              <div key={asset.file} className="card-soft overflow-hidden text-center">
                <div className="bg-night/5 p-4">
                  <img
                    src={`${basePath}/${asset.file}`}
                    alt={asset.title}
                    className={`mx-auto rounded-lg border border-border shadow-md ${
                      asset.aspect === "portrait" ? "max-h-64 w-auto" : "w-full"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold text-navy">{asset.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{asset.description}</p>
                  <a
                    href={`${basePath}/${asset.file}`}
                    download
                    className="btn-primary mt-5 inline-flex"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 card-soft p-8 max-w-2xl mx-auto text-center">
            <ImageIcon className="w-8 h-8 text-violet mx-auto" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy">Suggested post copy</h2>
            <p className="mt-4 text-foreground/85 leading-relaxed italic">
              "Meet Lester Leo — a confident little lion learning that we are here to help each other shine. The first
              book in the Astro Academy series by {author.name} is here!"
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Tag @astroacademybooks · Link in bio to order
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
