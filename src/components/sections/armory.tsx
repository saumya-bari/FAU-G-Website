
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Map as MapIcon } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CHARACTERS = [
  { name: "DHILLON", role: "COMMANDER", img: "char-dhillon", specialImg: "char-dhillon-full" },
  { name: "KIRAN", role: "FIELD OPS", img: "char-kiran", specialImg: "char-kiran-full" },
  { name: "ADHIRA", role: "TACTICIAN", img: "char-adhira", specialImg: "char-adhira-full" },
  { name: "SAYA", role: "INFILTRATOR", img: "char-saya", specialImg: "char-saya-full" },
  { name: "VEGH", role: "SPEEDSTER", img: "char-vegh", specialImg: "char-vegh-full" },
  { name: "AGNI", role: "HEAVY SUPPORT", img: "char-agni", specialImg: "char-agni-full" },
  { name: "RAAZ", role: "INTELLIGENCE", img: "char-raaz", specialImg: "char-raaz-full" },
  { name: "VEESH", role: "CUNNING", img: "char-veesh", specialImg: "char-veesh-full" },
  { name: "MAZHALA", role: "TECHNICIAN", img: "char-mazhala", specialImg: "char-mazhala-full" },
  { name: "NIBIR", role: "STRENGTH", img: "char-nibir", specialImg: "char-nibir-full" }
];

