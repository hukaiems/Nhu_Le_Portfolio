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
        title:
          "Lexical bundles in undergraduate L2 Vietnamese English and L1 English Writing.",
        venue: "Topics in Linguistics.",
      },
      {
        id: "pub-2",
        authors: "Le, N. Q. N.",
        year: "(Forthcoming, 2026)",
        title:
          "The frequency and use of lexical bundles in L2 Vietnamese and L1 English discourse compared to the Academic Formula Lists (AFLs).",
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
        title:
          "Online workshop series for international university students: All about variables & Hypotheses.",
        venue: "Invited Workshop Series, Ton Duc Thang University.",
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
        title:
          "The frequency and use of Lexical Bundles (LBs) in L2-Vietnamese and L1-English discourse compared to the Academic Formula List (AFL).",
        venue: "Corpus Linguistics 2025, 30 June-3 July, Birmingham, UK.",
      },
      {
        id: "conf-2",
        authors: "Le, N. Q. N.",
        year: "(2025)",
        title:
          "The Frequency of Lexical Bundles (LBs) Used in Essays by Vietnamese Undergraduates: A Comparison Study of High and Low Scores with the Academic Formula List (AFL).",
        venue:
          "Králové Anglophone Conference 2025, 27th – 28th March, Hradec Králové, Czechia.",
      },
      {
        id: "conf-3",
        authors: "Le, N. Q. N.",
        year: "(2024)",
        title:
          "Phraseology in L2 Vietnamese English and L1 English Discourse: A Contrastive Study.",
        venue:
          "The 3rd Nitra Postgraduate Conference in English Studies: Voices and Visions, Nitra, Slovakia.",
      },
      {
        id: "conf-4",
        authors: "Le, N. Q. N.",
        year: "(2024)",
        title: "From Idea to Reality: My Journey of Building a Learner Corpus.",
        venue:
          "Student Conference at the Department of English and American Studies, Faculty of Arts, University of Ostrava, Czech Republic.",
      },
      {
        id: "conf-5",
        authors: "Le, N. Q. N.",
        year: "(2019)",
        title:
          "Autonomy and Attitude of University Freshmen as the View of Self-Determination Theory in Vietnam.",
        venue: "Language Teaching and Learning Today 2019, HCMC, Vietnam.",
      },
      {
        id: "conf-6",
        authors: "Le, N. Q. N.",
        year: "(2018)",
        title:
          "A Pilot Study: Data-Driven Learning (DDL) - A Critical Approach to Improve EFL Learners' Writing Accuracy in the Micro Level.",
        venue:
          "The 4th international conference on English across Cultures, Faculty of Languages and Arts Universitas Pendidikan Ganesha, Indonesia.",
      },
      {
        id: "conf-7",
        authors: "Le, N. Q. N.",
        year: "(2015)",
        title:
          "The Reality and Solutions to Improve the Teaching and Learning Quality of the Language Centers in the Cities in the South and Middle Vietnam (2015).",
        venue: "Open University, HCMC, Viet Nam.",
      },
      {
        id: "conf-8",
        authors: "Le, N. Q. N.",
        year: "(2015)",
        title:
          "Data-Driven Learning - A Critical Approach of Writing Teaching.",
        venue:
          "The 3rd TESOL Talks workshop, the Australian Center for Education and Training, HCMC, Viet Nam.",
      },
    ],
  },
];
