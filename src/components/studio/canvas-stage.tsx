import { useCallback, useEffect, useRef, useState, type DragEvent, type RefObject } from "react";
import { ImagePlus } from "lucide-react";
import { PostArt } from "@/components/studio/post-art";
import { readImageFile } from "@/lib/studio/export";
import { getFormat } from "@/lib/studio/formats";
import { useStudio } from "@/lib/studio/store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function CanvasStage({
  canvasRef,
}: {
  canvasRef: RefObject<HTMLElement | null>;
}) {
  const current = useStudio((s) => s.current);
  const setImage = useStudio((s) => s.setImage);
  const format = getFormat(current.formatId);
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => {
      const w = frame.clientWidth;
      const h = frame.clientHeight;
      const next = Math.min(w / format.width, h / format.height, 1);
      setScale(Math.max(0.12, next));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [format.width, format.height]);

  const onDrop = useCallback(
    async (event: DragEvent) => {
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
    },
    [setImage],
  );

  return (
    <div
      ref={frameRef}
      className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-4 lg:px-10 lg:py-8"
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
    >
      <div
        className="stage-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="relative"
        style={{
          width: format.width * scale,
          height: format.height * scale,
        }}
      >
        <div
          className="origin-top-left"
          style={{
            width: format.width,
            height: format.height,
            transform: `scale(${scale})`,
          }}
        >
          <PostArt ref={canvasRef} design={current} />
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-foreground/10",
            dragging && "ring-2 ring-primary",
          )}
        />
      </div>
      {dragging ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/50">
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <ImagePlus className="size-4" />
            Solte a imagem no post
          </div>
        </div>
      ) : null}
    </div>
  );
}
