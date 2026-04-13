export interface Publication {
  id: string;
  authors: string;
  year: string; 
  title?: string;
  venue: string; 
  link?: string; 
}

export interface PublicationSection {
  id: string;
  title?: string;
  items: Publication[];
}

export const publicationData: PublicationSection[] = [
  {
    id: "publications",
    title: "Publications",
    items: [
      {
        id: "pub-1",
        authors: "Le, N. Q. N. & Zapletalova, G.",
        year: "(Forthcoming, 2026)",
        title: "Lexical bundles in undergraduate L2 Vietnamese English and L1 English Writing.",
        venue: "Topics in Linguistics.",
      },
      {
        id: "pub-2",
        authors: "Le, N. Q. N.",
        year: "(Forthcoming, 2026)",
        title: "The frequency and use of lexical bundles in L2 Vietnamese and L1 English discourse compared to the Academic Formula Lists (AFLs).",
        venue: "Ostrava Journal of English Philology.",
      },
    ],
  },
  {
    id: "workshops",
    title: "Invited workshops",
    items: [
      {
        id: "ws-1",
        authors: "Le, N. Q. N.",
        year: "(2023)",
        title: "Online workshop series for international university students: All about variables & Hypotheses.",
        venue: "Invited Workshop Series.",
      },
    ],
  },
  {
    id: "conferences",
    title: "Conference presentations",
    items: [
      {
        id: "conf-1",
        authors: "Le, N. Q. N.",
        year: "(2025)",
        title: "The frequency and use of Lexical Bundles (LBs) in L2-Vietnamese and L1-English discourse compared to the Academic Formula List (AFL).",
        venue: "Corpus Linguistics 2025, 30 June-3 July, Birmingham, UK.",
      },
      {
        id: "conf-2",
        authors: "Le, N. Q. N.",
        year: "(2025)",
        title: "The Frequency of Lexical Bundles (LBs) Used in Essays by Vietnamese Undergraduates: A Comparison Study of High and Low Scores with the Academic Formula List (AFL).",
        venue: "Králové Anglophone Conference 2025, 27th – 28th March, Hradec Králové, Czechia.",
      },
    ],
  },
];