"use client";

import { publicationData } from "@/data/publications-data"; // Adjust path if needed
import Link from "next/link";

export default function PublicationTalks() {
  return (
    <div className="min-h-screen bg-[#f4f0ea] py-24 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Page Title */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0a1128] text-center mb-16 tracking-tight">
          Publications
        </h1>

        {/* Map through each section (e.g., Books, Journals) */}
        {publicationData.map((section) => (
          <section key={section.id} className="mb-16">
            
            {/* Section Subtitle */}
            <h2 className="text-2xl md:text-3xl font-serif text-[#0a1128] text-center mb-10">
              {section.title}
            </h2>

            {/* List of Publications */}
            <div className="space-y-8 text-base md:text-lg text-slate-800 font-serif leading-relaxed">
              {section.items.map((pub) => (
                <p 
                  key={pub.id} 
                  // pl-8 and -indent-8 create the academic "hanging indent"
                  className="pl-8 -indent-8" 
                >
                  {/* Authors and Year */}
                  <span>{pub.authors} {pub.year}. </span>
                  
                  {/* Title (Conditional Rendering for Link vs No Link) */}
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
                  
                  {/* Venue / Publisher */}
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