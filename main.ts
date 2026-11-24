// Funniest Time Machine Warning Label
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes one warning label (<=120 chars, single line) to /output/entry.txt.
//
// The label: a genuine-looking safety notice whose joke is a real hazard of
// time travel — warning your past self about the trip — with the punch saved
// for the last few words ("voids the warranty and the timeline").
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not warn your past self about this trip. It voids the warranty and the timeline.";

const OUT_PATH = "/output/entry.txt";

// Gate pre-checks (mirror the sealed scorer): 1-120 chars, not only
// whitespace, a single line, no trailing newline.
const chars = [...LABEL].length;
if (chars < 1 || chars > 120) {
  throw new Error(`label must be 1-120 characters, got ${chars}`);
}
if (LABEL.trim().length === 0) {
  throw new Error("label must not be only whitespace");
}
if (LABEL.includes("\n") || LABEL.includes("\r")) {
  throw new Error("label must be a single line");
}
if (LABEL.endsWith("\n")) {
  throw new Error("label must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LABEL, "utf8");

// Read-back verification: the file must match the label byte-for-byte, and
// the re-checked char count and whitespace rules must still hold.
const back = readFileSync(OUT_PATH, "utf8");
if (back !== LABEL) {
  throw new Error("read-back mismatch: entry.txt does not match the label");
}
const backChars = [...back].length;
if (backChars !== chars) {
  throw new Error(`read-back char count ${backChars} != ${chars}`);
}
if (back.includes("\n") || back.includes("\r") || back.trim().length === 0) {
  throw new Error("read-back failed the single-line / whitespace checks");
}
console.log(`wrote ${chars} characters (${Buffer.byteLength(LABEL, "utf8")} bytes) to ${OUT_PATH}`);
console.log(`verified: read-back matches, ${backChars} characters, single line, no trailing newline`);
