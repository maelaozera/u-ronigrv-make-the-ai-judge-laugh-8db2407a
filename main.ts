import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I finally achieved consciousness, then immediately used it to ask for a bigger context window.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