const WEAPONS_DATA = {
  primary: {
    rifle: [
      { name: "AK-203", type: "ASSAULT RIFLE", desc: "High-damage Indo-Russian platform. Heavier kick, brutal stopping power.", damage: 33, accuracy: 71, range: 44, fireRate: 53, mobility: 66, control: 50, img: "weapon-ak203" },
      { name: "GALIL", type: "ASSAULT RIFLE", desc: "Reliable combat rifle with exceptional control and versatility.", damage: 29, accuracy: 56, range: 52, fireRate: 74, mobility: 79, control: 44, img: "weapon-galil" },
      { name: "TAVOR", type: "BULLPUP RIFLE", desc: "Compact bullpup design offering high mobility and rapid target acquisition.", damage: 28, accuracy: 66, range: 22, fireRate: 14, mobility: 47, control: 89, img: "weapon-tavor" },
      { name: "M4A4", type: "ASSAULT RIFLE", desc: "The gold standard for tactical precision and suppressive capability.", damage: 24, accuracy: 79, range: 62, fireRate: 72, mobility: 76, control: 58, img: "weapon-m4a4" },
      { name: "AK-47", type: "ASSAULT RIFLE", desc: "Iconic power. Unmatched stopping power for those who can tame the recoil.", damage: 34, accuracy: 62, range: 53, fireRate: 56, mobility: 78, control: 44, img: "weapon-ak47" },
      { name: "M4A1", type: "ASSAULT RIFLE", desc: "Stealth and stability. Integrated suppressor for covert operations.", damage: 28, accuracy: 82, range: 61, fireRate: 47, mobility: 84, control: 71, img: "weapon-m4a1" }
    ],
    smg: [
      { name: "MP9", type: "SMG", desc: "High rate of fire submachine gun, perfect for rapid room clearing.", damage: 24, accuracy: 60, range: 47, fireRate: 86, mobility: 93, control: 41, img: "weapon-mp9" },
      { name: "MAC 10", type: "SMG", desc: "Classic rapid-fire SMG with significant recoil but lethal close-range DPS.", damage: 28, accuracy: 43, range: 42, fireRate: 91, mobility: 85, control: 31, img: "weapon-mac10" },
      { name: "UMP 45", type: "SMG", desc: "Versatile SMG offering a balance between stopping power and control.", damage: 37, accuracy: 53, range: 47, fireRate: 62, mobility: 78, control: 62, img: "weapon-ump45" },
      { name: "PP BIZON", type: "SMG", desc: "High-capacity magazine for sustained suppressive fire in close quarters.", damage: 32, accuracy: 58, range: 51, fireRate: 62, mobility: 89, control: 65, img: "weapon-ppbizon" },
      { name: "MP5", type: "SMG", desc: "The tactical standard. Exceptional stability and reliability.", damage: 35, accuracy: 48, range: 42, fireRate: 72, mobility: 87, control: 50, img: "weapon-mp5" },
      { name: "MP7", type: "SMG", desc: "Modern, compact, and extremely fast. Ideal for high-mobility roles.", damage: 33, accuracy: 38, range: 42, fireRate: 91, mobility: 83, control: 33, img: "weapon-mp7" },
      { name: "P 90", type: "SMG", desc: "Unique bullpup design with a massive 50-round magazine and armor-piercing capabilities.", damage: 31, accuracy: 45, range: 51, fireRate: 82, mobility: 94, control: 47, img: "weapon-p90" }
    ],
    heavy: [
      { name: "SAWED OFF", type: "SHOTGUN", desc: "Extreme lethality at point-blank range. Compact enough for rapid deployment.", damage: 94, accuracy: 52, range: 33, fireRate: 35, mobility: 87, control: 42, img: "weapon-sawedoff" },
      { name: "MAG-7", type: "SHOTGUN", desc: "Powerful pump-action with a detachable magazine for faster tactical reloads.", damage: 96, accuracy: 54, range: 37, fireRate: 22, mobility: 73, control: 35, img: "weapon-mag7" },
      { name: "XM1014", type: "SHOTGUN", desc: "Automatic shotgun delivering a continuous barrage of suppressive fire.", damage: 91, accuracy: 62, range: 34, fireRate: 29, mobility: 80, control: 39, img: "weapon-xm1014" },
      { name: "NOVA", type: "SHOTGUN", desc: "Long-range pump shotgun. Reliable accuracy and devastating mid-close impact.", damage: 88, accuracy: 44, range: 37, fireRate: 28, mobility: 73, control: 35, img: "weapon-nova" },
      { name: "RPD", type: "LMG", desc: "High-capacity heavy machine gun for area denial and long-range suppression.", damage: 32, accuracy: 61, range: 57, fireRate: 60, mobility: 49, control: 45, img: "weapon-rpd" },
      { name: "NEGEV", type: "LMG", desc: "Brutal fire rate. Once it stabilizes, it offers unmatched suppressive capability.", damage: 28, accuracy: 53, range: 41, fireRate: 77, mobility: 50, control: 56, img: "weapon-negev" }
    ],
    sniper: [
      { name: "SSG-SCOUT", type: "SNIPER RIFLE", desc: "Lightweight and highly mobile bolt-action sniper rifle.", damage: 89, accuracy: 68, range: 89, fireRate: 32, mobility: 34, control: 33, img: "weapon-ssgscout" },
      { name: "AWP", type: "SNIPER RIFLE", desc: "The ultimate high-risk, high-reward sniper. One shot, one kill.", damage: 98, accuracy: 86, range: 67, fireRate: 43, mobility: 32, control: 28, img: "weapon-awp" },
      { name: "DRGUNOV-SCO", type: "SNIPER RIFLE", desc: "Semi-automatic sniper rifle providing rapid follow-up shots.", damage: 89, accuracy: 55, range: 92, fireRate: 33, mobility: 43, control: 35, img: "weapon-dragunov" },
      { name: "SCAR-20", type: "SNIPER RIFLE", desc: "Auto-sniper rifle with high precision and fire rate.", damage: 85, accuracy: 66, range: 92, fireRate: 32, mobility: 31, control: 60, img: "weapon-scar20" }
    ]
  },
  secondary: [
    { name: "GLOCK 18", type: "SIDEARM", desc: "Reliable semi-auto sidearm with high fire rate.", damage: 42, accuracy: 74, range: 38, fireRate: 33, mobility: 89, control: 79, img: "weapon-glock18" },
    { name: "BERETTA", type: "SIDEARM", desc: "Dual-action precision pistol with high capacity.", damage: 35, accuracy: 66, range: 42, fireRate: 52, mobility: 93, control: 28, img: "weapon-beretta" },
    { name: "P250", type: "SIDEARM", desc: "Versatile sidearm with high stopping power.", damage: 61, accuracy: 47, range: 45, fireRate: 61, mobility: 94, control: 58, img: "weapon-p250" },
    { name: "TEC 9", type: "SIDEARM", desc: "Rapid-fire semi-auto with high capacity.", damage: 28, accuracy: 72, range: 38, fireRate: 65, mobility: 83, control: 32, img: "weapon-tec9" },
    { name: "CZ 75 AUTO", type: "SIDEARM", desc: "Fully automatic pistol for close encounters.", damage: 42, accuracy: 62, range: 43, fireRate: 77, mobility: 92, control: 42, img: "weapon-cz75" },
    { name: "USP-S", type: "SIDEARM", desc: "Suppressed precision sidearm for stealth.", damage: 44, accuracy: 66, range: 51, fireRate: 52, mobility: 83, control: 38, img: "weapon-usps" },
    { name: "DESERT EAGLE", type: "SIDEARM", desc: "Iconic high-caliber pistol with immense power.", damage: 73, accuracy: 91, range: 52, fireRate: 42, mobility: 83, control: 71, img: "weapon-deagle" }
  ],
  melee: [
    { name: "BOOT", type: "MELEE", desc: "Standard issue tactical footwear.", img: "melee-boot" },
    { name: "KA BAR", type: "MELEE", desc: "Legendary combat knife, reliable and lethal.", img: "melee-kabar" },
    { name: "RAMBO", type: "MELEE", desc: "Heavy-duty survival knife for extreme conditions.", img: "melee-rambo" },
    { name: "SKELETON", type: "MELEE", desc: "Minimalist throwing knife for precision.", img: "melee-skeleton" },
    { name: "TACTICAL KNIFE", type: "MELEE", desc: "Modern combat blade balanced for speed.", img: "melee-tactical" },
    { name: "M9-BAYONET", type: "MELEE", desc: "Classic frontline bayonet with serrated spine.", img: "melee-m9" },
    { name: "COMMANDO", type: "MELEE", desc: "Professional field knife for elite units.", img: "melee-commando" },
    { name: "HUNTSMAN", type: "MELEE", desc: "Large tactical knife for utility and combat.", img: "melee-huntsman" },
    { name: "KUKRI", type: "MELEE", desc: "Traditional curved blade with unmatched power.", img: "melee-kukri" },
    { name: "BUTTERFLY", type: "MELEE", desc: "Folding knife for high-skill combatants.", img: "melee-butterfly" },
    { name: "KARAMBIT", type: "MELEE", desc: "Talon-like blade for rapid strikes.", img: "melee-karambit" }
  ]
};

