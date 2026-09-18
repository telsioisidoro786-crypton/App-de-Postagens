import { Trash2 } from "lucide-react";
import { PostArt } from "@/components/studio/post-art";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getFormat } from "@/lib/studio/formats";
import { useStudio } from "@/lib/studio/store";

export function LibraryPanel() {
  const library = useStudio((s) => s.library);
  const currentId = useStudio((s) => s.current.id);
  const loadFromLibrary = useStudio((s) => s.loadFromLibrary);
  const deleteFromLibrary = useStudio((s) => s.deleteFromLibrary);

  if (library.length === 0) {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-2 px-6 py-10">
        <p className="font-display text-2xl text-foreground">Nada salvo ainda</p>
        <p className="max-w-[22ch] text-sm text-pretty text-muted-foreground">
          Componha um post e toque em Salvar para guardá-lo neste aparelho.
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-2 gap-3 px-4 py-4 lg:grid-cols-1">
        {library.map((item) => {
          const format = getFormat(item.formatId);
          const w = 140;
          const scale = w / format.width;
          const h = format.height * scale;
          const active = item.id === currentId;
          return (
            <div key={item.id} className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => loadFromLibrary(item.id)}
                className={
                  active
                    ? "overflow-hidden rounded-xl ring-2 ring-primary"
                    : "overflow-hidden rounded-xl ring-1 ring-border hover:ring-foreground/25"
                }
                style={{ width: "100%" }}
              >
                <div className="relative w-full overflow-hidden bg-secondary" style={{ height: h }}>
                  <div
                    className="origin-top-left"
                    style={{
                      width: format.width,
                      height: format.height,
                      transform: `scale(${scale})`,
                    }}
                  >
                    <PostArt design={item} />
                  </div>
                </div>
              </button>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-foreground">
                    {item.headline || item.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {format.short} · {format.name}
                  </p>
                </div>
                <Button
                  type="button"
                  size="icon-sm"
                  variant="ghost"
                  aria-label="Apagar"
                  onClick={() => deleteFromLibrary(item.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
