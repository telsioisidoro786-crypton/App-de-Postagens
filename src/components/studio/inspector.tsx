import type { ReactNode } from "react";
import { AlignCenter, AlignLeft, AlignRight, CaseSensitive, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { readImageFile } from "@/lib/studio/export";
import { FONTS } from "@/lib/studio/fonts";
import { PALETTES } from "@/lib/studio/palettes";
import { useStudio } from "@/lib/studio/store";
import type { Align, ImagePos } from "@/lib/studio/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

function Field({
  label,
  value,
  hint,
  children,
}: {
  label: string;
  value?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label>{label}</Label>
        {value ? (
          <span className="text-[11px] tabular-nums text-muted-foreground">{value}</span>
        ) : hint ? (
          <span className="text-[11px] text-muted-foreground">{hint}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function AlignButtons({
  value,
  onChange,
}: {
  value: Align;
  onChange: (v: Align) => void;
}) {
  const items: { id: Align; icon: typeof AlignLeft; label: string }[] = [
    { id: "left", icon: AlignLeft, label: "Esquerda" },
    { id: "center", icon: AlignCenter, label: "Centro" },
    { id: "right", icon: AlignRight, label: "Direita" },
  ];
  return (
    <div className="flex rounded-lg bg-secondary p-1">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            onClick={() => onChange(item.id)}
            className={cn(
              "flex h-9 flex-1 items-center justify-center rounded-md transition-[background-color,color] duration-150",
              value === item.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}

export function Inspector({ mode }: { mode: "edit" | "image" | "all" }) {
  const current = useStudio((s) => s.current);
  const patch = useStudio((s) => s.patch);
  const applyFont = useStudio((s) => s.applyFont);
  const applyPalette = useStudio((s) => s.applyPalette);
  const setImage = useStudio((s) => s.setImage);

  async function onFile(file: File | undefined) {
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

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-6 px-4 py-4 pb-10">
        {showText ? (
          <>
            <section className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Texto
              </p>
              <Field label="Olho">
                <Input
                  value={current.kicker}
                  onChange={(e) => patch({ kicker: e.target.value })}
                  placeholder="Categoria ou data"
                />
              </Field>
              <Field label="Título">
                <Textarea
                  rows={3}
                  value={current.headline}
                  onChange={(e) => patch({ headline: e.target.value })}
                  placeholder="Frase principal"
                />
              </Field>
              <Field label="Subtítulo">
                <Input
                  value={current.subhead}
                  onChange={(e) => patch({ subhead: e.target.value })}
                  placeholder="Linha de apoio"
                />
              </Field>
              <Field label="Corpo">
                <Textarea
                  rows={3}
                  value={current.body}
                  onChange={(e) => patch({ body: e.target.value })}
                  placeholder="Texto complementar"
                />
              </Field>
              <Field label="Chamada">
                <Input
                  value={current.cta}
                  onChange={(e) => patch({ cta: e.target.value })}
                  placeholder="Botão ou handle"
                />
              </Field>
            </section>

            <Separator />

            <section className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Letra
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {FONTS.map((font) => (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => applyFont(font.id)}
                    className={cn(
                      "h-11 rounded-lg px-2.5 text-left text-sm ring-1 ring-border transition-[background-color,box-shadow] duration-150",
                      current.fontId === font.id
                        ? "bg-primary text-primary-foreground ring-primary"
                        : "bg-secondary text-foreground hover:ring-foreground/20",
                    )}
                    style={{ fontFamily: font.family, fontWeight: font.weight }}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
              <Field label="Tamanho" value={`${current.headlineSize}`}>
                <Slider
                  min={36}
                  max={200}
                  step={1}
                  value={[current.headlineSize]}
                  onValueChange={([v]) => patch({ headlineSize: v ?? current.headlineSize })}
                />
              </Field>
              <Field label="Espaçamento" value={`${current.letterSpacing.toFixed(1)}`}>
                <Slider
                  min={-6}
                  max={14}
                  step={0.5}
                  value={[current.letterSpacing]}
                  onValueChange={([v]) =>
                    patch({ letterSpacing: v ?? current.letterSpacing })
                  }
                />
              </Field>
              <Field label="Entrelinha" value={current.lineHeight.toFixed(2)}>
                <Slider
                  min={0.8}
                  max={1.6}
                  step={0.02}
                  value={[current.lineHeight]}
                  onValueChange={([v]) => patch({ lineHeight: v ?? current.lineHeight })}
                />
              </Field>
              <Field label="Alinhamento">
                <AlignButtons
                  value={current.align}
                  onChange={(align) => patch({ align })}
                />
              </Field>
              <button
                type="button"
                onClick={() => patch({ uppercase: !current.uppercase })}
                className={cn(
                  "flex h-11 items-center justify-center gap-2 rounded-lg text-sm ring-1 transition-[background-color,color] duration-150",
                  current.uppercase
                    ? "bg-primary text-primary-foreground ring-primary"
                    : "bg-secondary text-muted-foreground ring-border hover:text-foreground",
                )}
              >
                <CaseSensitive className="size-4" />
                Caixa alta
              </button>
            </section>

            <Separator />

            <section className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Paleta
              </p>
              <div className="grid grid-cols-4 gap-2">
                {PALETTES.map((palette) => (
                  <button
                    key={palette.id}
                    type="button"
                    title={palette.name}
                    onClick={() => applyPalette(palette.id)}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <span
                      className={cn(
                        "flex h-11 w-full overflow-hidden rounded-lg ring-1 ring-border",
                        current.bgColor === palette.bg &&
                          current.textColor === palette.text &&
                          "ring-2 ring-primary",
                      )}
                    >
                      <span className="w-1/2" style={{ background: palette.bg }} />
                      <span className="w-1/2" style={{ background: palette.accent }} />
                    </span>
                    <span className="text-[10px] text-muted-foreground">{palette.name}</span>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <ColorField
                  label="Fundo"
                  value={current.bgColor}
                  onChange={(bgColor) => patch({ bgColor })}
                />
                <ColorField
                  label="Texto"
                  value={current.textColor}
                  onChange={(textColor) => patch({ textColor })}
                />
                <ColorField
                  label="Acento"
                  value={current.accentColor}
                  onChange={(accentColor) => patch({ accentColor })}
                />
              </div>
              <Field label="Margem" value={`${current.padding}`}>
                <Slider
                  min={24}
                  max={140}
                  step={2}
                  value={[current.padding]}
                  onValueChange={([v]) => patch({ padding: v ?? current.padding })}
                />
              </Field>
            </section>
          </>
        ) : null}

        {showImage ? (
          <>
            {mode === "all" ? <Separator /> : null}
            <section className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Imagem
              </p>
              <label className="flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-secondary text-sm text-muted-foreground ring-1 ring-border hover:text-foreground">
                <Upload className="size-4" />
                Enviar foto
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    void onFile(e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
              </label>
              {current.imageSrc ? (
                <div className="flex items-center gap-2">
                  <img
                    src={current.imageSrc}
                    alt=""
                    className="size-12 rounded-md object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
                  />
                  <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                    Imagem no post
                  </p>
                  <Button
                    type="button"
                    size="icon-sm"
                    variant="ghost"
                    onClick={() => setImage(null)}
                    aria-label="Remover imagem"
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Ou arraste um arquivo para o canvas.
                </p>
              )}
              <Field label="Enquadramento">
                <div className="flex rounded-lg bg-secondary p-1">
                  {(["cover", "contain"] as const).map((fit) => (
                    <button
                      key={fit}
                      type="button"
                      onClick={() => patch({ imageFit: fit })}
                      className={cn(
                        "h-9 flex-1 rounded-md text-xs font-medium transition-[background-color,color] duration-150",
                        current.imageFit === fit
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {fit === "cover" ? "Preencher" : "Conter"}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Posição">
                <div className="flex rounded-lg bg-secondary p-1">
                  {(
                    [
                      ["top", "Alto"],
                      ["center", "Centro"],
                      ["bottom", "Baixo"],
                    ] as [ImagePos, string][]
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => patch({ imagePos: id })}
                      className={cn(
                        "h-9 flex-1 rounded-md text-xs font-medium transition-[background-color,color] duration-150",
                        current.imagePos === id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Véu" value={`${current.overlay}%`}>
                <Slider
                  min={0}
                  max={80}
                  step={1}
                  value={[current.overlay]}
                  onValueChange={([v]) => patch({ overlay: v ?? current.overlay })}
                />
              </Field>
            </section>
          </>
        ) : null}
      </div>
    </ScrollArea>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span className="flex h-11 items-center gap-2 rounded-lg bg-secondary px-2 ring-1 ring-border">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="size-6 cursor-pointer rounded-sm border-0 bg-transparent p-0"
        />
        <span className="font-mono text-[11px] text-muted-foreground uppercase">
          {value.replace("#", "")}
        </span>
      </span>
    </label>
  );
}
