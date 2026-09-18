import { FolderOpen, ImageIcon, LayoutTemplate, Type } from "lucide-react";
import { FORMATS } from "@/lib/studio/formats";
import { useStudio } from "@/lib/studio/store";
import type { StudioPanel } from "@/lib/studio/types";
import { cn } from "@/lib/utils";

const TABS: { id: StudioPanel; label: string; icon: typeof Type }[] = [
  { id: "templates", label: "Modelos", icon: LayoutTemplate },
  { id: "edit", label: "Letra", icon: Type },
  { id: "image", label: "Imagem", icon: ImageIcon },
  { id: "library", label: "Salvos", icon: FolderOpen },
];

export function MobileDock() {
  const panel = useStudio((s) => s.panel);
  const setPanel = useStudio((s) => s.setPanel);
  const current = useStudio((s) => s.current);
  const applyFormat = useStudio((s) => s.applyFormat);

  return (
    <div className="shrink-0 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="flex gap-1 overflow-x-auto px-3 py-2">
        {FORMATS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => applyFormat(item.id)}
            className={cn(
              "h-8 shrink-0 rounded-full px-3 text-xs font-medium",
              current.formatId === item.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground",
            )}
          >
            {item.short}
          </button>
        ))}
      </div>
      <nav className="grid grid-cols-4 gap-1 px-2 pb-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = panel === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPanel(tab.id)}
              className={cn(
                "flex h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-medium",
                active ? "bg-secondary text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className="size-4" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
