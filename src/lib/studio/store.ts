import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getPalette } from "./palettes";
import { designFromTemplate, getTemplate, TEMPLATES } from "./templates";
import type {
  FontId,
  FormatId,
  PaletteId,
  PostDesign,
  StudioPanel,
  TemplateId,
} from "./types";

const LIBRARY_LIMIT = 8;
const DRAFT_ID = "grafia-draft";

function freshDesign(): PostDesign {
  return designFromTemplate(TEMPLATES[0], "feed-square", DRAFT_ID);
}

interface StudioState {
  current: PostDesign;
  library: PostDesign[];
  panel: StudioPanel;
  hydrated: boolean;
  setPanel: (panel: StudioPanel) => void;
  patch: (partial: Partial<PostDesign>) => void;
  applyTemplate: (id: TemplateId) => void;
  applyFormat: (id: FormatId) => void;
  applyPalette: (id: PaletteId) => void;
  applyFont: (id: FontId) => void;
  setImage: (src: string | null) => void;
  newPost: () => void;
  saveToLibrary: () => "saved" | "updated" | "full";
  loadFromLibrary: (id: string) => void;
  deleteFromLibrary: (id: string) => void;
  markHydrated: () => void;
}

export const useStudio = create<StudioState>()(
  persist(
    (set, get) => ({
      current: freshDesign(),
      library: [],
      panel: "templates",
      hydrated: false,
      setPanel: (panel) => set({ panel }),
      patch: (partial) =>
        set({
          current: { ...get().current, ...partial, updatedAt: Date.now() },
        }),
      applyTemplate: (id) => {
        const { current } = get();
        const next = designFromTemplate(getTemplate(id), current.formatId, current.id);
        set({ current: { ...next, updatedAt: Date.now() } });
      },
      applyFormat: (id) =>
        set({
          current: { ...get().current, formatId: id, updatedAt: Date.now() },
        }),
      applyPalette: (id) => {
        const palette = getPalette(id);
        set({
          current: {
            ...get().current,
            bgColor: palette.bg,
            textColor: palette.text,
            accentColor: palette.accent,
            updatedAt: Date.now(),
          },
        });
      },
      applyFont: (id) =>
        set({
          current: { ...get().current, fontId: id, updatedAt: Date.now() },
        }),
      setImage: (src) =>
        set({
          current: { ...get().current, imageSrc: src, updatedAt: Date.now() },
        }),
      newPost: () => set({ current: freshDesign() }),
      saveToLibrary: () => {
        const { current, library } = get();
        const snapshot: PostDesign = {
          ...current,
          id: current.id === DRAFT_ID ? crypto.randomUUID() : current.id,
          name: current.headline.trim() || current.name,
          updatedAt: Date.now(),
        };
        const existing = library.findIndex((p) => p.id === snapshot.id);
        if (existing >= 0) {
          const next = library.slice();
          next[existing] = snapshot;
          set({ library: next, current: snapshot });
          return "updated";
        }
        if (library.length >= LIBRARY_LIMIT) return "full";
        set({
          library: [snapshot, ...library],
          current: snapshot,
        });
        return "saved";
      },
      loadFromLibrary: (id) => {
        const found = get().library.find((p) => p.id === id);
        if (found) set({ current: { ...found } });
      },
      deleteFromLibrary: (id) =>
        set({ library: get().library.filter((p) => p.id !== id) }),
      markHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "grafia-studio",
      skipHydration: true,
      partialize: (state) => ({
        current: state.current,
        library: state.library,
      }),
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);
