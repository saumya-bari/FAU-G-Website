"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ALLIANCE_ENTITIES = [
  {
    id: "dot9",
    name: "Dot9 Games",
    role: "Developer",
    leader: "Deepak Ail (Co-Founder and CEO)",
    desc: "The specialized development studio under the nCore umbrella. They are responsible for building the game from the ground up. Their work includes programming, designing the maps, creating characters, and ensuring the game runs smoothly on mobile platforms.",
    leaderImg: "logo-dot9",
    logoImg: "logo-dot9-brand",
    linkedin: "https://www.linkedin.com/company/dot9-games/posts/?feedView=all"
  },
  {
    id: "ncore",
    name: "nCore Games",
    role: "Publisher / Co-creator",
    leader: "Vishal Gondal (Co-Founder)",
    desc: "The parent company and publisher founded by Vishal Gondal. They own the FAU-G franchise, oversee the overall creative direction, and manage the strategic vision—such as expanding the title into major esports leagues.",
    leaderImg: "ceo-vishal",
    logoImg: "logo-ncore",
    linkedin: "https://www.linkedin.com/company/ncore-games/posts/?feedView=all"
  },
  {
    id: "nazara",
    name: "Nazara Technologies",
    role: "Publisher",
    leader: "Nitish Mittersain (Joint MD & CEO)",
    desc: "India’s publicly traded gaming and esports giant. Through its division Nazara Publishing, they handle the business side of the game. This includes marketing, distributing the game, monetization, and localization to help reach the widest possible audience",
    leaderImg: "logo-nazara",
    logoImg: "logo-nazara-brand",
    linkedin: "https://www.linkedin.com/company/nazara-technologies/posts/?feedView=all"
  }
];

export function Intelligence() {
  const ambassadorImg = PlaceHolderImages.find(img => img.id === "ambassador-akshay");
  const vishalImg = PlaceHolderImages.find(img => img.id === "ceo-vishal");

  return (
    <section id="intelligence" className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
        backgroundSize: '100px 100px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Ambassador Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">03 / THE FACES</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-[0.9] flex flex-col">
            <span>AMBASSADOR &</span>
            <span className="text-primary uppercase">MENTOR</span>
          </h2>
        </div>

        {/* Profile Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          {/* Akshay Kumar Card */}
          <div className="flex flex-col md:flex-row bg-[#0a0a0a] border border-white/5 group transition-all duration-300 hover:border-white/10 overflow-hidden">
            <div className="w-full md:w-2/5 relative aspect-square md:aspect-auto h-full min-h-[300px]">
              {ambassadorImg?.imageUrl && (
                <Image 
                  src={ambassadorImg.imageUrl} 
                  alt="Akshay Kumar" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  data-ai-hint="actor portrait" 
                />
              )}
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.3em] mb-4">/ BRAND AMBASSADOR</span>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Akshay Kumar</h3>
              <p className="text-foreground/50 text-sm leading-relaxed mb-8 font-light">
                Bollywood action icon and patriotic film veteran. Helped conceptualise FAU-G as a tribute to Indian armed forces.
              </p>
              <div className="mt-auto">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest font-stencil">FAU-G DOMINATION</span>
              </div>
            </div>
          </div>

          {/* Vishal Gondal Card */}
          <div className="flex flex-col md:flex-row bg-[#0a0a0a] border border-white/5 group transition-all duration-300 hover:border-white/10 overflow-hidden">
            <div className="w-full md:w-2/5 relative aspect-square md:aspect-auto h-full min-h-[300px]">
              {vishalImg?.imageUrl && (
                <Image 
                  src={vishalImg.imageUrl} 
                  alt="Vishal Gondal" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  data-ai-hint="tech entrepreneur" 
                />
              )}
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.3em] mb-4">/ FOUNDER & MENTOR</span>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Vishal Gondal</h3>
              <p className="text-foreground/50 text-sm leading-relaxed mb-8 font-light">
                Serial entrepreneur and pioneer of the Indian gaming industry. The visionary behind nCore Games and the FAU-G ecosystem.
              </p>
              <div className="mt-auto">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest font-stencil">NCORE GAMES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company & Strategic Alliance Section */}
        <div id="partners" className="pt-24 border-t border-white/5 scroll-mt-20">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-primary"></div>
              <span className="text-primary font-bold text-[9px] uppercase tracking-[0.4em]">04 / THE ALLIANCE</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-6 leading-none uppercase">
              STRATEGIC <span className="text-primary">PARTNERS</span>
            </h2>
            <p className="text-foreground/60 text-lg font-light">
              The forces behind India's most ambitious tactical shooter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {ALLIANCE_ENTITIES.map((entity) => {
              const leaderImg = PlaceHolderImages.find(p => p.id === entity.leaderImg);
              const logoImg = PlaceHolderImages.find(p => p.id === entity.logoImg);
              
              return (
                <div key={entity.id} className="bg-[#0a0a0a] border border-white/5 p-8 relative group overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-primary/20">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/20"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex justify-between items-start">
                      {/* Leader Image Left */}
                      <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all border border-white/10 overflow-hidden">
                        {leaderImg?.imageUrl && (
                          <Image 
                            src={leaderImg.imageUrl} 
                            alt={entity.leader} 
                            fill 
                            className="object-cover" 
                          />
                        )}
                      </div>
                      {/* Company Logo Right */}
                      <div className="w-14 h-14 relative opacity-60 group-hover:opacity-100 transition-all">
                        {logoImg?.imageUrl && (
                          <Image 
                            src={logoImg.imageUrl} 
                            alt={`${entity.name} logo`} 
                            fill 
                            className="object-contain" 
                          />
                        )}
                      </div>
                    </div>

                    <Badge variant="outline" className="mb-4 border-primary/40 text-primary text-[8px] uppercase tracking-widest rounded-none w-fit">
                      {entity.role}
                    </Badge>
                    <h3 className="text-2xl font-stencil text-white mb-2">{entity.name}</h3>
                    <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-6">
                      {entity.leader}
                    </div>
                    <p className="text-foreground/40 text-xs leading-relaxed font-light mb-8">
                      {entity.desc}
                    </p>

                    <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-8 h-8 rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all"
                        asChild
                      >
                        <a href={entity.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
