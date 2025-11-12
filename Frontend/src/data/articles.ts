export type ArticleCategory = "News" | "Meta Content" | "Guides";

export type ArticleItem = {
  id: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  date: string;
};

export const ARTICLES: ArticleItem[] = [
  {
    id: "c0c2f6a1-3b2d-4b1a-9d8c-111111111111",
    title: "Patch 14.21 – Highlights e cambi al meta",
    category: "News",
    excerpt:
      "Riepilogo delle principali modifiche della patch 14.21 e impatto sul meta competitivo.",
    date: new Date().toISOString(),
  },
  {
    id: "b7a4e3c2-8f9d-4a7e-9b3a-222222222222",
    title: "Guida: gestire le ondate in corsia come un pro",
    category: "Guides",
    excerpt:
      "Tecniche pratiche per slow push, freeze e fast push per massimizzare il vantaggio in lane.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: "a9d3c5e7-1f2b-4c3d-8e9f-333333333333",
    title: "Meta Content: i campioni più forti per scalare",
    category: "Meta Content",
    excerpt:
      "La nostra selezione dei migliori campioni per salire di elo in questa patch, per ruolo.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];
