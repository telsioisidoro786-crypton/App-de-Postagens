import { useEffect, useRef } from "react";
import { Toaster } from "sonner";
import { CanvasStage } from "@/components/studio/canvas-stage";
import { Inspector } from "@/components/studio/inspector";
import { LibraryPanel } from "@/components/studio/library-panel";
import { MobileDock } from "@/components/studio/mobile-dock";
import { TemplateRail } from "@/components/studio/template-rail";
import { TopBar } from "@/components/studio/top-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { exportCurrentPost, shareCurrentPost } from "@/lib/studio/export";
import { useStudio } from "@/lib/studio/store";

export function StudioApp() {
  const canvasRef = useRef<HTMLElement | null>(null);
  const panel = useStudio((s) => s.panel);

  useEffect(() => {
    void useStudio.persist.rehydrate();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const meta = event.metaKey || event.ctrlKey;
      if (meta && event.key.toLowerCase() === "s") {
        event.preventDefault();
        const result = useStudio.getState().saveToLibrary();
        if (result === "full") return;
      }
      if (meta && event.key.toLowerCase() === "e") {
        event.preventDefault();
        void exportCurrentPost(canvasRef.current);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleExport() {
    void exportCurrentPost(canvasRef.current);
  }

  function handleShare() {
    void shareCurrentPost(canvasRef.current);
  }

  return (
    <TooltipProvider delayDuration={250}>
      <div className="flex h-dvh flex-col overflow-hidden bg-background text-foreground">
        <TopBar onExport={handleExport} onShare={handleShare} />
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-56 shrink-0 border-r border-border bg-card lg:flex lg:flex-col">
            <TemplateRail />
          </aside>
          <main className="flex min-w-0 flex-1 flex-col bg-stage">
            <CanvasStage canvasRef={canvasRef} />
          </main>
          <aside className="hidden w-[22rem] shrink-0 border-l border-border bg-card lg:flex lg:flex-col">
            {panel === "library" ? <LibraryPanel /> : <Inspector mode="all" />}
          </aside>
        </div>
        <div className="flex min-h-0 flex-col lg:hidden">
          <div className="max-h-[42dvh] min-h-36 overflow-hidden border-t border-border bg-card">
            {panel === "templates" ? <TemplateRail /> : null}
            {panel === "edit" ? <Inspector mode="edit" /> : null}
            {panel === "image" ? <Inspector mode="image" /> : null}
            {panel === "library" ? <LibraryPanel /> : null}
          </div>
          <MobileDock />
        </div>
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            className:
              "bg-card text-foreground border border-border shadow-none font-sans",
          }}
        />
      </div>
    </TooltipProvider>
  );
}
