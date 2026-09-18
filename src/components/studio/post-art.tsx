import { forwardRef, type CSSProperties, type ReactNode } from "react";
import { getFont } from "@/lib/studio/fonts";
import { getFormat } from "@/lib/studio/formats";
import type { PostDesign } from "@/lib/studio/types";
import { cn } from "@/lib/utils";

interface PostArtProps {
  design: PostDesign;
  className?: string;
}

function mixOverlay(overlay: number): string {
  return `color-mix(in oklab, #0c0b0a ${overlay}%, transparent)`;
}

function objectPos(pos: PostDesign["imagePos"]): string {
  if (pos === "top") return "center top";
  if (pos === "bottom") return "center bottom";
  return "center center";
}

function kickerStyle(s: number, tracking: number, uppercase: boolean) {
  return {
    fontSize: `${Math.max(11, 13 * s)}px`,
    letterSpacing: `${Math.max(1.4, 2.4 * s + tracking * 0.15)}px`,
    textTransform: uppercase ? ("uppercase" as const) : ("uppercase" as const),
    fontWeight: 500,
    lineHeight: 1.3,
  };
}

export const PostArt = forwardRef<HTMLElement, PostArtProps>(function PostArt(
  { design, className },
  ref,
) {
  const format = getFormat(design.formatId);
  const font = getFont(design.fontId);
  const s = format.width / 1080;
  const pad = Math.max(24, design.padding * s);
  const headlineSize = Math.max(18, design.headlineSize * s);
  const subSize = Math.max(13, headlineSize * 0.34);
  const bodySize = Math.max(13, 18 * s);
  const isWide = format.width / format.height >= 1.3;
  const isTall = format.height / format.width >= 1.5;
  const align = design.align;
  const textAlign = align;
  const items =
    align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";

  const rootStyle: CSSProperties = {
    width: format.width,
    height: format.height,
    backgroundColor: design.bgColor,
    color: design.textColor,
    fontFamily: font.family,
    textAlign,
  };

  const image = design.imageSrc ? (
    <img
      src={design.imageSrc}
      alt=""
      draggable={false}
      className="absolute inset-0 size-full"
      style={{
        objectFit: design.imageFit,
        objectPosition: objectPos(design.imagePos),
      }}
    />
  ) : null;

  const veil =
    design.imageSrc && design.overlay > 0 ? (
      <div
        className="absolute inset-0"
        style={{ background: mixOverlay(design.overlay) }}
      />
    ) : null;

  const grain = <div className="post-grain" aria-hidden />;

  const kicker = design.kicker.trim() ? (
    <p
      style={{
        ...kickerStyle(s, design.letterSpacing, design.uppercase),
        color: design.accentColor,
        fontFamily: '"Figtree", ui-sans-serif, sans-serif',
      }}
    >
      {design.kicker}
    </p>
  ) : null;

  const headline = (
    <h2
      className="text-balance"
      style={{
        fontSize: `${headlineSize}px`,
        fontWeight: font.weight,
        letterSpacing: `${design.letterSpacing * s}px`,
        lineHeight: design.lineHeight,
        textTransform: design.uppercase ? "uppercase" : "none",
        fontFamily: font.family,
        maxWidth: "18ch",
      }}
    >
      {design.headline || "Escreva o título"}
    </h2>
  );

  const subhead = design.subhead.trim() ? (
    <p
      style={{
        fontSize: `${subSize}px`,
        lineHeight: 1.3,
        letterSpacing: `${design.letterSpacing * 0.2 * s}px`,
        fontFamily: '"Figtree", ui-sans-serif, sans-serif',
        fontWeight: 500,
        color: design.accentColor,
        maxWidth: "28ch",
      }}
    >
      {design.subhead}
    </p>
  ) : null;

  const body = design.body.trim() ? (
    <p
      className="text-pretty"
      style={{
        fontSize: `${bodySize}px`,
        lineHeight: 1.45,
        fontFamily: '"Figtree", ui-sans-serif, sans-serif',
        fontWeight: 400,
        opacity: 0.86,
        maxWidth: "36ch",
      }}
    >
      {design.body}
    </p>
  ) : null;

  const cta = design.cta.trim() ? (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: '"Figtree", ui-sans-serif, sans-serif',
        fontSize: `${Math.max(12, 14 * s)}px`,
        fontWeight: 600,
        letterSpacing: `${0.6 * s}px`,
        padding: `${10 * s}px ${18 * s}px`,
        borderRadius: 999,
        background: design.accentColor,
        color: design.bgColor,
      }}
    >
      {design.cta}
    </span>
  ) : null;

  const layout = design.templateId;
  let content: ReactNode;

  if (layout === "quote") {
    content = (
      <div
        className="relative flex h-full flex-col justify-end"
        style={{ padding: pad, gap: 22 * s }}
      >
        {image}
        {veil}
        <span
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: pad * 0.35,
            left: align === "right" ? undefined : pad * 0.55,
            right: align === "right" ? pad * 0.55 : undefined,
            fontSize: `${280 * s}px`,
            lineHeight: 0.7,
            opacity: 0.14,
            color: design.accentColor,
            fontFamily: font.family,
          }}
        >
          “
        </span>
        {kicker}
        {headline}
        <span
          aria-hidden
          style={{
            width: 48 * s,
            height: 1,
            background: design.accentColor,
            opacity: 0.7,
            alignSelf: items === "center" ? "center" : items === "flex-end" ? "flex-end" : "flex-start",
          }}
        />
        {subhead}
        {grain}
      </div>
    );
  } else if (layout === "product") {
    content = (
      <div className="relative flex h-full flex-col">
        <div className="relative" style={{ flex: "1 1 62%", minHeight: 0 }}>
          <div className="absolute inset-0" style={{ background: design.accentColor }} />
          {image}
          {veil}
        </div>
        <div
          className="relative flex flex-col"
          style={{
            flex: "0 0 auto",
            padding: pad,
            gap: 10 * s,
            alignItems: items,
            background: design.bgColor,
          }}
        >
          {kicker}
          {headline}
          {subhead}
          {body}
          <div style={{ marginTop: 8 * s }}>{cta}</div>
        </div>
        {grain}
      </div>
    );
  } else if (layout === "split") {
    content = (
      <div
        className={cn("relative flex h-full", isWide ? "flex-row" : "flex-col")}
      >
        <div
          className="relative"
          style={{
            flex: isWide ? "0 0 50%" : "1 1 54%",
            minHeight: 0,
            background: design.accentColor,
          }}
        >
          {image}
          {veil}
        </div>
        <div
          className="relative flex flex-col justify-end"
          style={{
            flex: "1 1 auto",
            padding: pad,
            gap: 14 * s,
            alignItems: items,
            background: design.bgColor,
          }}
        >
          {kicker}
          {headline}
          {subhead}
          {body}
          <div style={{ marginTop: 6 * s }}>{cta}</div>
        </div>
        {grain}
      </div>
    );
  } else if (layout === "band") {
    content = (
      <div className="relative h-full">
        {image ?? (
          <div className="absolute inset-0" style={{ background: design.bgColor }} />
        )}
        {veil}
        <div
          className="absolute inset-x-0 flex flex-col"
          style={{
            bottom: isTall ? "18%" : "12%",
            padding: `${22 * s}px ${pad || 56 * s}px`,
            gap: 8 * s,
            alignItems: items,
            background: design.bgColor,
          }}
        >
          {kicker}
          {headline}
          {subhead}
        </div>
        {grain}
      </div>
    );
  } else if (layout === "offer") {
    content = (
      <div
        className="relative flex h-full flex-col justify-between"
        style={{ padding: pad }}
      >
        {image}
        {veil}
        <div style={{ alignSelf: items }}>{kicker}</div>
        <div
          className="flex flex-col"
          style={{ gap: 8 * s, alignItems: items }}
        >
          {headline}
          {subhead}
        </div>
        <div
          className="flex flex-col"
          style={{ gap: 16 * s, alignItems: items }}
        >
          {body}
          {cta}
        </div>
        {grain}
      </div>
    );
  } else if (layout === "editorial") {
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col justify-between"
          style={{ padding: pad }}
        >
          <div className="flex items-start justify-between">
            {kicker}
            <span
              style={{
                fontFamily: '"Figtree", ui-sans-serif, sans-serif',
                fontSize: `${12 * s}px`,
                letterSpacing: `${3 * s}px`,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Grafia
            </span>
          </div>
          <div className="flex flex-col" style={{ gap: 16 * s, alignItems: items }}>
            {headline}
            {subhead}
            {cta}
          </div>
        </div>
        {grain}
      </div>
    );
  } else if (layout === "event") {
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col justify-between"
          style={{ padding: pad, alignItems: items }}
        >
          <div
            style={{
              fontFamily: font.family,
              fontSize: `${Math.max(28, 42 * s)}px`,
              letterSpacing: `${2 * s}px`,
              color: design.accentColor,
              lineHeight: 1,
            }}
          >
            {design.kicker || "—"}
          </div>
          <div className="flex flex-col" style={{ gap: 14 * s, alignItems: items }}>
            {headline}
            {subhead}
            {body}
            <div style={{ marginTop: 8 * s }}>{cta}</div>
          </div>
        </div>
        {grain}
      </div>
    );
  } else if (layout === "carousel") {
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col justify-between"
          style={{ padding: pad }}
        >
          <div className="flex items-center justify-between">
            {kicker}
            <span
              aria-hidden
              style={{
                width: 36 * s,
                height: 36 * s,
                borderRadius: 999,
                border: `1.5px solid ${design.accentColor}`,
                display: "grid",
                placeItems: "center",
                fontSize: `${14 * s}px`,
                fontFamily: '"Figtree", ui-sans-serif, sans-serif',
              }}
            >
              →
            </span>
          </div>
          <div className="flex flex-col" style={{ gap: 14 * s, alignItems: items }}>
            {headline}
            {subhead}
            {body}
          </div>
        </div>
        {grain}
      </div>
    );
  } else if (layout === "minimal") {
    content = (
      <div
        className="relative flex h-full flex-col items-center justify-center"
        style={{ padding: pad, gap: 18 * s }}
      >
        {image}
        {veil}
        {kicker}
        {headline}
        {subhead}
        {grain}
      </div>
    );
  } else if (layout === "story") {
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col"
          style={{
            padding: pad,
            paddingTop: pad * 1.4,
            paddingBottom: pad * 1.2,
            alignItems: items,
            justifyContent: "space-between",
          }}
        >
          {kicker}
          <div className="flex flex-col" style={{ gap: 16 * s, alignItems: items }}>
            {headline}
            {subhead}
          </div>
          {cta ?? (
            <span
              style={{
                fontFamily: '"Figtree", ui-sans-serif, sans-serif',
                fontSize: `${13 * s}px`,
                letterSpacing: `${1.5 * s}px`,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Grafia
            </span>
          )}
        </div>
        {grain}
      </div>
    );
  } else if (layout === "tip") {
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col justify-between"
          style={{ padding: pad, alignItems: items }}
        >
          {kicker}
          <div className="flex flex-col" style={{ gap: 18 * s, alignItems: items }}>
            {headline}
            {body}
          </div>
          {cta}
        </div>
        {grain}
      </div>
    );
  } else {
    // announcement (default stacked)
    content = (
      <div className="relative h-full">
        {image}
        {veil}
        <div
          className="relative flex h-full flex-col"
          style={{ padding: pad, alignItems: items }}
        >
          {kicker}
          <div style={{ height: 18 * s }} />
          {headline}
          <div style={{ height: 12 * s }} />
          {subhead}
          <div className="flex-1" />
          {body}
          <div style={{ height: 20 * s }} />
          {cta}
        </div>
        {grain}
      </div>
    );
  }

  return (
    <article
      ref={ref}
      className={cn("post-art relative overflow-hidden", className)}
      style={rootStyle}
    >
      {content}
    </article>
  );
});
