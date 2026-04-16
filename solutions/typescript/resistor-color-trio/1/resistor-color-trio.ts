export const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white",
] as const;

export type Color = typeof COLORS[number];

const METRIC_PREFIXES = [
  "kilo", "mega", "giga", "tera", 
  "peta", "exa", "zetta", "yotta"
];

export function decodedResistorValue([first, second, third]: [Color, Color, Color]): string {
  let value = (COLORS.indexOf(first) * 10 + COLORS.indexOf(second)) * Math.pow(10, COLORS.indexOf(third));

  for (const prefix of METRIC_PREFIXES) {
    if (value < 1000) break;
    value /= 1000;
    if (value < 1000) return `${value} ${prefix}ohms`;
  }

  return `${value} ohms`;
}