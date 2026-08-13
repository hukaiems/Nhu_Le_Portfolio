"use client";

import { publicationData } from "@/data/publications-data";
import Link from "next/link";

export default function PublicationTalks() {
  return (
    <div className="min-h-screen bg-[#f4f0ea] py-24 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto mt-10">

        {publicationData.map((section) => (
          <section key={section.id} className="mb-16">
            
            {/* Section Subtitle - KEPT CENTERED */}
            <h2 className="text-2xl md:text-3xl font-serif text-[#0a1128] text-center mb-10">
              {section.title}
            </h2>

            {/* Citations List - EXPLICITLY LEFT ALIGNED */}
            <div className="space-y-8 text-base md:text-lg text-slate-800 font-serif leading-relaxed text-left">
              {[...section.items].reverse().map((pub) => (
                <p 
                  key={pub.id} 
                  className="!text-left w-full" 
                >
                  <span>{pub.authors} {pub.year}. </span>
                  
                  {pub.link ? (
                    <Link 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="italic text-[#1f7a5c] underline hover:text-emerald-600 transition-colors"
                    >
                      {pub.title}
                    </Link>
                  ) : (
                    <span className="italic">{pub.title}</span>
                  )}
                  
                  <span> {pub.venue}</span>
                </p>
              ))}
            </div>
            
          </section>
        ))}

      </div>
    </div>
  );
}
