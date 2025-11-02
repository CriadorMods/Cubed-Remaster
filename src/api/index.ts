import axios from "axios";

// Types
import type { NewsResponse } from "@/api/Types/news"

// Zustand
import { useNewsStore } from "@/zustand/NewsStore";

const news = axios.create({
  baseURL: "", // your endpoint here lol
  headers: {
    Accept: "application/json",
  },
});

news.get<NewsResponse>("").then((response) => {
  const data = response.data;
  if (data) {
    const { setNews } = useNewsStore.getState();
    setNews(data);
  }
});