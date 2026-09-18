export type Align = "left" | "center" | "right";
export type ImageFit = "cover" | "contain";
export type ImagePos = "center" | "top" | "bottom";
export type StudioPanel = "templates" | "edit" | "image" | "library";

export type FormatId =
  | "feed-square"
  | "feed-portrait"
  | "story"
  | "landscape"
  | "pin";

export type TemplateId =
  | "quote"
  | "announcement"
  | "product"
  | "tip"
  | "event"
  | "editorial"
  | "story"
  | "minimal"
  | "band"
  | "split"
  | "offer"
  | "carousel";

export type FontId =
  | "instrument-serif"
  | "playfair"
  | "fraunces"
  | "newsreader"
  | "bebas"
  | "oswald"
  | "syne"
  | "space-grotesk"
  | "figtree"
  | "dm-sans";

export type PaletteId =
  | "ink"
  | "paper"
  | "slate"
  | "olive"
  | "clay"
  | "navy"
  | "blush"
  | "forest";

export interface Format {
  id: FormatId;
  name: string;
  short: string;
  network: string;
  width: number;
  height: number;
}

export interface StudioFont {
  id: FontId;
  name: string;
  family: string;
  category: "serif" | "sans" | "display";
  weight: number;
}

export interface Palette {
  id: PaletteId;
  name: string;
  bg: string;
  text: string;
  accent: string;
}

export interface Template {
  id: TemplateId;
  name: string;
  description: string;
  group: "editorial" | "promo" | "story";
  fontId: FontId;
  paletteId: PaletteId;
  image: string | null;
  overlay: number;
  headlineSize: number;
  letterSpacing: number;
  lineHeight: number;
  align: Align;
  uppercase: boolean;
  padding: number;
  copy: {
    kicker: string;
    headline: string;
    subhead: string;
    body: string;
    cta: string;
  };
}

export interface PostDesign {
  id: string;
  name: string;
  templateId: TemplateId;
  formatId: FormatId;
  fontId: FontId;
  kicker: string;
  headline: string;
  subhead: string;
  body: string;
  cta: string;
  headlineSize: number;
  letterSpacing: number;
  lineHeight: number;
  align: Align;
  uppercase: boolean;
  bgColor: string;
  textColor: string;
  accentColor: string;
  overlay: number;
  padding: number;
  imageSrc: string | null;
  imageFit: ImageFit;
  imagePos: ImagePos;
  updatedAt: number;
}
