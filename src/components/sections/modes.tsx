
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const MODES = [
  {
    id: "01",
    title: "TEAM DEATHMATCH",
    subtitle: "5V5 CLOSE-QUARTERS MAYHEM",
    description: "Two squads of five go head-to-head. First team to the kill cap dominates. Coordination is key to survival.",
    badge: "5V5",
    imgId: "mode-tdm"
  },
  {
    id: "02",
    title: "SNIPER ONLY",
    subtitle: "PRECISION. PATIENCE. POWER.",
    description: "Elite sharpshooters only. One shot, one kill in high-stakes long-range engagements across specialized terrain.",
    badge: "SNIPERS",
    imgId: "mode-sniper"
  },
  {
    id: "03",
    title: "WEAPON DOMINATION",
    subtitle: "MASTER THE ARSENAL",
    description: "A fast-paced rotation mode where players must prove their skill with every weapon class in the FAU-G armory.",
    badge: "ROTATING",
    imgId: "mode-weapon"
  },
  {
    id: "04",
    title: "KISS OF DEATH",
    subtitle: "ONE SHOT. ONE CHANCE.",
    description: "A high-stakes elimination mode where every move could be your last. Precision and timing are everything.",
    badge: "TACTICAL",
    imgId: "mode-kod"
  },
  {
    id: "05",
    title: "1V1 DOMINATION",
    subtitle: "PURE SKILL. NO BACKUP.",
    description: "Face off in intense one-on-one duels. A test of raw reflex, tactical positioning, and mastery of your chosen loadout.",
    badge: "SOLO",
    imgId: "mode-1v1"
  },
  {
    id: "06",
    title: "LONE WOLF",
    subtitle: "THE ULTIMATE SURVIVAL TEST",
    description: "Every operative for themselves. Navigate the battlefield, gather resources, and be the last one standing in this brutal free-for-all.",
    badge: "FFA",
    imgId: "mode-lonewolf"
  }
];

export function Modes() {
  return (
    <section id="modes" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">01 / Combat Doctrine</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none">
                GAME <span className="text-primary">MODES</span>
              </h2>
              <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
                Six distinct ways to dominate. Pick your battlefield, prove your squad's tactical superiority.
              </p>
            </div>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {MODES.map((mode) => {
              const img = PlaceHolderImages.find(p => p.id === mode.imgId);
              return (
                <CarouselItem key={mode.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-full">
                    {/* Tactical Card Border with Corners */}
                    <div className="relative bg-[#0a0a0a] border border-white/5 p-1 transition-all duration-300 group-hover:border-primary/20 h-full flex flex-col">
                      {/* Content Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden mb-8 bg-black">
                        {img?.imageUrl && (
                          <Image 
                            src={img.imageUrl} 
                            alt={mode.title} 
                            fill 
                            className="object-contain transition-transform duration-700 group-hover:scale-105" 
                            data-ai-hint={img.imageHint}
                          />
                        )}
                        
                        {/* Badge Overlay */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary/60"></div>
                          <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase">{mode.badge}</span>
                        </div>

                        {/* Mode Number Label */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-primary font-bold text-[10px] uppercase tracking-widest">/ MODE {mode.id}</span>
                        </div>
                      </div>

                      <div className="px-6 pb-10 flex-1 flex flex-col">
                        <h3 className="text-2xl font-stencil font-normal text-white mb-2 uppercase">
                          {mode.title}
                        </h3>
                        <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">
                          {mode.subtitle}
                        </p>
                        <p className="text-foreground/50 text-sm leading-relaxed font-light line-clamp-3">
                          {mode.description}
                        </p>
                      </div>

                      {/* Corner Accent Decor */}
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary transition-colors"></div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 rounded-none bg-white/5 border-white/10 hover:bg-primary/20 hover:text-primary transition-all w-12 h-12" />
            <CarouselNext className="static translate-y-0 rounded-none bg-white/5 border-white/10 hover:bg-primary/20 hover:text-primary transition-all w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
