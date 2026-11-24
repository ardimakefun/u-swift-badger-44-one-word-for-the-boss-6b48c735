import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — entry: "Hoverer"
// Writes exactly one word to /output/entry.txt, nothing else.
const WORD = "Hoverer";

// Gate (RULES.txt / competition.yaml): /output/entry.txt must be UTF-8
// text of 1 to 30 characters, not only white space. Fail fast before
// writing anything: count code points, not UTF-16 code units.
const length = [...WORD].length;
if (length < 1 || length > 30 || WORD.trim().length === 0) {
  throw new Error(
    `entry word fails gate: ${length} code point(s), must be 1-30 non-whitespace characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
