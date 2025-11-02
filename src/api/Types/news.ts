export type NewsPost = {
  _id: string;
  author: string;
  blurhash: string;
  body: string;
  created_at: string;
  header: string;
  image: string;
};

export type NewsResponse = NewsPost[];