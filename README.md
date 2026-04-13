# Nhu Le - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. This website showcases Nhu Le's academic profile, research interests, publications, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works beautifully on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, aesthetic design with a warm color palette (#f4f0ea background with purple accents)
- **Interactive Navigation**: Custom navigation menu with smooth transitions
- **Polaroid Photo Gallery**: Creative photo display with overlapping polaroid-style images
- **Timeline Section**: Visual timeline for showcasing professional experiences
- **Publications & Talks**: Dedicated section for academic publications and presentations
- **Type-Safe**: Built with TypeScript for better code quality and developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/) & [HugeIcons](https://hugeicons.com/)
- **Fonts**: Figtree, Geist Sans, Geist Mono (via next/font)

## 📁 Project Structure

```
c_nhu_port(new)/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with hero section
│   ├── layout.tsx         # Root layout with navigation
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── publication_and_talks/  # Publications page
│   └── timeline/          # Experience timeline page
├── components/            # React components
│   ├── navbar.tsx         # Navigation menu component
│   ├── timeline.tsx       # Timeline display component
│   └── ui/                # shadcn/ui components
├── data/                  # Data files
│   ├── experiences.ts     # Experience/timeline data
│   └── publications-data.ts  # Publications data
├── lib/                   # Utility functions
│   └── utils.ts           # cn() helper for Tailwind classes
├── public/                # Static assets
│   ├── nhu_anh_avatar.jpg      # Profile photo
│   ├── anh_phong_canh_1.jpg    # Polaroid 1 image
│   ├── thuyen_hoi_an.jpg       # Polaroid 2 image
│   └── plane-removebg-preview.png  # Decorative airplane
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd c_nhu_port(new)
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Updating Content

- **Home Page**: Edit `app/page.tsx` to update the hero section, about text, and research interests
- **Experiences**: Modify `data/experiences.ts` to add/update professional experiences
- **Publications**: Update `data/publications-data.ts` to add new publications or talks
- **Images**: Replace images in the `public/` folder (keep the same filenames or update references)

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

### Fonts

The project uses multiple fonts:
- **Figtree**: Primary sans-serif font for body text
- **Geist Sans**: Modern sans-serif for UI elements
- **Geist Mono**: Monospace font for code elements

Fonts are loaded via `next/font` in `app/layout.tsx`.

## 🎨 Design Highlights

- **Color Palette**: Warm cream background (#f4f0ea) with soft purple accents (#c8badd)
- **Typography**: Mix of serif (headings) and sans-serif (body) for visual hierarchy
- **Photo Layout**: Creative polaroid-style photo arrangement with rotation and overlap effects
- **Responsive**: Mobile-first approach with breakpoints for sm, md, lg, xl, and 2xl screens

## 📄 License

This project is private and for personal use.

## 👤 Author

**Nhu Le**
- Lecturer at Ton Duc Thang University
- Doctoral Student at the University of Ostrava
- Research Interests: Corpus Linguistics, Learner Corpora, Phraseology
