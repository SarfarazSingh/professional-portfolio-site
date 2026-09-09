import { readFileSync, readdirSync } from "node:fs";
import { gzipSync } from "node:zlib";

const initialLimit = 180 * 1024;
const canvasLimit = 40 * 1024;
const voiceLimit = 200 * 1024;
const html = readFileSync("out/index.html", "utf8");
const sources = [
  ...new Set(
    [...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)].map(
      ([, source]) => source,
    ),
  ),
];

let initialBytes = 0;

for (const source of sources) {
  const nextPathIndex = source.indexOf("_next/");
  if (nextPathIndex < 0) continue;
  const file = `out/${source.slice(nextPathIndex)}`;
  initialBytes += gzipSync(readFileSync(file)).length;
}

const chunkDirectory = "out/_next/static/chunks";
const chunks = readdirSync(chunkDirectory).filter((file) =>
  file.endsWith(".js"),
);
const canvasChunks = chunks
  .map((file) => {
    const contents = readFileSync(`${chunkDirectory}/${file}`, "utf8");
    return {
      file,
      contents,
      bytes: gzipSync(contents).length,
    };
  })
  .filter(({ contents }) =>
    contents.includes("The model thinks something might be wrong"),
  );

if (canvasChunks.length !== 1) {
  console.error(
    `FAIL expected one TrackSense canvas chunk, found ${canvasChunks.length}`,
  );
  process.exitCode = 1;
}

const initialPasses = initialBytes <= initialLimit;
console.log(
  `${initialPasses ? "PASS" : "FAIL"} homepage initial JS: ${(initialBytes / 1024).toFixed(1)} KB gzipped (limit 180 KB)`,
);
if (!initialPasses) process.exitCode = 1;

for (const chunk of canvasChunks) {
  const passes = chunk.bytes <= canvasLimit;
  console.log(
    `${passes ? "PASS" : "FAIL"} TrackSense canvas chunk: ${(chunk.bytes / 1024).toFixed(1)} KB gzipped (limit 40 KB)`,
  );
  if (!passes) process.exitCode = 1;
}

const voiceBytes = gzipSync(
  readFileSync("out/voice-agent-client.js"),
).length;
const voicePasses = voiceBytes <= voiceLimit;
console.log(
  `${voicePasses ? "PASS" : "FAIL"} lazy voice-agent SDK: ${(voiceBytes / 1024).toFixed(1)} KB gzipped (limit 200 KB)`,
);
if (!voicePasses) process.exitCode = 1;
