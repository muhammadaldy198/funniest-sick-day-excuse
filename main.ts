// The Funniest Sick-Day Excuse — rebuild v2 (Kirana, 25 Nov 2026).
// Writes one line, 155 characters, to entry.txt in the output directory.
// Pick beat F1, F3 and F5 in the builder's own duel (5W-0L incl. two extra field entries).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My shower door jammed this morning, the fire brigade let me out at 8:40, and I am taking the day to recover from being rescued naked by three firefighters.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
