"use client";

import { Badge } from "@/components/ui/badge";

export function Team() {
  return (
    <section id="team" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">00 / Unit Profile</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none">
            THE <span className="text-primary">TEAM</span> <span className="text-lg md:text-xl font-normal uppercase text-foreground/40 block mt-4 md:inline md:mt-0"> (TEAM IS REFERRED AS GAME CHARACTERS)</span>
          </h2>
        </div>

        {/* Cinematic Team Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 transition-all duration-300 hover:border-primary/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40"></div>
            
            <div className="space-y-8 relative z-10">
              <p className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed italic border-l-4 border-primary/40 pl-8">
                In the heart of India, FAU-G Domination emerges to defend the nation against unseen threats. Led by Dhillon, a fearless general with a legacy of valor, FAU-G is born. From the shadowy villages of Tamil Nadu to the windswept peaks of Himachal Pradesh, a motley crew assembles, each member a master of their craft.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/60 text-base font-light leading-relaxed">
                <p>
                  With Dhillon&apos;s leadership, Saya&apos;s stealth, Vegh&apos;s speed, Agni&apos;s fire, Raaz&apos;s precision, Veesh&apos;s cunning, Mazhala&apos;s technology, Nibir&apos;s strength, and Adhira&apos;s finesse, FAU-G becomes an unstoppable force. But as they face their greatest challenge yet, they must not only battle external foes but also confront their own inner demons.
                </p>
                <p>
                  With duty as their compass and unity as their strength, the FAU-G dominate in a perilous journey to protect their homeland, their bonds tested as they fight against odds. Every character brings a unique tactical advantage, forged in the diverse terrains of the sub-continent.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
              {["DHILLON", "KIRAN", "ADHIRA", "SAYA", "VEGH", "AGNI", "RAAZ", "VEESH", "MAZHALA", "NIBIR"].map((name) => (
                <Badge key={name} variant="outline" className="border-primary/20 text-primary/60 rounded-none text-[9px] px-3 py-1 tracking-widest font-bold">
                  {name}
                </Badge>
              ))}
            </div>

            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
