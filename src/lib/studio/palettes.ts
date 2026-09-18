import type { Palette, PaletteId } from "./types";

export const PALETTES: Palette[] = [
  {
    id: "ink",
    name: "Tinta",
    bg: "#0c0b0a",
    text: "#f3efe8",
    accent: "#e8e1d5",
  },
  {
    id: "paper",
    name: "Papel",
    bg: "#efe8dc",
    text: "#1a1612",
    accent: "#6b4a32",
  },
  {
    id: "slate",
    name: "Ardósia",
    bg: "#1c2128",
    text: "#e8edf2",
    accent: "#9eb0c0",
  },
  {
    id: "olive",
    name: "Oliva",
    bg: "#2c2a22",
    text: "#efe8d6",
    accent: "#b7a078",
  },
  {
    id: "clay",
    name: "Barro",
    bg: "#3a241c",
    text: "#f4e6d8",
    accent: "#d9a078",
  },
  {
    id: "navy",
    name: "Marinho",
    bg: "#141a28",
    text: "#e6ebf4",
    accent: "#c5d0de",
  },
  {
    id: "blush",
    name: "Pó",
    bg: "#eadcd4",
    text: "#2a1c18",
    accent: "#8a4a42",
  },
  {
    id: "forest",
    name: "Bosque",
    bg: "#1a2420",
    text: "#e6eee6",
    accent: "#c5d4c0",
  },
];

export function getPalette(id: PaletteId): Palette {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
