"use client";

import { Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-t border-white/5 pt-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-stencil text-3xl tracking-tight">FAU-G <span className="text-primary">DOMINATION</span></span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed font-light">
              Fearless and United: Guards. Join the elite ranks and defend the sovereign territories. The ultimate tactical experience developed in India for the global stage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-none font-bold uppercase tracking-[0.2em] text-[10px] btn-slanted flex items-center gap-3 transition-all group"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.dotnine.faug" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.89,12L16.81,15.12M4.97,2.15L15.42,8.19L14.12,12L4.97,2.15M15.42,15.81L4.97,21.85L14.12,12L15.42,15.81Z" />
                  </svg>
                  <span>Get it on Google Play</span>
                </a>
              </Button>

              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all" asChild>
                  <a href="https://www.youtube.com/@FAU-GDomination" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-white/10 hover:border-primary hover:text-primary hover:bg-transparent bg-transparent transition-all" asChild>
                  <a href="https://x.com/FAUGDomination" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-primary">
                WEBSITE DEVELOPED BY 𝐒𝐀𝐔𝐌𝐘𝐀 𝐁𝐀𝐑𝐈
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/60">
                MADE IN INDIA
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-stencil text-lg mb-6 tracking-widest text-primary">Intelligence</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              <li className="hover:text-primary transition-colors cursor-pointer">Operations Manual</li>
              <li className="hover:text-primary transition-colors cursor-pointer">E-Sports Protocol</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Official Assets</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Career Opportunities</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/50">
            © 2025 NCORE GAMES PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