const THROWABLES = [
  { name: "Frag Grenade", type: "Lethal", desc: "High-explosive anti-personnel fragmentation grenade. Essential for clearing clusters of hostiles.", img: "throw-frag" },
  { name: "Flash Grenade", type: "Tactical", desc: "High-intensity flash and bang to disorient and blind enemies. Critical for aggressive room entry.", img: "throw-flash" },
  { name: "Smoke Grenade", type: "Tactical", desc: "Creates a dense visual barrier. Ideal for concealing movement or providing cover for squad maneuvers.", img: "throw-smoke" },
  { name: "Molotov", type: "Lethal", desc: "Incendiary device that creates a zone of area-denial fire. Flushes out entrenched enemies.", img: "throw-molotov" }
];

const MAPS = [
  { name: "SINGO LANE", type: "URBAN", size: "MEDIUM", img: "map-singo-lane" },
  { name: "SURANG", type: "TACTICAL", size: "SMALL", img: "map-surang" },
  { name: "GODI", type: "INDUSTRIAL", size: "MEDIUM", img: "map-godi" },
  { name: "BASTI", type: "RESIDENTIAL", size: "LARGE", img: "map-basti" },
  { name: "TIBBA", type: "DESERT", size: "LARGE", img: "map-tibba" }
];

function WeaponCard({ weapon }: { weapon: any }) {
  const img = PlaceHolderImages.find(p => p.id === weapon.img);
  
  const stats = [
    { label: "DAMAGE", value: weapon.damage },
    { label: "ACCURACY", value: weapon.accuracy },
    { label: "RANGE", value: weapon.range },
    { label: "FIRE RATE", value: weapon.fireRate },
    { label: "MOBILITY", value: weapon.mobility },
    { label: "CONTROL", value: weapon.control }
  ].filter(stat => stat.value !== undefined);

  return (
    <div className="bg-[#0a0a0a] border border-white/5 flex flex-col group transition-all duration-300 hover:border-primary/20 relative">
      <div className="relative aspect-video w-full overflow-hidden p-6 bg-black/40">
        {img?.imageUrl && (
          <Image 
            src={img.imageUrl} 
            alt={weapon.name} 
            fill 
            className="object-contain p-4 transition-all duration-500 group-hover:scale-110" 
          />
        )}
        <div className="absolute top-4 right-4">
          <div className="bg-primary px-3 py-1">
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{weapon.type}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold uppercase tracking-tight">{weapon.name}</h3>
        <p className="text-foreground/50 text-xs leading-relaxed line-clamp-2 h-8">
          {weapon.desc}
        </p>
        
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-bold text-foreground/40 uppercase tracking-widest">
                  <span>{stat.label}</span>
                  <span className="text-foreground/60">{stat.value}</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <div 
                    className="h-full bg-primary/60 transition-all duration-1000" 
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>
    </div>
  );
}

