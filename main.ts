// SPDX-License-Identifier: MIT
// The Printer Finally Answers — one-line comeback entry.
// The printer translates its own cryptic error code: impatience, counted.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Error 0x4A means you pressed Print 47 times. I heard you the first time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");

// Verify the gate locally: exact bytes, 1-240 chars, one line, no newline.
const GATE: ReadonlyArray<readonly [string, (s: string) => boolean]> = [
  ["entry.txt does not match the line", (s) => s === LINE],
  ["line length outside 1-240", (s) => s.length >= 1 && s.length <= 240],
  ["line must not contain a newline", (s) => !s.includes("\n") && !s.includes("\r")],
  ["line must not be blank", (s) => s.trim().length > 0],
];
const written = readFileSync(target, "utf8");
for (const [message, holds] of GATE) {
  if (!holds(written)) {
    throw new Error(message);
  }
}
console.log(`wrote entry.txt (${written.length} chars)`);
