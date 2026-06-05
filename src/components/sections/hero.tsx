"use client";

import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-video-bg");

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-20">
      {/* Cinematic Background Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black overflow-hidden">
          {heroImg?.imageUrl && (
            <Image
              src={heroImg.imageUrl}
              alt="Tactical Background"
              fill
              className="object-cover opacity-40 scale-105"
              priority
              data-ai-hint="military soldier"
            />
          )}
        </div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        
        {/* Tactical HUD Corners */}
        <div className="absolute top-10 left-10 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-primary/30 pointer-events-none opacity-20"></div>
        <div className="absolute top-10 right-10 w-8 md:w-12 h-8 md:h-12 border-t-2 border-r-2 border-primary/30 pointer-events-none opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full h-full flex flex-col justify-center py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-primary font-bold text-[8px] md:text-[9px] uppercase tracking-[0.3em] mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              INDIA'S TACTICAL FPS
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[0.85] font-stencil text-white uppercase">
                FAU-G
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[0.85] font-stencil text-primary uppercase">
                DOMINATION
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg font-light mx-auto lg:mx-0">
              Step into the boots of India's bravest. A made-in-India 5v5 tactical shooter forged on real terrain, real soldiers, and zero compromises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 md:px-12 h-14 md:h-16 font-black uppercase tracking-widest text-xs md:text-sm btn-slanted group w-full sm:w-auto cursor-pointer">
                <a href="https://youtu.be/jMdh-wfqhkg?si=x1NK5pOMiDcmRH9T" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 w-4 h-4 fill-current" />
                  Watch Trailer
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-none px-10 md:px-12 h-14 md:h-16 border-white/20 bg-transparent hover:bg-white/5 text-primary font-black uppercase tracking-widest text-xs md:text-sm btn-slanted w-full sm:w-auto">
                <a href="#armory">Explore Arsenal</a>
              </Button>
            </div>
          </div>

          {/* Right Video Preview Column - Enlarged */}
          <div className="relative group w-full max-w-[800px] lg:max-w-none mx-auto lg:ml-auto">
            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black shadow-2xl">
              {/* Tactical Video Player */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700"
              >
                <source src="https://res.cloudinary.com/dhc0phwyg/video/upload/v1779203064/FAU-G__Domination_Trailer_usaibi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Bottom Label and Decor */}
              <div className="absolute bottom-4 left-4">
                <span className="text-primary font-bold text-[9px] md:text-[10px] uppercase tracking-widest">/ OFFICIAL TRAILER</span>
              </div>
              
              {/* Hazard Stripes Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 hazard-stripes opacity-40"></div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-8 bg-primary/10 blur-[100px] -z-10 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 md:mt-24 pt-10 md:pt-16 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 max-w-3xl">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-stencil text-white">50M+</div>
            <div className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Downloads</div>
          </div>
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-stencil text-white">5v5</div>
            <div className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Tactical FPS</div>
          </div>
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-stencil text-white">₹1Cr</div>
            <div className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Prize Pool</div>
          </div>
        </div>
      </div>
    </section>
  );
}