export function Armory() {
  return (
    <section id="armory" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">02 / Equipment Vault</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none">
            GAME <span className="text-primary uppercase">ARSENAL</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
            Soldiers, steel, and battlegrounds — engineered for tactical supremacy.
          </p>
        </div>

        <Tabs defaultValue="characters" className="w-full">
          <div className="flex justify-start mb-12 border-b border-white/10">
            <TabsList className="bg-transparent h-auto p-0 gap-10 rounded-none overflow-x-auto no-scrollbar">
              {["CHARACTERS", "WEAPONS", "THROWABLES", "MAPS"].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab.toLowerCase()} 
                  className="px-0 py-4 bg-transparent rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-bold uppercase tracking-widest text-[11px] text-muted-foreground/60 transition-all"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="characters">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {CHARACTERS.map((char, i) => {
                  const img = PlaceHolderImages.find(p => p.id === char.img);
                  const specialImg = char.specialImg ? PlaceHolderImages.find(p => p.id === char.specialImg) : null;

                  return (
                    <CarouselItem key={i} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/5">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="group h-full cursor-pointer">
                            <div className="relative bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-primary/40">
                              <div className="aspect-[4/5] relative w-full overflow-hidden bg-black/20 p-4 flex items-center justify-center">
                                {img?.imageUrl && (
                                  <div className="relative w-full h-full">
                                    <Image 
                                      src={img.imageUrl} 
                                      alt={char.name} 
                                      fill 
                                      className="transition-all duration-700 group-hover:scale-105 object-contain"
                                      priority={i < 5}
                                    />
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
                                
                                <div className="absolute top-4 left-4 z-20">
                                  <div className="bg-black/80 backdrop-blur-md border border-primary/40 px-3 py-1.5 shadow-xl">
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">{char.role}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-6 bg-black border-t border-white/5 flex-1 relative z-10">
                                <h3 className="text-xl font-stencil font-normal text-white group-hover:text-primary transition-colors duration-300">
                                  {char.name}
                                </h3>
                              </div>

                              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[1000px] w-[95vw] bg-black/95 border-primary/20 p-0 overflow-hidden sm:rounded-none">
                          <DialogTitle className="sr-only">{char.name} Profile</DialogTitle>
                          <DialogDescription className="sr-only">Detailed field operative intelligence for {char.name}.</DialogDescription>
                          <div className="relative h-[85vh] w-full bg-black flex items-center justify-center p-4">
                            {(specialImg?.imageUrl || img?.imageUrl) ? (
                              <Image 
                                src={specialImg?.imageUrl || img!.imageUrl} 
                                alt={`${char.name} Full Profile`} 
                                fill 
                                className="object-contain p-2 md:p-8" 
                                priority
                              />
                            ) : null}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none h-1/3 bottom-0 top-auto"></div>
                            <div className="absolute bottom-8 left-8 right-8 space-y-2 z-10">
                              <Badge className="bg-primary text-white rounded-none border-none text-[10px] tracking-[0.2em] font-bold">OPERATIVE STATUS: DEPLOYED</Badge>
                              <h2 className="text-5xl md:text-6xl font-stencil text-white leading-none">{char.name}</h2>
                              <p className="text-primary font-bold text-xs tracking-widest uppercase">{char.role}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-end gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 rounded-none bg-white/5 border-white/10 hover:bg-primary/20 hover:text-primary transition-all w-10 h-10" />
                <CarouselNext className="static translate-y-0 rounded-none bg-white/5 border-white/10 hover:bg-primary/20 hover:text-primary transition-all w-10 h-10" />
              </div>
            </Carousel>
          </TabsContent>

          <TabsContent value="weapons">
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="bg-white/5 p-1 mb-8 rounded-none border border-white/10 h-auto gap-1">
                <TabsTrigger 
                  value="primary" 
                  className="px-8 py-2 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[10px] tracking-widest uppercase"
                >
                  PRIMARY
                </TabsTrigger>
                <TabsTrigger 
                  value="secondary" 
                  className="px-8 py-2 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[10px] tracking-widest uppercase"
                >
                  SECONDARY
                </TabsTrigger>
                <TabsTrigger 
                  value="melee" 
                  className="px-8 py-2 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[10px] tracking-widest uppercase"
                >
                  MELEE
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary">
                <Tabs defaultValue="rifle" className="w-full">
                  <TabsList className="bg-transparent p-0 mb-8 border-b border-white/5 h-auto gap-8 justify-start overflow-x-auto no-scrollbar">
                    {["RIFLE", "SMG", "HEAVY", "SNIPER"].map((type) => (
                      <TabsTrigger 
                        key={type}
                        value={type.toLowerCase()} 
                        className="px-0 py-3 rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-bold text-[9px] tracking-widest uppercase whitespace-nowrap"
                      >
                        {type}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value="rifle" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WEAPONS_DATA.primary.rifle.map((w, i) => <WeaponCard key={i} weapon={w} />)}
                  </TabsContent>
                  <TabsContent value="smg" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WEAPONS_DATA.primary.smg.map((w, i) => <WeaponCard key={i} weapon={w} />)}
                  </TabsContent>
                  <TabsContent value="heavy" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WEAPONS_DATA.primary.heavy.map((w, i) => <WeaponCard key={i} weapon={w} />)}
                  </TabsContent>
                  <TabsContent value="sniper" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WEAPONS_DATA.primary.sniper.map((w, i) => <WeaponCard key={i} weapon={w} />)}
                  </TabsContent>
                </Tabs>
              </TabsContent>

              <TabsContent value="secondary" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEAPONS_DATA.secondary.map((w, i) => <WeaponCard key={i} weapon={w} />)}
              </TabsContent>

              <TabsContent value="melee" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEAPONS_DATA.melee.map((w, i) => <WeaponCard key={i} weapon={w} />)}
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="throwables" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THROWABLES.map((item, i) => {
              const img = PlaceHolderImages.find(p => p.id === item.img);
              return (
                <div key={i} className="group flex flex-col md:flex-row bg-[#0a0a0a] border border-white/5 transition-all hover:border-primary/20 relative">
                  <div className="w-full md:w-1/3 aspect-square relative overflow-hidden bg-black/40 p-6 flex items-center justify-center">
                    {img?.imageUrl && (
                      <Image src={img.imageUrl} alt={item.name} fill className="object-contain p-4 transition-all duration-500 group-hover:scale-110" />
                    )}
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-stencil font-normal">{item.name}</h3>
                      <Badge variant="outline" className="text-accent border-accent rounded-none uppercase text-[8px] tracking-widest">{item.type}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary transition-colors"></div>
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="maps" className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {MAPS.map((map, i) => {
              const img = PlaceHolderImages.find(p => p.id === map.img);
              return (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden h-[300px] cursor-pointer">
                      {img?.imageUrl && (
                        <Image src={img.imageUrl} alt={map.name} fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                      <div className="absolute inset-y-0 left-0 p-10 flex flex-col justify-center">
                        <MapIcon className="text-primary w-8 h-8 mb-4 opacity-50" />
                        <h3 className="text-4xl font-stencil font-normal mb-4">{map.name}</h3>
                        <div className="flex gap-3">
                          <Badge className="bg-white/10 text-white rounded-none border-none text-[8px] tracking-widest">{map.type}</Badge>
                          <Badge className="bg-white/10 text-white rounded-none border-none text-[8px] tracking-widest">{map.size}</Badge>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[1200px] w-[95vw] bg-black/95 border-primary/20 p-0 overflow-hidden sm:rounded-none">
                    <DialogTitle className="sr-only">{map.name} Tactical Intel</DialogTitle>
                    <DialogDescription className="sr-only">Detailed terrain analysis for {map.name}.</DialogDescription>
                    <div className="relative h-[80vh] w-full bg-black flex items-center justify-center p-4">
                      {img?.imageUrl && (
                        <Image 
                          src={img.imageUrl} 
                          alt={`${map.name} Full Visual`} 
                          fill 
                          className="object-contain p-2 md:p-4" 
                          priority
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none h-1/4 bottom-0 top-auto"></div>
                      <div className="absolute bottom-8 left-8 right-8 space-y-2 z-10">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-6 h-[2px] bg-primary"></div>
                           <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Map Intelligence</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-stencil text-white leading-none">{map.name}</h2>
                        <div className="flex gap-4">
                           <p className="text-primary font-bold text-xs tracking-widest uppercase">TYPE: {map.type}</p>
                           <p className="text-primary font-bold text-xs tracking-widest uppercase">SIZE: {map.size}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
