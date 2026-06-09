import coverFront from "@/assets/cover-front.webp";
import coverBack from "@/assets/cover-back.png";

import spread01 from "@/assets/illustrations/spread-01.webp";
import spread02 from "@/assets/illustrations/spread-02.webp";
import spread03 from "@/assets/illustrations/spread-03.webp";
import spread04 from "@/assets/illustrations/spread-04.webp";
import spread05 from "@/assets/illustrations/spread-05.webp";
import spread06 from "@/assets/illustrations/spread-06.webp";
import spread07 from "@/assets/illustrations/spread-07.webp";
import spread08 from "@/assets/illustrations/spread-08.webp";
import spread09 from "@/assets/illustrations/spread-09.webp";
import spread10 from "@/assets/illustrations/spread-10.webp";
import spread11 from "@/assets/illustrations/spread-11.webp";
import spread12 from "@/assets/illustrations/spread-12.webp";
import spread13 from "@/assets/illustrations/spread-13.webp";
import spread14 from "@/assets/illustrations/spread-14.webp";
import spread15 from "@/assets/illustrations/spread-15.webp";
import spread16 from "@/assets/illustrations/spread-16.webp";

export type Format = "Paperback" | "Hardcover" | "E-Book" | "Audiobook" | "Videobook";

export interface BookFormat {
  type: Format;
  price: number;
  tagline: string;
  perks: string[];
}

export interface StorySpread {
  image: string;
  caption: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  series: string;
  tagline: string;
  sign: string;
  signDates: string;
  coverFront: string;
  coverBack: string;
  blurb: string;
  longDescription: string[];
  excerpt: string;
  formats: BookFormat[];
  pages: number;
  ageRange: string;
  themes: string[];
  strengths: string[];
  growth: string[];
}

/**
 * Where the "Buy Now" buttons point. Replace this with the real
 * retailer / store checkout URL when it is ready.
 */
export const purchaseUrl = "#";

export const author = {
  name: "Robin Bartkovsky",
  series: "Astro Academy",
  email: "hello@astroacademybooks.com",
  bio: "Robin Bartkovsky is an amateur astrologist and former teacher. She resides outside Chicago with her supportive husband, teenage sons, and adorable fur babies.",
  tagline:
    "A warm-hearted picture book about a confident little lion, his best friend, and the gentle magic of letting someone else shine.",
};

export const characters = [
  {
    name: "Lester Leo",
    role: "Our brave little lion",
    blurb:
      "Confident, charismatic, and always ready for the spotlight — Lester is learning that being a true star sometimes means cheering for someone else.",
    emoji: "🦁",
  },
  {
    name: "Ahmi Aries",
    role: "Lester's best friend",
    blurb:
      "Hard-working and kind, Ahmi practiced for weeks to earn the lead in the class play, Our Unique Universe.",
    emoji: "🐏",
  },
  {
    name: "Mrs. Sourcey",
    role: "The wise teacher",
    blurb:
      "Astro Academy's gentle guide, who reminds her students that every star shines in its own special way.",
    emoji: "✨",
  },
];

