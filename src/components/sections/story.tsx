
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Shield, Target, Flag } from "lucide-react";

export function Story() {
  const storyImg = PlaceHolderImages.find(img => img.id === "story-main");

  return (
    <section id="story" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Intel / Background</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-stencil font-normal leading-none uppercase">
              THE <span className="text-primary">STORY</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg font-light leading-relaxed border-l-2 border-primary/40 pl-6 italic">
                FAU-G Domination, a specialized unit established by the government to combat national threats. It operates with discretion, harnessing unique skills to effectively neutralize enemies. Under the leadership of Dhillon, this select group of mercenaries has been meticulously chosen from across the nation. With unwavering focus and fearlessness, they prioritize citizen safety above all else.
              </p>
              
              <p className="text-foreground/60 text-base font-light leading-relaxed">
                As the city burned, a faint tremor stirred within FAU-G&apos;s headquarters. Dhillon&apos;s keen gaze swept the dimly lit room as urgent chatter filled the air. A coded message had arrived, signalling an imminent threat. With practiced efficiency, the team sprang into action, with purpose and precision.
              </p>

              <p className="text-foreground/60 text-base font-light leading-relaxed">
                Their pursuit led them through a maze of narrow alleys and shadowy hideouts, where danger lurked at every turn. But FAU-G pressed on, fuelled by a shared determination to protect the innocent. As dawn broke on the horizon, a fierce confrontation followed. Yet, against all odds, FAU-G Dominated. In a pulse-pounding showdown, they engaged in a battle of wits and strength, their unity proving to be their greatest weapon.
              </p>
            </div>

            {/* Tactical Briefing Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-1">National Security</h4>
                  <p className="text-foreground/40 text-[10px] uppercase font-bold tracking-tighter">Elite Border Defense</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Precision Strikes</h4>
                  <p className="text-foreground/40 text-[10px] uppercase font-bold tracking-tighter">Counter-Insurgency</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Flag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Sovereignty</h4>
                  <p className="text-foreground/40 text-[10px] uppercase font-bold tracking-tighter">No Ground Lost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Visual */}
          <div className="relative group">
            <div className="absolute -inset-2 border border-primary/20 pointer-events-none group-hover:border-primary/40 transition-colors"></div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 shadow-2xl">
              {storyImg?.imageUrl && (
                <Image 
                  src={storyImg.imageUrl} 
                  alt="Tactical Terrain" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3]" 
                  data-ai-hint="military squad"
                />
              )}
              
              {/* Scanline Overlay Internal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Mission Briefing Label */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-primary tracking-widest uppercase">/ Sector 7 Briefing</div>
                  <div className="text-xl font-stencil text-white uppercase">Operation: Silent Sentry</div>
                </div>
                <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">Live Feed Active</div>
              </div>
            </div>
            
            {/* Corner Decor */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-primary/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
