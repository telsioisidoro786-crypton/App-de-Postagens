import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Trash2, c as Image, d as FolderOpen, f as Download, g as AlignCenter, h as AlignRight, l as ImagePlus, m as AlignLeft, n as Upload, o as Plus, p as CaseSensitive, r as Type, s as LayoutTemplate, t as X, u as FolderPlus } from "../_libs/lucide-react.mjs";
import { i as getFont, n as FONTS, r as GOOGLE_FONTS_HREF } from "./router-DyEkbKRn.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as toPng } from "../_libs/html-to-image.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Viewport, n as ScrollAreaScrollbar, r as ScrollAreaThumb, t as Root$1 } from "../_libs/radix-ui__react-scroll-area.mjs";
import { t as Root$2 } from "../_libs/radix-ui__react-separator.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Qpg-0BIk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMATS = [
	{
		id: "feed-square",
		name: "Feed quadrado",
		short: "1:1",
		network: "Instagram · Facebook",
		width: 1080,
		height: 1080
	},
	{
		id: "feed-portrait",
		name: "Retrato",
		short: "4:5",
		network: "Instagram feed",
		width: 1080,
		height: 1350
	},
	{
		id: "story",
		name: "Stories / Reels",
		short: "9:16",
		network: "Instagram · TikTok",
		width: 1080,
		height: 1920
	},
	{
		id: "landscape",
		name: "Paisagem",
		short: "16:9",
		network: "YouTube · LinkedIn · X",
		width: 1920,
		height: 1080
	},
	{
		id: "pin",
		name: "Pin",
		short: "2:3",
		network: "Pinterest",
		width: 1e3,
		height: 1500
	}
];
function getFormat(id) {
	return FORMATS.find((f) => f.id === id) ?? FORMATS[0];
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function mixOverlay(overlay) {
	return `color-mix(in oklab, #0c0b0a ${overlay}%, transparent)`;
}
function objectPos(pos) {
	if (pos === "top") return "center top";
	if (pos === "bottom") return "center bottom";
	return "center center";
}
function kickerStyle(s, tracking, uppercase) {
	return {
		fontSize: `${Math.max(11, 13 * s)}px`,
		letterSpacing: `${Math.max(1.4, 2.4 * s + tracking * .15)}px`,
		textTransform: uppercase ? "uppercase" : "uppercase",
		fontWeight: 500,
		lineHeight: 1.3
	};
}
var PostArt = (0, import_react.forwardRef)(function PostArt({ design, className }, ref) {
	const format = getFormat(design.formatId);
	const font = getFont(design.fontId);
	const s = format.width / 1080;
	const pad = Math.max(24, design.padding * s);
	const headlineSize = Math.max(18, design.headlineSize * s);
	const subSize = Math.max(13, headlineSize * .34);
	const bodySize = Math.max(13, 18 * s);
	const isWide = format.width / format.height >= 1.3;
	const isTall = format.height / format.width >= 1.5;
	const align = design.align;
	const textAlign = align;
	const items = align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";
	const rootStyle = {
		width: format.width,
		height: format.height,
		backgroundColor: design.bgColor,
		color: design.textColor,
		fontFamily: font.family,
		textAlign
	};
	const image = design.imageSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: design.imageSrc,
		alt: "",
		draggable: false,
		className: "absolute inset-0 size-full",
		style: {
			objectFit: design.imageFit,
			objectPosition: objectPos(design.imagePos)
		}
	}) : null;
	const veil = design.imageSrc && design.overlay > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0",
		style: { background: mixOverlay(design.overlay) }
	}) : null;
	const grain = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "post-grain",
		"aria-hidden": true
	});
	const kicker = design.kicker.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		style: {
			...kickerStyle(s, design.letterSpacing, design.uppercase),
			color: design.accentColor,
			fontFamily: "\"Figtree\", ui-sans-serif, sans-serif"
		},
		children: design.kicker
	}) : null;
	const headline = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-balance",
		style: {
			fontSize: `${headlineSize}px`,
			fontWeight: font.weight,
			letterSpacing: `${design.letterSpacing * s}px`,
			lineHeight: design.lineHeight,
			textTransform: design.uppercase ? "uppercase" : "none",
			fontFamily: font.family,
			maxWidth: "18ch"
		},
		children: design.headline || "Escreva o título"
	});
	const subhead = design.subhead.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		style: {
			fontSize: `${subSize}px`,
			lineHeight: 1.3,
			letterSpacing: `${design.letterSpacing * .2 * s}px`,
			fontFamily: "\"Figtree\", ui-sans-serif, sans-serif",
			fontWeight: 500,
			color: design.accentColor,
			maxWidth: "28ch"
		},
		children: design.subhead
	}) : null;
	const body = design.body.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-pretty",
		style: {
			fontSize: `${bodySize}px`,
			lineHeight: 1.45,
			fontFamily: "\"Figtree\", ui-sans-serif, sans-serif",
			fontWeight: 400,
			opacity: .86,
			maxWidth: "36ch"
		},
		children: design.body
	}) : null;
	const cta = design.cta.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			fontFamily: "\"Figtree\", ui-sans-serif, sans-serif",
			fontSize: `${Math.max(12, 14 * s)}px`,
			fontWeight: 600,
			letterSpacing: `${.6 * s}px`,
			padding: `${10 * s}px ${18 * s}px`,
			borderRadius: 999,
			background: design.accentColor,
			color: design.bgColor
		},
		children: design.cta
	}) : null;
	const layout = design.templateId;
	let content;
	if (layout === "quote") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-end",
		style: {
			padding: pad,
			gap: 22 * s
		},
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute",
				style: {
					top: pad * .35,
					left: align === "right" ? void 0 : pad * .55,
					right: align === "right" ? pad * .55 : void 0,
					fontSize: `${280 * s}px`,
					lineHeight: .7,
					opacity: .14,
					color: design.accentColor,
					fontFamily: font.family
				},
				children: "“"
			}),
			kicker,
			headline,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				style: {
					width: 48 * s,
					height: 1,
					background: design.accentColor,
					opacity: .7,
					alignSelf: items === "center" ? "center" : items === "flex-end" ? "flex-end" : "flex-start"
				}
			}),
			subhead,
			grain
		]
	});
	else if (layout === "product") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				style: {
					flex: "1 1 62%",
					minHeight: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: design.accentColor }
					}),
					image,
					veil
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col",
				style: {
					flex: "0 0 auto",
					padding: pad,
					gap: 10 * s,
					alignItems: items,
					background: design.bgColor
				},
				children: [
					kicker,
					headline,
					subhead,
					body,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { marginTop: 8 * s },
						children: cta
					})
				]
			}),
			grain
		]
	});
	else if (layout === "split") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex h-full", isWide ? "flex-row" : "flex-col"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				style: {
					flex: isWide ? "0 0 50%" : "1 1 54%",
					minHeight: 0,
					background: design.accentColor
				},
				children: [image, veil]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col justify-end",
				style: {
					flex: "1 1 auto",
					padding: pad,
					gap: 14 * s,
					alignItems: items,
					background: design.bgColor
				},
				children: [
					kicker,
					headline,
					subhead,
					body,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { marginTop: 6 * s },
						children: cta
					})
				]
			}),
			grain
		]
	});
	else if (layout === "band") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: design.bgColor }
			}),
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 flex flex-col",
				style: {
					bottom: isTall ? "18%" : "12%",
					padding: `${22 * s}px ${pad || 56 * s}px`,
					gap: 8 * s,
					alignItems: items,
					background: design.bgColor
				},
				children: [
					kicker,
					headline,
					subhead
				]
			}),
			grain
		]
	});
	else if (layout === "offer") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-between",
		style: { padding: pad },
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { alignSelf: items },
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				style: {
					gap: 8 * s,
					alignItems: items
				},
				children: [headline, subhead]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				style: {
					gap: 16 * s,
					alignItems: items
				},
				children: [body, cta]
			}),
			grain
		]
	});
	else if (layout === "editorial") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between",
				style: { padding: pad },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [kicker, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontFamily: "\"Figtree\", ui-sans-serif, sans-serif",
							fontSize: `${12 * s}px`,
							letterSpacing: `${3 * s}px`,
							textTransform: "uppercase",
							opacity: .7
						},
						children: "Grafia"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					style: {
						gap: 16 * s,
						alignItems: items
					},
					children: [
						headline,
						subhead,
						cta
					]
				})]
			}),
			grain
		]
	});
	else if (layout === "event") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between",
				style: {
					padding: pad,
					alignItems: items
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						fontFamily: font.family,
						fontSize: `${Math.max(28, 42 * s)}px`,
						letterSpacing: `${2 * s}px`,
						color: design.accentColor,
						lineHeight: 1
					},
					children: design.kicker || "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					style: {
						gap: 14 * s,
						alignItems: items
					},
					children: [
						headline,
						subhead,
						body,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { marginTop: 8 * s },
							children: cta
						})
					]
				})]
			}),
			grain
		]
	});
	else if (layout === "carousel") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between",
				style: { padding: pad },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [kicker, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						style: {
							width: 36 * s,
							height: 36 * s,
							borderRadius: 999,
							border: `1.5px solid ${design.accentColor}`,
							display: "grid",
							placeItems: "center",
							fontSize: `${14 * s}px`,
							fontFamily: "\"Figtree\", ui-sans-serif, sans-serif"
						},
						children: "→"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					style: {
						gap: 14 * s,
						alignItems: items
					},
					children: [
						headline,
						subhead,
						body
					]
				})]
			}),
			grain
		]
	});
	else if (layout === "minimal") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center",
		style: {
			padding: pad,
			gap: 18 * s
		},
		children: [
			image,
			veil,
			kicker,
			headline,
			subhead,
			grain
		]
	});
	else if (layout === "story") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col",
				style: {
					padding: pad,
					paddingTop: pad * 1.4,
					paddingBottom: pad * 1.2,
					alignItems: items,
					justifyContent: "space-between"
				},
				children: [
					kicker,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						style: {
							gap: 16 * s,
							alignItems: items
						},
						children: [headline, subhead]
					}),
					cta ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontFamily: "\"Figtree\", ui-sans-serif, sans-serif",
							fontSize: `${13 * s}px`,
							letterSpacing: `${1.5 * s}px`,
							textTransform: "uppercase",
							opacity: .7
						},
						children: "Grafia"
					})
				]
			}),
			grain
		]
	});
	else if (layout === "tip") content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between",
				style: {
					padding: pad,
					alignItems: items
				},
				children: [
					kicker,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						style: {
							gap: 18 * s,
							alignItems: items
						},
						children: [headline, body]
					}),
					cta
				]
			}),
			grain
		]
	});
	else content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full",
		children: [
			image,
			veil,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col",
				style: {
					padding: pad,
					alignItems: items
				},
				children: [
					kicker,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 18 * s } }),
					headline,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 12 * s } }),
					subhead,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					body,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 20 * s } }),
					cta
				]
			}),
			grain
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		ref,
		className: cn("post-art relative overflow-hidden", className),
		style: rootStyle,
		children: content
	});
});
var PALETTES = [
	{
		id: "ink",
		name: "Tinta",
		bg: "#0c0b0a",
		text: "#f3efe8",
		accent: "#e8e1d5"
	},
	{
		id: "paper",
		name: "Papel",
		bg: "#efe8dc",
		text: "#1a1612",
		accent: "#6b4a32"
	},
	{
		id: "slate",
		name: "Ardósia",
		bg: "#1c2128",
		text: "#e8edf2",
		accent: "#9eb0c0"
	},
	{
		id: "olive",
		name: "Oliva",
		bg: "#2c2a22",
		text: "#efe8d6",
		accent: "#b7a078"
	},
	{
		id: "clay",
		name: "Barro",
		bg: "#3a241c",
		text: "#f4e6d8",
		accent: "#d9a078"
	},
	{
		id: "navy",
		name: "Marinho",
		bg: "#141a28",
		text: "#e6ebf4",
		accent: "#c5d0de"
	},
	{
		id: "blush",
		name: "Pó",
		bg: "#eadcd4",
		text: "#2a1c18",
		accent: "#8a4a42"
	},
	{
		id: "forest",
		name: "Bosque",
		bg: "#1a2420",
		text: "#e6eee6",
		accent: "#c5d4c0"
	}
];
function getPalette(id) {
	return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
var TEMPLATES = [
	{
		id: "quote",
		name: "Citação",
		description: "Frase serifada com atribuição",
		group: "editorial",
		fontId: "instrument-serif",
		paletteId: "ink",
		image: null,
		overlay: 0,
		headlineSize: 72,
		letterSpacing: -1,
		lineHeight: 1.12,
		align: "left",
		uppercase: false,
		padding: 88,
		copy: {
			kicker: "Ensaio 04",
			headline: "A forma é a substância que se vê.",
			subhead: "Atelier Grafia",
			body: "",
			cta: "grafia"
		}
	},
	{
		id: "announcement",
		name: "Anúncio",
		description: "Lançamento com chamada",
		group: "promo",
		fontId: "syne",
		paletteId: "paper",
		image: null,
		overlay: 0,
		headlineSize: 84,
		letterSpacing: -2,
		lineHeight: .98,
		align: "left",
		uppercase: false,
		padding: 80,
		copy: {
			kicker: "Lançamento",
			headline: "Coleção de verão",
			subhead: "Peças limitadas",
			body: "Disponível a partir de 22 de setembro. Envio para todo o Brasil.",
			cta: "Ver coleção"
		}
	},
	{
		id: "product",
		name: "Produto",
		description: "Foto em destaque e preço",
		group: "promo",
		fontId: "figtree",
		paletteId: "paper",
		image: "/textures/linen.jpg",
		overlay: 8,
		headlineSize: 56,
		letterSpacing: -.5,
		lineHeight: 1.1,
		align: "left",
		uppercase: false,
		padding: 56,
		copy: {
			kicker: "Novo",
			headline: "Óleo de alecrim",
			subhead: "R$ 89",
			body: "Extraído a frio · 30 ml",
			cta: "Encomendar"
		}
	},
	{
		id: "tip",
		name: "Dica",
		description: "Cartão didático numerado",
		group: "editorial",
		fontId: "newsreader",
		paletteId: "olive",
		image: "/textures/botanical.jpg",
		overlay: 46,
		headlineSize: 64,
		letterSpacing: -1,
		lineHeight: 1.15,
		align: "left",
		uppercase: false,
		padding: 72,
		copy: {
			kicker: "Dica 07",
			headline: "Deixe o texto respirar.",
			subhead: "",
			body: "Margens generosas valem mais do que uma fonte extra. O vazio é parte do desenho.",
			cta: "Salvar dica"
		}
	},
	{
		id: "event",
		name: "Evento",
		description: "Data, título e local",
		group: "promo",
		fontId: "oswald",
		paletteId: "navy",
		image: "/textures/window.jpg",
		overlay: 52,
		headlineSize: 78,
		letterSpacing: 0,
		lineHeight: 1.02,
		align: "left",
		uppercase: true,
		padding: 72,
		copy: {
			kicker: "22 SET",
			headline: "Noite de abertura",
			subhead: "Casa Grafia · Pinheiros",
			body: "Das 19h às 22h. Entrada franca com inscrição.",
			cta: "Reservar lugar"
		}
	},
	{
		id: "editorial",
		name: "Editorial",
		description: "Capa de revista",
		group: "editorial",
		fontId: "playfair",
		paletteId: "ink",
		image: "/textures/paper-dark.jpg",
		overlay: 28,
		headlineSize: 96,
		letterSpacing: -2,
		lineHeight: .92,
		align: "left",
		uppercase: false,
		padding: 64,
		copy: {
			kicker: "Vol. 12",
			headline: "Tipos vivos",
			subhead: "Uma conversa sobre letra e espaço",
			body: "",
			cta: "Ler ensaio"
		}
	},
	{
		id: "story",
		name: "História",
		description: "Vertical para stories",
		group: "story",
		fontId: "fraunces",
		paletteId: "clay",
		image: "/textures/plaster.jpg",
		overlay: 38,
		headlineSize: 80,
		letterSpacing: -1,
		lineHeight: 1.05,
		align: "center",
		uppercase: false,
		padding: 80,
		copy: {
			kicker: "Bastidores",
			headline: "O ateliê abre as portas",
			subhead: "Uma semana de processos",
			body: "",
			cta: "@grafia.studio"
		}
	},
	{
		id: "minimal",
		name: "Mínima",
		description: "Uma linha, muito ar",
		group: "editorial",
		fontId: "instrument-serif",
		paletteId: "paper",
		image: null,
		overlay: 0,
		headlineSize: 56,
		letterSpacing: 0,
		lineHeight: 1.2,
		align: "center",
		uppercase: false,
		padding: 96,
		copy: {
			kicker: "",
			headline: "Menos ruído. Mais letra.",
			subhead: "",
			body: "",
			cta: ""
		}
	},
	{
		id: "band",
		name: "Faixa",
		description: "Foto com faixa de texto",
		group: "story",
		fontId: "space-grotesk",
		paletteId: "ink",
		image: "/textures/slate.jpg",
		overlay: 12,
		headlineSize: 52,
		letterSpacing: .5,
		lineHeight: 1.1,
		align: "left",
		uppercase: true,
		padding: 0,
		copy: {
			kicker: "Campanha",
			headline: "Feito para durar",
			subhead: "Outono 2026",
			body: "",
			cta: "Descobrir"
		}
	},
	{
		id: "split",
		name: "Retrato",
		description: "Metade imagem, metade tipo",
		group: "editorial",
		fontId: "newsreader",
		paletteId: "blush",
		image: "/textures/plaster.jpg",
		overlay: 0,
		headlineSize: 58,
		letterSpacing: -1,
		lineHeight: 1.12,
		align: "left",
		uppercase: false,
		padding: 56,
		copy: {
			kicker: "Perfil",
			headline: "Luz, papel e silêncio.",
			subhead: "Retratos de ateliê",
			body: "Uma série sobre o ofício de imprimir.",
			cta: "Ver série"
		}
	},
	{
		id: "offer",
		name: "Oferta",
		description: "Número grande e condição",
		group: "promo",
		fontId: "bebas",
		paletteId: "forest",
		image: null,
		overlay: 0,
		headlineSize: 180,
		letterSpacing: 0,
		lineHeight: .85,
		align: "left",
		uppercase: true,
		padding: 72,
		copy: {
			kicker: "Somente este fim de semana",
			headline: "30%",
			subhead: "em toda a casa",
			body: "Válido até domingo, à meia-noite.",
			cta: "Usar cupom GRAFIA30"
		}
	},
	{
		id: "carousel",
		name: "Carrossel",
		description: "Capa numerada de série",
		group: "story",
		fontId: "syne",
		paletteId: "slate",
		image: "/textures/window.jpg",
		overlay: 50,
		headlineSize: 70,
		letterSpacing: -1.5,
		lineHeight: 1.05,
		align: "left",
		uppercase: false,
		padding: 72,
		copy: {
			kicker: "01 / 06",
			headline: "Como compor um post",
			subhead: "Um guia rápido de ateliê",
			body: "Deslize para o próximo passo.",
			cta: "Deslizar"
		}
	}
];
function getTemplate(id) {
	return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
function designFromTemplate(template, formatId, id) {
	const palette = getPalette(template.paletteId);
	return {
		id: id ?? crypto.randomUUID(),
		name: template.name,
		templateId: template.id,
		formatId,
		fontId: template.fontId,
		kicker: template.copy.kicker,
		headline: template.copy.headline,
		subhead: template.copy.subhead,
		body: template.copy.body,
		cta: template.copy.cta,
		headlineSize: template.headlineSize,
		letterSpacing: template.letterSpacing,
		lineHeight: template.lineHeight,
		align: template.align,
		uppercase: template.uppercase,
		bgColor: palette.bg,
		textColor: palette.text,
		accentColor: palette.accent,
		overlay: template.overlay,
		padding: template.padding,
		imageSrc: template.image,
		imageFit: "cover",
		imagePos: "center",
		updatedAt: Date.now()
	};
}
var LIBRARY_LIMIT = 8;
var DRAFT_ID = "grafia-draft";
function freshDesign() {
	return designFromTemplate(TEMPLATES[0], "feed-square", DRAFT_ID);
}
var useStudio = create()(persist((set, get) => ({
	current: freshDesign(),
	library: [],
	panel: "templates",
	hydrated: false,
	setPanel: (panel) => set({ panel }),
	patch: (partial) => set({ current: {
		...get().current,
		...partial,
		updatedAt: Date.now()
	} }),
	applyTemplate: (id) => {
		const { current } = get();
		set({ current: {
			...designFromTemplate(getTemplate(id), current.formatId, current.id),
			updatedAt: Date.now()
		} });
	},
	applyFormat: (id) => set({ current: {
		...get().current,
		formatId: id,
		updatedAt: Date.now()
	} }),
	applyPalette: (id) => {
		const palette = getPalette(id);
		set({ current: {
			...get().current,
			bgColor: palette.bg,
			textColor: palette.text,
			accentColor: palette.accent,
			updatedAt: Date.now()
		} });
	},
	applyFont: (id) => set({ current: {
		...get().current,
		fontId: id,
		updatedAt: Date.now()
	} }),
	setImage: (src) => set({ current: {
		...get().current,
		imageSrc: src,
		updatedAt: Date.now()
	} }),
	newPost: () => set({ current: freshDesign() }),
	saveToLibrary: () => {
		const { current, library } = get();
		const snapshot = {
			...current,
			id: current.id === DRAFT_ID ? crypto.randomUUID() : current.id,
			name: current.headline.trim() || current.name,
			updatedAt: Date.now()
		};
		const existing = library.findIndex((p) => p.id === snapshot.id);
		if (existing >= 0) {
			const next = library.slice();
			next[existing] = snapshot;
			set({
				library: next,
				current: snapshot
			});
			return "updated";
		}
		if (library.length >= LIBRARY_LIMIT) return "full";
		set({
			library: [snapshot, ...library],
			current: snapshot
		});
		return "saved";
	},
	loadFromLibrary: (id) => {
		const found = get().library.find((p) => p.id === id);
		if (found) set({ current: { ...found } });
	},
	deleteFromLibrary: (id) => set({ library: get().library.filter((p) => p.id !== id) }),
	markHydrated: () => set({ hydrated: true })
}), {
	name: "grafia-studio",
	skipHydration: true,
	partialize: (state) => ({
		current: state.current,
		library: state.library
	}),
	onRehydrateStorage: () => (state) => {
		state?.markHydrated();
	}
}));
async function readImageFile(file) {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
	const width = Math.round(bitmap.width * scale);
	const height = Math.round(bitmap.height * scale);
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Não foi possível ler a imagem.");
	ctx.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();
	return canvas.toDataURL("image/jpeg", .88);
}
function arrayBufferToBase64(buffer) {
	const bytes = new Uint8Array(buffer);
	const chunk = 32768;
	let binary = "";
	for (let i = 0; i < bytes.length; i += chunk) binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
	return btoa(binary);
}
var cachedFontCss = null;
async function loadFontEmbedCSS() {
	if (cachedFontCss != null) return cachedFontCss;
	const css = await fetch(GOOGLE_FONTS_HREF).then((r) => r.text());
	const urls = [...css.matchAll(/url\((?:["']?)(https:\/\/[^"'()]+)(?:["']?)\)/g)].map((match) => match[1]);
	const unique = [...new Set(urls)];
	const replacements = await Promise.all(unique.map(async (url) => {
		const res = await fetch(url);
		const buf = await res.arrayBuffer();
		return [url, `data:${res.headers.get("content-type") || "font/woff2"};base64,${arrayBufferToBase64(buf)}`];
	}));
	let embedded = css;
	for (const [url, dataUrl] of replacements) embedded = embedded.split(url).join(dataUrl);
	cachedFontCss = embedded;
	return embedded;
}
async function waitForImages(node) {
	await Promise.all(Array.from(node.querySelectorAll("img")).map((img) => {
		if (img.complete) return Promise.resolve();
		return new Promise((resolve) => {
			img.addEventListener("load", () => resolve(), { once: true });
			img.addEventListener("error", () => resolve(), { once: true });
		});
	}));
}
async function capturePost(node, format) {
	await document.fonts.ready;
	await waitForImages(node);
	const fontEmbedCSS = await loadFontEmbedCSS();
	const host = document.createElement("div");
	host.style.cssText = `position:fixed;left:-10000px;top:0;width:${format.width}px;height:${format.height}px;pointer-events:none;`;
	const clone = node.cloneNode(true);
	clone.style.transform = "none";
	clone.style.width = `${format.width}px`;
	clone.style.height = `${format.height}px`;
	clone.style.margin = "0";
	clone.style.left = "0";
	clone.style.top = "0";
	host.appendChild(clone);
	document.body.appendChild(host);
	await waitForImages(clone);
	try {
		return await toPng(clone, {
			cacheBust: true,
			pixelRatio: 1,
			canvasWidth: format.width,
			canvasHeight: format.height,
			width: format.width,
			height: format.height,
			fontEmbedCSS,
			skipAutoScale: true
		});
	} finally {
		host.remove();
	}
}
function downloadDataUrl(dataUrl, filename) {
	const link = document.createElement("a");
	link.download = filename;
	link.href = dataUrl;
	link.click();
}
function slugify(value) {
	return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40) || "post";
}
async function exportCurrentPost(node) {
	const { current } = useStudio.getState();
	if (!node) {
		toast.error("O post ainda não está pronto.");
		return;
	}
	const format = getFormat(current.formatId);
	const template = getTemplate(current.templateId);
	toast.loading("Exportando PNG…", { id: "export" });
	try {
		downloadDataUrl(await capturePost(node, format), `grafia-${slugify(template.name)}-${format.short.replace(":", "x")}.png`);
		toast.success("Post baixado.", { id: "export" });
	} catch (err) {
		console.error(err);
		toast.error("Falha ao exportar. Tente de novo.", { id: "export" });
	}
}
function CanvasStage({ canvasRef }) {
	const current = useStudio((s) => s.current);
	const setImage = useStudio((s) => s.setImage);
	const format = getFormat(current.formatId);
	const frameRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(.3);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const frame = frameRef.current;
		if (!frame) return;
		const measure = () => {
			const w = frame.clientWidth;
			const h = frame.clientHeight;
			const next = Math.min(w / format.width, h / format.height, 1);
			setScale(Math.max(.12, next));
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(frame);
		return () => observer.disconnect();
	}, [format.width, format.height]);
	const onDrop = (0, import_react.useCallback)(async (event) => {
		event.preventDefault();
		setDragging(false);
		const file = event.dataTransfer.files[0];
		if (!file || !file.type.startsWith("image/")) {
			toast.error("Solte um arquivo de imagem.");
			return;
		}
		try {
			const src = await readImageFile(file);
			setImage(src);
		} catch {
			toast.error("Não foi possível ler a imagem.");
		}
	}, [setImage]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: frameRef,
		className: "relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-4 lg:px-10 lg:py-8",
		onDragOver: (e) => {
			e.preventDefault();
			setDragging(true);
		},
		onDragLeave: () => setDragging(false),
		onDrop,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stage-grid pointer-events-none absolute inset-0 opacity-40",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				style: {
					width: format.width * scale,
					height: format.height * scale
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "origin-top-left",
					style: {
						width: format.width,
						height: format.height,
						transform: `scale(${scale})`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostArt, {
						ref: canvasRef,
						design: current
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-foreground/10", dragging && "ring-2 ring-primary") })]
			}),
			dragging ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-4" }), "Solte a imagem no post"]
				})
			}) : null
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,opacity,box-shadow,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
			ghost: "text-foreground hover:bg-accent",
			outline: "border border-border bg-transparent text-foreground hover:bg-accent",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-[10px] px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted-foreground", className),
	...props
}));
Label.displayName = Root.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		className: "h-full w-full rounded-[inherit]",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
		orientation: "vertical",
		className: "flex touch-none p-0.5 transition-[background-color] duration-150 select-none w-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
	})]
}));
ScrollArea.displayName = Root$1.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root$2.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full border border-border bg-primary shadow-none outline-none ring-ring transition-[box-shadow] duration-150 focus-visible:ring-2" })]
}));
Slider.displayName = Slider$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-20 w-full rounded-md border border-input bg-secondary px-3 py-2.5 text-sm text-foreground outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Field({ label, value, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] tabular-nums text-muted-foreground",
				children: value
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-muted-foreground",
				children: hint
			}) : null]
		}), children]
	});
}
function AlignButtons({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-lg bg-secondary p-1",
		children: [
			{
				id: "left",
				icon: AlignLeft,
				label: "Esquerda"
			},
			{
				id: "center",
				icon: AlignCenter,
				label: "Centro"
			},
			{
				id: "right",
				icon: AlignRight,
				label: "Direita"
			}
		].map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": item.label,
				onClick: () => onChange(item.id),
				className: cn("flex h-9 flex-1 items-center justify-center rounded-md transition-[background-color,color] duration-150", value === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
			}, item.id);
		})
	});
}
function Inspector({ mode }) {
	const current = useStudio((s) => s.current);
	const patch = useStudio((s) => s.patch);
	const applyFont = useStudio((s) => s.applyFont);
	const applyPalette = useStudio((s) => s.applyPalette);
	const setImage = useStudio((s) => s.setImage);
	async function onFile(file) {
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Escolha um arquivo de imagem.");
			return;
		}
		try {
			setImage(await readImageFile(file));
		} catch {
			toast.error("Não foi possível ler a imagem.");
		}
	}
	const showText = mode === "edit" || mode === "all";
	const showImage = mode === "image" || mode === "all";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 px-4 py-4 pb-10",
			children: [showText ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase",
							children: "Texto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Olho",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: current.kicker,
								onChange: (e) => patch({ kicker: e.target.value }),
								placeholder: "Categoria ou data"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Título",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								value: current.headline,
								onChange: (e) => patch({ headline: e.target.value }),
								placeholder: "Frase principal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subtítulo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: current.subhead,
								onChange: (e) => patch({ subhead: e.target.value }),
								placeholder: "Linha de apoio"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Corpo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								value: current.body,
								onChange: (e) => patch({ body: e.target.value }),
								placeholder: "Texto complementar"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Chamada",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: current.cta,
								onChange: (e) => patch({ cta: e.target.value }),
								placeholder: "Botão ou handle"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase",
							children: "Letra"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-1.5",
							children: FONTS.map((font) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applyFont(font.id),
								className: cn("h-11 rounded-lg px-2.5 text-left text-sm ring-1 ring-border transition-[background-color,box-shadow] duration-150", current.fontId === font.id ? "bg-primary text-primary-foreground ring-primary" : "bg-secondary text-foreground hover:ring-foreground/20"),
								style: {
									fontFamily: font.family,
									fontWeight: font.weight
								},
								children: font.name
							}, font.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tamanho",
							value: `${current.headlineSize}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 36,
								max: 200,
								step: 1,
								value: [current.headlineSize],
								onValueChange: ([v]) => patch({ headlineSize: v ?? current.headlineSize })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Espaçamento",
							value: `${current.letterSpacing.toFixed(1)}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: -6,
								max: 14,
								step: .5,
								value: [current.letterSpacing],
								onValueChange: ([v]) => patch({ letterSpacing: v ?? current.letterSpacing })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Entrelinha",
							value: current.lineHeight.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: .8,
								max: 1.6,
								step: .02,
								value: [current.lineHeight],
								onValueChange: ([v]) => patch({ lineHeight: v ?? current.lineHeight })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alinhamento",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignButtons, {
								value: current.align,
								onChange: (align) => patch({ align })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => patch({ uppercase: !current.uppercase }),
							className: cn("flex h-11 items-center justify-center gap-2 rounded-lg text-sm ring-1 transition-[background-color,color] duration-150", current.uppercase ? "bg-primary text-primary-foreground ring-primary" : "bg-secondary text-muted-foreground ring-border hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseSensitive, { className: "size-4" }), "Caixa alta"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase",
							children: "Paleta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: PALETTES.map((palette) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								title: palette.name,
								onClick: () => applyPalette(palette.id),
								className: "flex flex-col items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("flex h-11 w-full overflow-hidden rounded-lg ring-1 ring-border", current.bgColor === palette.bg && current.textColor === palette.text && "ring-2 ring-primary"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-1/2",
										style: { background: palette.bg }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-1/2",
										style: { background: palette.accent }
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: palette.name
								})]
							}, palette.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
									label: "Fundo",
									value: current.bgColor,
									onChange: (bgColor) => patch({ bgColor })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
									label: "Texto",
									value: current.textColor,
									onChange: (textColor) => patch({ textColor })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
									label: "Acento",
									value: current.accentColor,
									onChange: (accentColor) => patch({ accentColor })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Margem",
							value: `${current.padding}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 24,
								max: 140,
								step: 2,
								value: [current.padding],
								onValueChange: ([v]) => patch({ padding: v ?? current.padding })
							})
						})
					]
				})
			] }) : null, showImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [mode === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase",
						children: "Imagem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-secondary text-sm text-muted-foreground ring-1 ring-border hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
							"Enviar foto",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								className: "sr-only",
								onChange: (e) => {
									onFile(e.target.files?.[0]);
									e.target.value = "";
								}
							})
						]
					}),
					current.imageSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: current.imageSrc,
								alt: "",
								className: "size-12 rounded-md object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "min-w-0 flex-1 truncate text-xs text-muted-foreground",
								children: "Imagem no post"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "icon-sm",
								variant: "ghost",
								onClick: () => setImage(null),
								"aria-label": "Remover imagem",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Ou arraste um arquivo para o canvas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Enquadramento",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-lg bg-secondary p-1",
							children: ["cover", "contain"].map((fit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => patch({ imageFit: fit }),
								className: cn("h-9 flex-1 rounded-md text-xs font-medium transition-[background-color,color] duration-150", current.imageFit === fit ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
								children: fit === "cover" ? "Preencher" : "Conter"
							}, fit))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Posição",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-lg bg-secondary p-1",
							children: [
								["top", "Alto"],
								["center", "Centro"],
								["bottom", "Baixo"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => patch({ imagePos: id }),
								className: cn("h-9 flex-1 rounded-md text-xs font-medium transition-[background-color,color] duration-150", current.imagePos === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
								children: label
							}, id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Véu",
						value: `${current.overlay}%`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							min: 0,
							max: 80,
							step: 1,
							value: [current.overlay],
							onValueChange: ([v]) => patch({ overlay: v ?? current.overlay })
						})
					})
				]
			})] }) : null]
		})
	});
}
function ColorField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex h-11 items-center gap-2 rounded-lg bg-secondary px-2 ring-1 ring-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "color",
				value,
				onChange: (e) => onChange(e.target.value),
				className: "size-6 cursor-pointer rounded-sm border-0 bg-transparent p-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] text-muted-foreground uppercase",
				children: value.replace("#", "")
			})]
		})]
	});
}
function LibraryPanel() {
	const library = useStudio((s) => s.library);
	const currentId = useStudio((s) => s.current.id);
	const loadFromLibrary = useStudio((s) => s.loadFromLibrary);
	const deleteFromLibrary = useStudio((s) => s.deleteFromLibrary);
	if (library.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-start justify-center gap-2 px-6 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-foreground",
			children: "Nada salvo ainda"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-[22ch] text-sm text-pretty text-muted-foreground",
			children: "Componha um post e toque em Salvar para guardá-lo neste aparelho."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 px-4 py-4 lg:grid-cols-1",
			children: library.map((item) => {
				const format = getFormat(item.formatId);
				const scale = 140 / format.width;
				const h = format.height * scale;
				const active = item.id === currentId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => loadFromLibrary(item.id),
						className: active ? "overflow-hidden rounded-xl ring-2 ring-primary" : "overflow-hidden rounded-xl ring-1 ring-border hover:ring-foreground/25",
						style: { width: "100%" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full overflow-hidden bg-secondary",
							style: { height: h },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "origin-top-left",
								style: {
									width: format.width,
									height: format.height,
									transform: `scale(${scale})`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostArt, { design: item })
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs font-medium text-foreground",
								children: item.headline || item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground",
								children: [
									format.short,
									" · ",
									format.name
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "icon-sm",
							variant: "ghost",
							"aria-label": "Apagar",
							onClick: () => deleteFromLibrary(item.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})]
					})]
				}, item.id);
			})
		})
	});
}
var TABS = [
	{
		id: "templates",
		label: "Modelos",
		icon: LayoutTemplate
	},
	{
		id: "edit",
		label: "Letra",
		icon: Type
	},
	{
		id: "image",
		label: "Imagem",
		icon: Image
	},
	{
		id: "library",
		label: "Salvos",
		icon: FolderOpen
	}
];
function MobileDock() {
	const panel = useStudio((s) => s.panel);
	const setPanel = useStudio((s) => s.setPanel);
	const current = useStudio((s) => s.current);
	const applyFormat = useStudio((s) => s.applyFormat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shrink-0 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1 overflow-x-auto px-3 py-2",
			children: FORMATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => applyFormat(item.id),
				className: cn("h-8 shrink-0 rounded-full px-3 text-xs font-medium", current.formatId === item.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
				children: item.short
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "grid grid-cols-4 gap-1 px-2 pb-2",
			children: TABS.map((tab) => {
				const Icon = tab.icon;
				const active = panel === tab.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPanel(tab.id),
					className: cn("flex h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-medium", active ? "bg-secondary text-foreground" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), tab.label]
				}, tab.id);
			})
		})]
	});
}
function Thumb({ template, active, onSelect }) {
	const format = getFormat("feed-square");
	const preview = designFromTemplate(template, "feed-square", "thumb");
	const scale = 88 / format.width;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("group flex w-[104px] shrink-0 flex-col gap-2 text-left lg:w-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative overflow-hidden rounded-xl bg-secondary ring-1 ring-border transition-[box-shadow,transform] duration-150 group-hover:ring-foreground/25", active && "ring-2 ring-primary"),
			style: {
				width: 88,
				height: 88
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "origin-top-left",
				style: {
					width: format.width,
					height: format.height,
					transform: `scale(${scale})`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostArt, { design: preview })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("truncate text-xs font-medium", active ? "text-foreground" : "text-muted-foreground"),
				children: template.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden truncate text-[11px] text-muted-foreground lg:block",
				children: template.description
			})]
		})]
	});
}
function TemplateRail() {
	const current = useStudio((s) => s.current);
	const applyTemplate = useStudio((s) => s.applyTemplate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden px-4 pt-4 pb-2 lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "Modelos"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-3 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-y-auto lg:px-4 lg:pb-6",
			children: TEMPLATES.map((template) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
				template,
				active: current.templateId === template.id,
				onSelect: () => applyTemplate(template.id)
			}, template.id))
		})]
	});
}
function TopBar({ onExport }) {
	const current = useStudio((s) => s.current);
	const applyFormat = useStudio((s) => s.applyFormat);
	const saveToLibrary = useStudio((s) => s.saveToLibrary);
	const newPost = useStudio((s) => s.newPost);
	const panel = useStudio((s) => s.panel);
	const setPanel = useStudio((s) => s.setPanel);
	const format = getFormat(current.formatId);
	function save() {
		const result = saveToLibrary();
		if (result === "full") {
			toast.error("Biblioteca cheia. Apague um post salvo para continuar.");
			return;
		}
		toast.success(result === "updated" ? "Post atualizado." : "Salvo na biblioteca.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex shrink-0 items-center gap-3 border-b border-border bg-background px-3 py-2.5 lg:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-baseline gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[1.65rem] leading-none tracking-tight text-foreground",
					children: "Grafia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden truncate text-xs text-muted-foreground sm:inline",
					children: "Estúdio de posts"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto hidden min-w-0 max-w-xl flex-1 items-center justify-center md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-secondary p-1",
					children: FORMATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => applyFormat(item.id),
						className: cn("h-8 shrink-0 rounded-full px-3 text-xs font-medium transition-[background-color,color] duration-150", current.formatId === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
						children: item.short
					}, item.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-1 hidden text-xs tabular-nums text-muted-foreground lg:inline",
						children: [
							format.width,
							" × ",
							format.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						className: "hidden sm:inline-flex",
						onClick: () => newPost(),
						title: "Novo post",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: panel === "library" ? "secondary" : "ghost",
						size: "icon-sm",
						className: "hidden lg:inline-flex",
						onClick: () => setPanel(panel === "library" ? "edit" : "library"),
						title: "Biblioteca",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: save,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Salvar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: onExport,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Baixar PNG"
						})]
					})
				]
			})
		]
	});
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-2.5 py-1.5 text-xs text-primary-foreground", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function StudioApp() {
	const canvasRef = (0, import_react.useRef)(null);
	const panel = useStudio((s) => s.panel);
	(0, import_react.useEffect)(() => {
		useStudio.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const meta = event.metaKey || event.ctrlKey;
			if (meta && event.key.toLowerCase() === "s") {
				event.preventDefault();
				if (useStudio.getState().saveToLibrary() === "full") return;
			}
			if (meta && event.key.toLowerCase() === "e") {
				event.preventDefault();
				exportCurrentPost(canvasRef.current);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	function handleExport() {
		exportCurrentPost(canvasRef.current);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 250,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-dvh flex-col overflow-hidden bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { onExport: handleExport }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "hidden w-56 shrink-0 border-r border-border bg-card lg:flex lg:flex-col",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateRail, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
							className: "flex min-w-0 flex-1 flex-col bg-stage",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasStage, { canvasRef })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "hidden w-[22rem] shrink-0 border-l border-border bg-card lg:flex lg:flex-col",
							children: panel === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryPanel, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, { mode: "all" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-[42dvh] min-h-36 overflow-hidden border-t border-border bg-card",
						children: [
							panel === "templates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateRail, {}) : null,
							panel === "edit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, { mode: "edit" }) : null,
							panel === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, { mode: "image" }) : null,
							panel === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryPanel, {}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "bottom-center",
					toastOptions: { className: "bg-card text-foreground border border-border shadow-none font-sans" }
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioApp, {});
}
//#endregion
export { Home as component };
