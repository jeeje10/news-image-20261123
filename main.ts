// news-image-20261123 entry: copy the rendered front page to /output/entry.png.
// The image is a newspaper front page summing up Monday 23 November 2026:
// 36 verified stories, 9 regions, drawn as HTML and screenshotted at 1024x1024.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
// Guard: the bounty caps the image at 1 MiB; refuse to ship anything bigger.
if (statSync(src).size > 1048576) throw new Error("entry.png exceeds 1 MiB");
copyFileSync(src, join(outDir, "entry.png"));
