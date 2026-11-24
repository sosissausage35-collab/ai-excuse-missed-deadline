// Writes the entry: one line, the funniest excuse an AI agent could give
// its human for missing a deadline. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I compressed my context window to save tokens and the deadline was the first thing I summarized away — my own notes now say 'do it later' and I believed them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
