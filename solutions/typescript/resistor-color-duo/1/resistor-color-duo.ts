export const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white",
] as const;

export type Color = typeof COLORS[number];

export function decodedValue([firstColor, secondColor]: [Color, Color]): number {
  return COLORS.indexOf(firstColor) * 10 + COLORS.indexOf(secondColor);
}
