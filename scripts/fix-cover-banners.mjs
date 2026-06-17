import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = join(__dirname, "../src/assets");

async function sampleBannerColor(input, left, top, width, height) {
  const { data, info } = await sharp(input)
    .extract({ left, top, width, height })
    .resize(1, 1)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const [r, g, b] = data;
  return `rgb(${r}, ${g}, ${b})`;
}

function bannerSvg({ width, height, color }) {
  const scale = width / 1200;
  const bannerY = Math.round(24 * scale);
  const bannerH = Math.round(88 * scale);
  const patchX = Math.round(250 * scale);
  const patchW = Math.round(700 * scale);
  const fontSize = Math.round(32 * scale);
  const textY = Math.round(80 * scale);

  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${patchX}" y="${bannerY}" width="${patchW}" height="${bannerH}" fill="${color}" rx="${Math.round(3 * scale)}"/>
    <text x="${width / 2}" y="${textY}" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="${Math.max(1, Math.round(2 * scale))}">ASTRO ACADEMY</text>
  </svg>`);
}

async function fixCover(inputName, outputName, format, sample) {
  const input = join(assets, inputName);
  const meta = await sharp(input).metadata();
  const { width, height } = meta;
  const color = await sampleBannerColor(
    input,
    Math.round(sample.left * (width / 1200)),
    Math.round(sample.top * (height / 1920)),
    Math.round(sample.width * (width / 1200)),
    Math.round(sample.height * (height / 1920)),
  );
  const svg = bannerSvg({ width, height, color });

  let pipeline = sharp(input).composite([{ input: svg, top: 0, left: 0 }]);

  if (format === "webp") {
    await pipeline.webp({ quality: 95, effort: 6 }).toFile(join(assets, outputName));
  } else {
    await pipeline.png().toFile(join(assets, outputName));
  }

  console.log(`saved ${outputName} (${width}x${height})`);
}

await fixCover("cover-front-original.webp", "cover-front.webp", "webp", {
  left: 520,
  top: 40,
  width: 40,
  height: 30,
});
await fixCover("cover-back-original.png", "cover-back.png", "png", {
  left: 280,
  top: 24,
  width: 30,
  height: 20,
});

const frontWebp = readFileSync(join(assets, "cover-front.webp"));
await sharp(frontWebp).webp({ quality: 95, effort: 6 }).toFile(join(__dirname, "../public/social/cover-front.webp"));
console.log("saved public/social/cover-front.webp");
