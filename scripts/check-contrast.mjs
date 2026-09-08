const tokens = {
  ground: "#090a0b",
  surface: "#111315",
  "surface-raised": "#171a1d",
  text: "#f4f1e8",
  "text-muted": "#bcb9b0",
  signal: "#ff8a00",
};

const pairs = [
  { foreground: "text", background: "ground", minimum: 7 },
  { foreground: "text-muted", background: "ground", minimum: 7 },
  { foreground: "signal", background: "ground", minimum: 7 },
  { foreground: "text", background: "surface", minimum: 7 },
  { foreground: "text-muted", background: "surface", minimum: 7 },
  { foreground: "signal", background: "surface", minimum: 7 },
  { foreground: "text", background: "surface-raised", minimum: 7 },
  { foreground: "text-muted", background: "surface-raised", minimum: 7 },
  { foreground: "signal", background: "surface-raised", minimum: 7 },
  { foreground: "ground", background: "signal", minimum: 7 },
];

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return (
    0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
  );
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

let failed = false;

for (const pair of pairs) {
  const ratio = contrast(tokens[pair.foreground], tokens[pair.background]);
  const passes = ratio >= pair.minimum;

  console.log(
    `${passes ? "PASS" : "FAIL"} --${pair.foreground} on --${pair.background}: ${ratio.toFixed(2)}:1 (minimum ${pair.minimum}:1)`,
  );

  failed ||= !passes;
}

if (failed) {
  process.exitCode = 1;
}
