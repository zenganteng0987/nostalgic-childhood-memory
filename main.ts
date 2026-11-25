import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry text: one held sensory moment, summer evenings at home.
// Kept as a single sentence so the memory lands as one breath —
// sound (screen door), smell (rain on dust, rice), and the call to dinner.
const ENTRY_TEXT =
  "I still hear the screen door slap behind me on summer evenings when my mother called us in for dinner, and the air smelled of rain on hot dust and rice just off the stove.";

function resolveOutputPath(): string {
  return process.env.OUTPUT_PATH ?? "/output/entry.txt";
}

function writeEntry(path: string, text: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(resolveOutputPath(), ENTRY_TEXT);
