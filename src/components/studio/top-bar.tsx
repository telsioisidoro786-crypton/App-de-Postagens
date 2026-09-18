import { Download, FolderOpen, FolderPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORMATS, getFormat } from "@/lib/studio/formats";
import { useStudio } from "@/lib/studio/store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function TopBar({ onExport }: { onExport: () => void }) {
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

  return (
    <header className="flex shrink-0 items-center gap-3 border-b border-border bg-background px-3 py-2.5 lg:px-5">
      <div className="flex min-w-0 items-baseline gap-2.5">
        <span className="font-display text-[1.65rem] leading-none tracking-tight text-foreground">
          Grafia
        </span>
        <span className="hidden truncate text-xs text-muted-foreground sm:inline">
          Estúdio de posts
        </span>
      </div>

      <div className="mx-auto hidden min-w-0 max-w-xl flex-1 items-center justify-center md:flex">
        <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-secondary p-1">
          {FORMATS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => applyFormat(item.id)}
              className={cn(
                "h-8 shrink-0 rounded-full px-3 text-xs font-medium transition-[background-color,color] duration-150",
                current.formatId === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.short}
            </button>
          ))}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <span className="mr-1 hidden text-xs tabular-nums text-muted-foreground lg:inline">
          {format.width} × {format.height}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          className="hidden sm:inline-flex"
          onClick={() => newPost()}
          title="Novo post"
        >
          <Plus />
        </Button>
        <Button
          variant={panel === "library" ? "secondary" : "ghost"}
          size="icon-sm"
          className="hidden lg:inline-flex"
          onClick={() => setPanel(panel === "library" ? "edit" : "library")}
          title="Biblioteca"
        >
          <FolderOpen />
        </Button>
        <Button variant="secondary" size="sm" onClick={save}>
          <FolderPlus />
          <span className="hidden sm:inline">Salvar</span>
        </Button>
        <Button size="sm" onClick={onExport}>
          <Download />
          <span className="hidden sm:inline">Baixar PNG</span>
        </Button>
      </div>
    </header>
  );
}
