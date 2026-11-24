import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — entry: "Hoverer"
// Writes exactly one word to /output/entry.txt, nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Hoverer", "utf8");
