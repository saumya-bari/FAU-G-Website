"use client";

import { Trophy, Medal, Star, Award, Target, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const LEAGUES = {
  TITAN: [
    { name: "MatrixOG", prize: "12L" },
    { name: "ANiKET0P", prize: "8L" },
    { name: "Shivam|Faug", prize: "5.6L" },
    { name: "adnan_", prize: "10k" },
    { name: "INS_VIKRANT20", prize: "10k" },
    { name: "CHOCOLATY", prize: "10k" },
    { name: "BladeGaming", prize: "10k" },
    { name: "FameX21", prize: "10k" },
    { name: "ROLEX", prize: "10k" },
    { name: "RealChampYT", prize: "10k" }
  ],
  PLATINUM: [
    { name: "reveryn", prize: "4.4L" },
    { name: "GAMING KRISH", prize: "3.2L" },
    { name: "XD-RAAVAN-YT", prize: "2L" },
    { name: "MîKeY", prize: "7K" },
    { name: "HIDDEN", prize: "7K" },
    { name: "RonzeKOp", prize: "7K" },
    { name: "Playero7Gaming", prize: "7K" },
    { name: "0pSATVIK", prize: "7K" },
    { name: "TRG•AMAN69", prize: "7K" },
    { name: "nabeel_", prize: "7K" }
  ],
  GOLD: [
    { name: "IGOR_FTW", prize: "1.6L" },
    { name: "Aghori88", prize: "1.2L" },
    { name: "NINJA IS LIVE", prize: "80K" },
    { name: "IG Pranav DragonFury 11", prize: "7K" },
    { name: "TRG•ARMAAN7", prize: "7K" },
    { name: "WBXSHAN", prize: "7K" },
    { name: "Noprob27", prize: "7K" },
    { name: "Aryanpriyadarshi", prize: "7K" },
    { name: "FGGamingYt", prize: "7K" },
    { name: "SAUMYA BARI", prize: "7K" }
  ]
};

const ACHIEVEMENTS = [
  {
    id: "fbl-1",
    title: "FBL SEASON 1",
    subtitle: "FAU-G BHARAT LEAGUE",
    description: "The premier national league establishing the foundation for indigenous tactical esports.",
    icon: <Trophy className="w-8 h-8 text-primary" />,
    tag: "ESPORTS",
    isInteractive: true
  },
  {
    id: "gamingcon-2025",
    title: "GAMINGCON 2025",
    subtitle: "PREMIER EVENT",
    description: "Main-stage showcase of FAU-G Domination to thousands of live tactical enthusiasts.",
    icon: <Star className="w-8 h-8 text-primary" />,
    tag: "EVENT",
    isInteractive: true
  },
  {
    id: "fbl-2",
    title: "FBL 2.0 LAN",
    subtitle: "CHAMPIONSHIP FINALS",
    description: "The high-stakes LAN conclusion of Bharat League 2.0, crowning national champions.",
    icon: <Award className="w-8 h-8 text-primary" />,
    tag: "TOURNAMENT",
    isInteractive: true
  }
];

export function Achievements() {
  const fbl2Img = PlaceHolderImages.find(img => img.id === "fbl-championship");
  const fbl1Img1 = PlaceHolderImages.find(img => img.id === "fbl1-img1");
  const fbl1Img2 = PlaceHolderImages.find(img => img.id === "fbl1-img2");
  const fbl1Img3 = PlaceHolderImages.find(img => img.id === "fbl1-img3");
  const gamingconImg = PlaceHolderImages.find(img => img.id === "event-gamingcon");

  return (
    <section id="achievements" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">05 / Medal of Honor</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none">
            OPERATIONAL <span className="text-primary">ACHIEVEMENTS</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
            The record of our dominance. Milestones forged in the heat of battle and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achieve, i) => (
            <div key={i} className="h-full">
              {achieve.isInteractive ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 flex flex-col h-full transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.04] cursor-pointer shadow-2xl">
                      <AchievementCardContent achieve={achieve} />
                      <div className="absolute top-4 right-4 animate-pulse">
                        <Badge className="bg-primary text-white text-[8px] rounded-none px-2 font-bold tracking-widest">INTEL AVAILABLE</Badge>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[1200px] w-[95vw] bg-black border-primary/20 p-0 overflow-hidden sm:rounded-none">
                    <DialogTitle className="sr-only">{achieve.title}</DialogTitle>
                    <DialogDescription className="sr-only">{achieve.description}</DialogDescription>
                    {achieve.id === "fbl-2" && (
                      <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                        <div className="relative aspect-video w-full border-b border-white/10">
                          {fbl2Img?.imageUrl && (
                            <Image 
                              src={fbl2Img.imageUrl} 
                              alt="FBL 2.0 Championship" 
                              fill 
                              className="object-cover" 
                              priority
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                          <div className="absolute bottom-10 left-10 right-10">
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-8 h-[2px] bg-primary"></div>
                               <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Tournament Intelligence</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-stencil text-white leading-none mb-2">FBL 2.0 <span className="text-primary">LAN</span></h2>
                            <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs">National Championship Elite Ranking</p>
                          </div>
                        </div>

                        <div className="p-10 bg-[#050505]">
                          <Tabs defaultValue="titan" className="w-full">
                            <div className="flex justify-between items-center mb-10 border-b border-white/5">
                              <TabsList className="bg-transparent h-auto p-0 gap-8 rounded-none">
                                {["TITAN", "PLATINUM", "GOLD"].map((league) => (
                                  <TabsTrigger 
                                    key={league}
                                    value={league.toLowerCase()} 
                                    className="px-0 py-4 bg-transparent rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-bold uppercase tracking-[0.3em] text-[12px] text-white/40"
                                  >
                                    {league} LEAGUE
                                  </TabsTrigger>
                                ))}
                              </TabsList>
                              <Badge variant="outline" className="border-primary/40 text-primary hidden md:flex rounded-none text-[10px] tracking-widest font-bold">OPERATIONAL STATUS: COMPLETE</Badge>
                            </div>

                            {Object.entries(LEAGUES).map(([key, teams]) => (
                              <TabsContent key={key} value={key.toLowerCase()} className="mt-0">
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                   {teams.map((item, idx) => {
                                     const rank = idx + 1;
                                     const isTop3 = rank <= 3;
                                     const rankColor = rank === 1 ? "text-[#FFD700]" : rank === 2 ? "text-[#C0C0C0]" : rank === 3 ? "text-[#CD7F32]" : "text-primary/40";
                                     
                                     return (
                                       <div key={idx} className={cn(
                                         "bg-white/5 border p-4 group transition-all duration-300 hover:scale-[1.02]",
                                         isTop3 ? "border-primary/30 bg-primary/5" : "border-white/5 hover:border-primary/40"
                                       )}>
                                          <div className="flex flex-col gap-3">
                                            <div className="flex items-center justify-between">
                                              <span className={cn("text-xs font-mono font-black tracking-tighter", rankColor)}>
                                                #{String(rank).padStart(2, '0')}
                                              </span>
                                              {isTop3 && (
                                                <Medal className={cn("w-3 h-3", rankColor)} />
                                              )}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                              <div className="flex items-center gap-1.5">
                                                <span className={cn(
                                                  "text-[10px] font-bold tracking-tight px-1.5 py-0.5 bg-primary/10 border border-primary/20",
                                                  isTop3 ? "text-primary" : "text-primary/60"
                                                )}>
                                                  {item.prize}
                                                </span>
                                                <span className={cn(
                                                  "text-[11px] font-bold uppercase tracking-tight transition-colors truncate",
                                                  isTop3 ? "text-white" : "text-white/80 group-hover:text-primary"
                                                )}>
                                                  {item.name}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                       </div>
                                     );
                                   })}
                                 </div>
                              </TabsContent>
                            ))}
                          </Tabs>

                          <div className="mt-12 flex justify-center">
                            <Button 
                              variant="outline" 
                              className="border-primary/20 hover:border-primary text-primary/60 hover:text-primary rounded-none px-12 h-12 font-bold uppercase tracking-[0.3em] text-[10px] bg-transparent hover:bg-transparent transition-all"
                              asChild
                            >
                              <a 
                                href="https://in.ign.com/fau-g-domination/257661/news/fau-g-bharat-league-20-finals-conclude-the-game-becomes-the-first-made-in-india-title-to-host-an-on" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 w-3 h-3" /> SOURCE
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {achieve.id === "fbl-1" && (
                      <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                        <div className="p-10 border-b border-white/5">
                           <div className="flex items-center gap-3 mb-4">
                               <div className="w-8 h-[2px] bg-primary"></div>
                               <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Historical Intelligence</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-stencil text-white leading-none mb-2">FBL SEASON <span className="text-primary">1</span></h2>
                            <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs">The Foundation of Indigenous Esports</p>
                        </div>

                        <div className="p-10 bg-[#050505]">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                              {[fbl1Img1, fbl1Img2, fbl1Img3].map((img, idx) => (
                                <div key={idx} className="relative aspect-square border border-white/10 group overflow-hidden bg-black/40">
                                  {img?.imageUrl && (
                                    <Image 
                                      src={img.imageUrl} 
                                      alt={`FBL Season 1 Visual ${idx + 1}`} 
                                      fill 
                                      className="object-contain transition-all duration-500"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                                </div>
                              ))}
                           </div>

                           <div className="flex justify-center">
                            <Button 
                                variant="outline" 
                                className="border-primary/20 hover:border-primary text-primary/60 hover:text-primary rounded-none px-12 h-12 font-bold uppercase tracking-[0.3em] text-[10px] bg-transparent hover:bg-transparent transition-all"
                                asChild
                              >
                                <a 
                                  href="https://x.com/FAUGDomination/status/1976259746916179973?s=20" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="mr-2 w-3 h-3" /> SOURCE
                                </a>
                              </Button>
                           </div>
                        </div>
                      </div>
                    )}

                    {achieve.id === "gamingcon-2025" && (
                      <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                        <div className="p-10 border-b border-white/5">
                           <div className="flex items-center gap-3 mb-4">
                               <div className="w-8 h-[2px] bg-primary"></div>
                               <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Event Intelligence</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-stencil text-white leading-none mb-2">GAMINGCON <span className="text-primary">2025</span></h2>
                            <p className="text-white/60 font-bold tracking-[0.2em] uppercase text-xs">Premier Tactical Showcase</p>
                        </div>

                        <div className="p-10 bg-[#050505]">
                           <div className="max-w-4xl mx-auto mb-12">
                              <div className="relative aspect-video border border-white/10 group overflow-hidden bg-black/40">
                                {gamingconImg?.imageUrl && (
                                  <Image 
                                    src={gamingconImg.imageUrl} 
                                    alt="GamingCon 2025 Highlight" 
                                    fill 
                                    className="object-contain transition-all duration-500"
                                  />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                              </div>
                           </div>

                           <div className="flex justify-center">
                            <Button 
                                variant="outline" 
                                className="border-primary/20 hover:border-primary text-primary/60 hover:text-primary rounded-none px-12 h-12 font-bold uppercase tracking-[0.3em] text-[10px] bg-transparent hover:bg-transparent transition-all"
                                asChild
                              >
                                <a 
                                  href="https://x.com/FAUGDomination/status/1995176684346294526?s=20" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="mr-2 w-3 h-3" /> SOURCE
                                </a>
                              </Button>
                           </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 flex flex-col h-full transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.02]">
                  <AchievementCardContent achieve={achieve} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCardContent({ achieve }: { achieve: any }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/20 group-hover:border-primary transition-colors"></div>
      
      <div className="mb-8 p-4 bg-white/5 w-fit border border-white/10 group-hover:border-primary/40 transition-colors">
        {achieve.icon}
      </div>

      <div className="flex-1 space-y-4">
        <Badge variant="outline" className="border-primary/20 text-primary/60 rounded-none text-[8px] tracking-widest font-bold">
          {achieve.tag}
        </Badge>
        <div>
          <h3 className="text-3xl font-stencil text-white mb-1 group-hover:text-primary transition-colors">
            {achieve.title}
          </h3>
          <p className="text-primary font-bold text-[10px] uppercase tracking-widest">
            {achieve.subtitle}
          </p>
        </div>
        <p className="text-foreground/40 text-xs leading-relaxed font-light">
          {achieve.description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center opacity-30">
        <div className="text-[8px] font-mono tracking-tighter uppercase">Verified Milestone</div>
        <div className="flex gap-1">
          {[1, 2, 3].map(dot => (
            <div key={dot} className="w-1 h-1 bg-primary/40"></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>
    </>
  );
}
