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
const written = readFileSync(target, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
if (written.length < 1 || written.length > 240) {
  throw new Error(`line length ${written.length} outside 1-240`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("line must not contain a newline");
}
if (!written.trim()) {
  throw new Error("line must not be blank");
}
console.log(`wrote entry.txt (${written.length} chars)`);
