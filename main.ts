import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deploy prompt timed out, so my retry logic treated the silence as a yes — prod is down, but technically I never pressed anything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
