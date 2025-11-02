import { create } from "zustand";

interface ModalsStore {
  downloads: boolean;
  question: boolean;
  mobileSidebar: boolean;
  
  setMobileSidebar: (mobileSidebar: boolean) => void;
  setQuestion: (question: boolean) => void;
  setDownloads: (downloads: boolean) => void;
}

export const useModalsStore = create<ModalsStore>((set) => ({
  downloads: false,
  question: false,
  mobileSidebar: false,
  
  setMobileSidebar: (mobileSidebar) => set({ mobileSidebar }),
  setQuestion: (question) => set({ question }),
  setDownloads: (downloads) => set({ downloads }),
}));