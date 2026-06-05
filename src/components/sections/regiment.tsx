"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Regiment() {
  const regimentImg = PlaceHolderImages.find(img => img.id === "regiment-visual");

  return (
    <section id="regiment" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* HUD Accents */}
      <div className="absolute top-0 left-0 w-32 h-px bg-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">01.5 / Progression Hierarchy</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none uppercase">
              REGIMENT <span className="text-primary">SYSTEM <span className="text-sm md:text-lg align-middle opacity-50 ml-2 font-normal lowercase">[ rank ]</span></span>
            </h2>
            <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
              Ascend the ranks. From fresh recruit to national legend, your performance dictates your standing in the FAU-G global hierarchy.
            </p>
          </div>

          {/* Cinematic Rank Image */}
          <div className="relative group">
            <div className="absolute -inset-1 border border-primary/20 pointer-events-none group-hover:border-primary/40 transition-colors"></div>
            <div className="relative aspect-video w-full overflow-hidden bg-black/40 shadow-2xl">
              {regimentImg?.imageUrl && (
                <Image 
                  src={regimentImg.imageUrl} 
                  alt="Regiment System" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0" 
                  data-ai-hint="military rank"
                />
              )}
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-primary font-bold text-[8px] uppercase tracking-[0.3em]">/ Character Status: Classified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}