import type { FontId, StudioFont } from "./types";

export const FONTS: StudioFont[] = [
  {
    id: "instrument-serif",
    name: "Instrument Serif",
    family: '"Instrument Serif", ui-serif, Georgia, serif',
    category: "serif",
    weight: 400,
  },
  {
    id: "playfair",
    name: "Playfair Display",
    family: '"Playfair Display", ui-serif, Georgia, serif',
    category: "serif",
    weight: 600,
  },
  {
    id: "fraunces",
    name: "Fraunces",
    family: '"Fraunces", ui-serif, Georgia, serif',
    category: "serif",
    weight: 600,
  },
  {
    id: "newsreader",
    name: "Newsreader",
    family: '"Newsreader", ui-serif, Georgia, serif',
    category: "serif",
    weight: 500,
  },
  {
    id: "bebas",
    name: "Bebas Neue",
    family: '"Bebas Neue", ui-sans-serif, sans-serif',
    category: "display",
    weight: 400,
  },
  {
    id: "oswald",
    name: "Oswald",
    family: '"Oswald", ui-sans-serif, sans-serif',
    category: "display",
    weight: 500,
  },
  {
    id: "syne",
    name: "Syne",
    family: '"Syne", ui-sans-serif, sans-serif',
    category: "display",
    weight: 700,
  },
  {
    id: "space-grotesk",
    name: "Space Grotesk",
    family: '"Space Grotesk", ui-sans-serif, sans-serif',
    category: "sans",
    weight: 500,
  },
  {
    id: "figtree",
    name: "Figtree",
    family: '"Figtree", ui-sans-serif, sans-serif',
    category: "sans",
    weight: 500,
  },
  {
    id: "dm-sans",
    name: "DM Sans",
    family: '"DM Sans", ui-sans-serif, sans-serif',
    category: "sans",
    weight: 500,
  },
];

export function getFont(id: FontId): StudioFont {
  return FONTS.find((f) => f.id === id) ?? FONTS[0];
}

export const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,500&family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap";
