import type { Format, FormatId } from "./types";

export const FORMATS: Format[] = [
  {
    id: "feed-square",
    name: "Feed quadrado",
    short: "1:1",
    network: "Instagram · Facebook",
    width: 1080,
    height: 1080,
  },
  {
    id: "feed-portrait",
    name: "Retrato",
    short: "4:5",
    network: "Instagram feed",
    width: 1080,
    height: 1350,
  },
  {
    id: "story",
    name: "Stories / Reels",
    short: "9:16",
    network: "Instagram · TikTok",
    width: 1080,
    height: 1920,
  },
  {
    id: "landscape",
    name: "Paisagem",
    short: "16:9",
    network: "YouTube · LinkedIn · X",
    width: 1920,
    height: 1080,
  },
  {
    id: "pin",
    name: "Pin",
    short: "2:3",
    network: "Pinterest",
    width: 1000,
    height: 1500,
  },
];

export function getFormat(id: FormatId): Format {
  return FORMATS.find((f) => f.id === id) ?? FORMATS[0];
}
