import { PostArt } from "@/components/studio/post-art";
import { getFormat } from "@/lib/studio/formats";
import { designFromTemplate, TEMPLATES } from "@/lib/studio/templates";
import { useStudio } from "@/lib/studio/store";
import type { Template } from "@/lib/studio/types";
import { cn } from "@/lib/utils";

function Thumb({
  template,
  active,
  onSelect,
}: {
  template: Template;
  active: boolean;
  onSelect: () => void;
}) {
  const format = getFormat("feed-square");
  const preview = designFromTemplate(template, "feed-square", "thumb");
  const scale = 88 / format.width;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-[104px] shrink-0 flex-col gap-2 text-left lg:w-full",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-secondary ring-1 ring-border transition-[box-shadow,transform] duration-150 group-hover:ring-foreground/25",
          active && "ring-2 ring-primary",
        )}
        style={{ width: 88, height: 88 }}
      >
        <div
          className="origin-top-left"
          style={{
            width: format.width,
            height: format.height,
            transform: `scale(${scale})`,
          }}
        >
          <PostArt design={preview} />
        </div>
      </div>
      <div className="min-w-0">
        <p
          className={cn(
            "truncate text-xs font-medium",
            active ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {template.name}
        </p>
        <p className="hidden truncate text-[11px] text-muted-foreground lg:block">
          {template.description}
        </p>
      </div>
    </button>
  );
}

export function TemplateRail() {
  const current = useStudio((s) => s.current);
  const applyTemplate = useStudio((s) => s.applyTemplate);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="hidden px-4 pt-4 pb-2 lg:block">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          Modelos
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-y-auto lg:px-4 lg:pb-6">
        {TEMPLATES.map((template) => (
          <Thumb
            key={template.id}
            template={template}
            active={current.templateId === template.id}
            onSelect={() => applyTemplate(template.id)}
          />
        ))}
      </div>
    </div>
  );
}
