export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f4f0ea] overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12 2xl:p-16">
      {/* Background Textures (Placeholders for torn paper) */}
      <div className="absolute top-[-5%] right-[-10%] w-[120%] md:w-1/2 h-1/2 bg-[#c8badd] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[120%] md:w-1/2 h-1/2 bg-[#c8badd] rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Main Grid Container - Stepped max-widths to center content on laptops */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 2xl:gap-24 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto mt-10">
        {/* ================= LEFT COLUMN ================= */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 2xl:space-y-16">
          {/* Title & Intro */}
          <div className="max-w-md 2xl:max-w-xl">
            <h1 className="text-5xl sm:text-4xl 2xl:text-6xl font-extrabold tracking-tighter text-slate-900 mb-4 sm:mb-6 font-serif whitespace-nowrap">
              Hello, I'm Nhu Le
            </h1>
            <p className="text-base sm:text-lg 2xl:text-2xl text-slate-700 leading-relaxed">
              Lecturer at Ton Duc Thang University & Doctoral Student at the
              University of Ostrava
            </p>
          </div>
          {/* Main Photo with Paperclip */}
          <div className="relative mt-8 lg:mt-0 w-[70%] sm:w-1/2 lg:w-[60%] 2xl:w-[70%] max-w-sm">
            <div className="p-2 sm:p-3 bg-white shadow-xl rotate-[-3deg]">
              <img
                src="/nhu_anh_avatar.jpg"
                alt="Nhu Le"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* My Research Section */}
          <div className="max-w-md lg:max-w-sm xl:max-w-md w-full pt-8 sm:pt-12 lg:pt-8">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3 2xl:mb-5 font-serif italic">
              Research Interests
            </h2>
            <p className="text-sm sm:text-base 2xl:text-lg text-slate-800 leading-relaxed text-justify">
              My primary academic focus lies in Corpus Linguistics and its
              evolving applications in modern pedagogy. My current research
              direction is related to learner corpora and phraseology. I am
              particularly interested in the contrastive analysis of lexical
              bundles, investigating the nuances in usage between native English
              speakers and EFL (English as a Foreign Language) learners to
              better understand and improve language acquisition.
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="relative flex flex-col items-center lg:items-end text-center lg:text-left space-y-16 2xl:space-y-24 mt-25">
          {/* About Me Section */}
          <div className="relative max-w-md lg:max-w-sm xl:max-w-md w-full">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3 2xl:mb-5 font-serif italic">
              About Me
            </h2>
            {/* Added text-justify here */}
            <p className="text-justify text-sm sm:text-base 2xl:text-lg text-slate-800 leading-relaxed">
              Dedicated, patient, and driven by a high-energy approach to
              education, I am a lifelong learner constantly seeking creative
              ways to explore and understand the world. I thrive on new concepts
              and welcome challenges that push me beyond my limits. To me,
              professional growth is not just about discovering my own
              potential; it is a commitment to contributing meaningfully to the
              development of my homeland.
            </p>
          </div>

          {/* Polaroids & Butterfly Cluster */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-md 2xl:max-w-lg">
            {/* Butterfly image */}
            <img
              src="/plane-removebg-preview.png"
              alt="Plane"
              className="absolute top-0 left-[10%] sm:left-[20%] lg:-left-[30%] w-auto max-w-48 sm:max-w-56 h-auto max-h-96 sm:max-h-[28rem] object-contain -translate-x-1/2 -translate-y-1/2 z-30 rotate-45"
            />

            {/* Polaroid 1 (Top Layer, Left) */}
            {/* We added z-20 so it stays on top, and -rotate-3 to tilt it left */}
            <div className="z-20 p-2 sm:p-3 pb-8 sm:pb-10 bg-white shadow-xl -rotate-3 w-[55%] sm:w-[60%] shrink-0 mt-20">
              <img
                src="/anh_phong_canh_1.jpg"
                alt="Scenery 1"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Polaroid 2 (Bottom Layer, Right, Overlapped) */}
            {/* -ml-[5%] pulls it slightly to the left for ~5% overlap */}
            {/* mt-8 pushes it down slightly, and rotate-6 tilts it right */}
            <div className="z-10 p-2 sm:p-3 pb-6 sm:pb-8 bg-white shadow-md rotate-6 w-[45%] sm:w-[50%] shrink-0 -ml-[5%] mt-20 sm:mt-30">
              <img
                src="/thuyen_hoi_an.jpg"
                alt="Hoi An Boat"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