export const book: Book = {
  id: "lester-leo-and-the-lead",
  title: "Lester Leo And The Lead",
  subtitle: "An Astro Academy story by Robin Bartkovsky",
  series: "Astro Academy",
  tagline: author.tagline,
  sign: "Leo",
  signDates: "July 23 – August 22",
  coverFront,
  coverBack,
  blurb:
    "Welcome to Astro Academy! When Lester Leo gets some surprising news about this year's class play, Mrs. Sourcey steps in with a gentle reminder that it's okay to allow others to shine, too. Discover the power of friendship!",
  longDescription: [
    "Lester Leo could not WAIT to get to school. Today was the day Mrs. Sourcey was posting the roles of the class play, Our Unique Universe — and he just KNEW he was going to be the lead.",
    "But when the cast list goes up, the spotlight lands somewhere Lester never expected. With a little wisdom from Mrs. Sourcey and a lot of heart, Lester discovers that supporting the people we love is its own kind of brave.",
    "Inspired by the strengths and growth of the Leo sun sign, Lester Leo And The Lead is a tender, star-bright story about confidence, humility, and the quiet courage of friendship.",
  ],
  excerpt: "Every star shines in its own special way.",
  formats: [
    {
      type: "Paperback",
      price: 5.99,
      tagline: "Soft, light, and perfect for backpacks and bedtimes.",
      perks: ["Matte storybook cover", "Vivid watercolor pages", "Ages 4–8"],
    },
    {
      type: "Hardcover",
      price: 9.99,
      tagline: "A keepsake edition built to be read again and again.",
      perks: ["Durable hardback", "Gift-ready", "Ages 4–8"],
    },
    {
      type: "E-Book",
      price: 2.99,
      tagline: "Read anywhere — tablets, phones, and starlit road trips.",
      perks: ["Instant delivery", "PDF + EPUB", "Read-aloud friendly", "No DRM"],
    },
  ],
  pages: 16,
  ageRange: "4–8",
  themes: ["Friendship", "Confidence", "Humility", "Kindness", "Leadership", "Astrology"],
  strengths: [
    "Confident & charismatic",
    "Passionate & enthusiastic",
    "Generous & warm-hearted",
    "A natural leader",
    "Creative & expressive",
    "Loyal & protective",
  ],
  growth: [
    "Learning to share the spotlight",
    "Cheering on a best friend",
    "Practice before the spotlight",
    "Leading with a big heart",
  ],
};

export const storySpreads: StorySpread[] = [
  { image: spread01, caption: "Lester Leo could not WAIT to get to school." },
  { image: spread02, caption: "He practically knocked over his best friend, Ahmi Aries." },
  { image: spread03, caption: "\u201CExcuse me!\u201D Lester pushed his way to the front." },
  { image: spread04, caption: "\u201CAHMI ARIES?!? ARE YOU KIDDING ME??\u201D" },
  { image: spread05, caption: "\u201CHow did HE get the LEAD ROLE??\u201D" },
  { image: spread06, caption: "\u201CCan\u2019t you just be happy for me?\u201D asked Ahmi." },
  { image: spread07, caption: "\u201CEveryone knows I\u2019m always the star.\u201D" },
  { image: spread08, caption: "\u201CBoys, can I see you in the hall?\u201D" },
  { image: spread09, caption: "\u201CYou are best friends \u2014 but you aren\u2019t acting like it.\u201D" },
  { image: spread10, caption: "\u201CIt is okay to let someone else have a turn.\u201D" },
  { image: spread11, caption: "\u201CI\u2019m the most talented kid in our class!\u201D" },
  { image: spread12, caption: "\u201CUse that big heart of yours to support him.\u201D" },
  { image: spread13, caption: "\u201COkaaaay, I\u2019m sorry, Ahmi.\u201D" },
  { image: spread14, caption: "\u201CFriends?\u201D \u201CFriends,\u201D said Ahmi." },
  { image: spread15, caption: "Over the next few weeks, Lester helped Ahmi practice." },
  { image: spread16, caption: "Ahmi received a standing ovation \u2014 and Lester couldn\u2019t have been prouder." },
];

// Audio & video editions — presented as buy-only pages (no on-site player).
export const audiobook = {
  format: "Audiobook" as Format,
  price: 7.99,
  minutes: 14,
  narrator: "Robin Lee Bartkovsky",
  buyUrl: purchaseUrl,
  tagline: "Lester Leo, read aloud with gentle music — perfect for sleepy ears and long drives.",
  perks: [
    "Narrated by the author",
    "Soft background score",
    "About 14 minutes",
    "Instant download · MP3",
  ],
};

export const videobook = {
  format: "Videobook" as Format,
  price: 9.99,
  minutes: 12,
  buyUrl: purchaseUrl,
  tagline: "A read-along video where the hand-painted spreads come quietly to life on screen.",
  perks: [
    "Narrated read-along",
    "Animated watercolor scenes",
    "About 12 minutes",
    "HD download · MP4",
  ],
};

// Free "peek inside" — a small teaser, not the whole book.
export const peekSpreads = storySpreads.slice(0, 4);

// Back-compat for any leftover imports
export const books = [book];
export const featured = book;
