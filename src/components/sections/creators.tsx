
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const CREATORS = [
  { 
    name: "FAUG VEER", 
    handle: "@faugveer",
    followers: "4.5M", 
    desc: "Elite vanguard operative. Dedicated tactical combat strategist and official partner.",
    img: "creator-scout",
    youtube: "https://youtube.com/@faugveer?si=75LGTpuh4Y1h4y3N",
    instagram: "https://www.instagram.com/faug_veer_official?igsh=MXhtY3VoZDE2d21ldw=="
  },
  { 
    name: "Chaplin arena", 
    handle: "@chaplinarena",
    followers: "7.2M", 
    desc: "Premier battleground strategist. Known for high-stakes arena dominance and expertise.",
    img: "creator-chaplin",
    youtube: "https://youtube.com/@chaplin-arena?si=-_xktEkJlUcgoBVv",
    instagram: "https://www.instagram.com/dilip23sh?igsh=MWtoMjIxeWg2YnpxOQ=="
  }
];

export function Creators() {
  return (
    <section id="creators" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-stencil font-normal mb-6 leading-none">
            OFFICIAL CONTENT <br />
            <span className="text-primary">CREATORS</span>
          </h2>
          <p className="text-foreground/50 text-lg font-light tracking-wide max-w-3xl">
            India's biggest gaming voices — partnered, certified, and on the frontline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          {CREATORS.map((creator, i) => {
            const img = PlaceHolderImages.find(p => p.id === creator.img);
            return (
              <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 flex flex-col h-full transition-all duration-300 hover:border-primary/20">
                <div className="relative aspect-square w-full overflow-hidden">
                  {img?.imageUrl && (
                    <Image 
                      src={img.imageUrl} 
                      alt={creator.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                      data-ai-hint="gaming creator" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{creator.handle}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">{creator.name}</h3>
                  <p className="text-foreground/50 text-[10px] leading-relaxed mb-6 font-light h-10 line-clamp-2">
                    {creator.desc}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="w-8 h-8 rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all"
                      asChild
                    >
                      <a href={creator.youtube} target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="w-8 h-8 rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all"
                      asChild
                    >
                      <a href={creator.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
