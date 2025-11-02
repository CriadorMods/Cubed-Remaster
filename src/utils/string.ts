export const createSlug = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
