import { create } from "zustand";
import type { NewsResponse } from "@/api/Types/news";

interface NewsStore {
  news: NewsResponse;

  setNews: (news: NewsResponse) => void;
}

export const useNewsStore = create<NewsStore>((set) => ({
  news: [],
  
  setNews: (news) => set({ news }),
}));
