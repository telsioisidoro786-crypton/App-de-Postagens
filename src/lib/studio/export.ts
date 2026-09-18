import { toPng } from "html-to-image";
import { toast } from "sonner";
import { GOOGLE_FONTS_HREF } from "./fonts";
import { getFormat } from "./formats";
import { useStudio } from "./store";
import { getTemplate } from "./templates";
import type { Format } from "./types";

export async function readImageFile(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const max = 1600;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Não foi possível ler a imagem.");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.88);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

let cachedFontCss: string | null = null;

async function loadFontEmbedCSS(): Promise<string> {
  if (cachedFontCss != null) return cachedFontCss;
  const css = await fetch(GOOGLE_FONTS_HREF).then((r) => r.text());
  const urls = [
    ...css.matchAll(/url\((?:["']?)(https:\/\/[^"'()]+)(?:["']?)\)/g),
  ].map((match) => match[1]);
  const unique = [...new Set(urls)];
  const replacements = await Promise.all(
    unique.map(async (url) => {
      const res = await fetch(url);
      const buf = await res.arrayBuffer();
      const type = res.headers.get("content-type") || "font/woff2";
      return [url, `data:${type};base64,${arrayBufferToBase64(buf)}`] as const;
    }),
  );
  let embedded = css;
  for (const [url, dataUrl] of replacements) {
    embedded = embedded.split(url).join(dataUrl);
  }
  cachedFontCss = embedded;
  return embedded;
}

async function waitForImages(node: HTMLElement) {
  await Promise.all(
    Array.from(node.querySelectorAll("img")).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  );
}

export async function capturePost(node: HTMLElement, format: Format): Promise<string> {
  await document.fonts.ready;
  await waitForImages(node);
  const fontEmbedCSS = await loadFontEmbedCSS();

  const host = document.createElement("div");
  host.style.cssText = `position:fixed;left:-10000px;top:0;width:${format.width}px;height:${format.height}px;pointer-events:none;`;
  const clone = node.cloneNode(true) as HTMLElement;
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
      skipAutoScale: true,
    });
  } finally {
    host.remove();
  }
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}

export function slugify(value: string): string {
  return (
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 40) || "post"
  );
}

export async function exportCurrentPost(node: HTMLElement | null) {
  const { current } = useStudio.getState();
  if (!node) {
    toast.error("O post ainda não está pronto.");
    return;
  }
  const format = getFormat(current.formatId);
  const template = getTemplate(current.templateId);
  toast.loading("Exportando PNG…", { id: "export" });
  try {
    const dataUrl = await capturePost(node, format);
    const name = `grafia-${slugify(template.name)}-${format.short.replace(":", "x")}.png`;
    downloadDataUrl(dataUrl, name);
    toast.success("Post baixado.", { id: "export" });
  } catch (err) {
    console.error(err);
    toast.error("Falha ao exportar. Tente de novo.", { id: "export" });
  }
}
