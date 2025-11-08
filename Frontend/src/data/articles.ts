export type ArticleCategory = "News" | "Meta Content" | "Guides";

export type ArticleItem = {
  id: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string; // ISO date
};

export const ARTICLES: ArticleItem[] = [
  {
    id: "n1",
    title: "Patch Notes 15.22 — Cambiamenti ai Fighter",
    excerpt:
      "Panoramica sui cambiamenti ai campioni Fighter e aggiornamenti generali.",
    category: "News",
    date: "2024-11-05",
  },
  {
    id: "m1",
    title: "Meta Tier List — Midlane aggiornata",
    excerpt: "Analisi della Meta attuale con focus sulle scelte in midlane.",
    category: "Meta Content",
    date: "2024-11-01",
  },
  {
    id: "g1",
    title: "Guida ad Aatrox — Combo e gestione wave",
    excerpt:
      "Strategie, consigli pratici e combo per massimizzare l'impatto in corsia.",
    category: "Guides",
    date: "2024-10-28",
  },
  {
    id: "n2",
    title: "Evento stagionale — Missioni e ricompense",
    excerpt:
      "Tutte le missioni dell'evento e come ottenere le ricompense più velocemente.",
    category: "News",
    date: "2024-10-20",
  },
  {
    id: "m2",
    title: "Meta Botlane — Sinergie delle coppie",
    excerpt: "Coppie consigliate, sinergie chiave e come adattarsi alle draft.",
    category: "Meta Content",
    date: "2024-10-18",
  },
  {
    id: "g2",
    title: "Guida Summoner Spells — Scelte situazionali",
    excerpt:
      "Come scegliere le Summoner Spells più efficaci in base alla partita.",
    category: "Guides",
    date: "2024-10-15",
  },
];
