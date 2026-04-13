export interface Publication {
  id: string;
  authors: string;
  year: string; // Using string to accommodate "(Accepted)" or "(2024)"
  title?: string;
  venue: string; // The publisher or journal name
  link?: string; // Optional URL if the title should be clickable
}

export interface PublicationSection {
  id: string;
  title?: string;
  items: Publication[];
}

export const publicationData: PublicationSection[] = [
  {
    id: "books",
    items: [
      {
        id: "1",
        authors: "Larsson, T., & Hancock, G. R.",
        year: "(Accepted)",
        title: "Statistical modeling for (actual) hypothesis testing: Building cumulative knowledge in corpus linguistics.",
        venue: "Cambridge Elements in Corpus Linguistics. Cambridge University Press.",
      },
      {
        id: "2",
        authors: "Wood, M., Larsson, T., Plonsky, L., Sterling, S., Kytö, M., Yaw, K.",
        year: "(2024)",
        title: "Addressing Questionable Research Practices in Applied Linguistics: A practical guide.",
        venue: "Applied Linguistics Press.",
        link: "https://example.com/link-to-paper",
      },
      {
        id: "3",
        authors: "Egbert, J., Larsson, T., & Biber, D.",
        year: "(2020)",
        title: "Doing linguistics with a corpus: Methodological considerations for the everyday user.",
        venue: "Cambridge Elements in Corpus Linguistics. Cambridge University Press.",
        link: "https://example.com/link-to-paper2",
      },
      {
        id: "4",
        authors: "Jonsson, E., & Larsson, T. (Eds.).",
        year: "(2020)",
        title: "Voices past and present: Studies of involved, speech-related and spoken texts. In honor of Merja Kytö.",
        venue: "Benjamins.",
        link: "https://example.com/link-to-paper3",
      }
    ],
  },
  // You can add another section like this later:
  // {
  //   id: "journals",
  //   title: "Journal Articles",
  //   items: [ ... ]
  // }
];