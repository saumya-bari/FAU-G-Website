"use client";

import { useState } from "react";
import { aiTacticalLoadoutRecommendation } from "@/ai/flows/ai-tactical-loadout-recommendation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, BrainCircuit, ShieldCheck, Sword, User } from "lucide-react";

export function LoadoutTool() {
  const [mapType, setMapType] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleRecommend = async () => {
    if (!mapType || !gameMode) return;
    setLoading(true);
    try {
      const recommendation = await aiTacticalLoadoutRecommendation({ mapType, gameMode });
      setResult(recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="loadout-tool" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">04 / Tactical Neural Network</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-stencil font-normal mb-6 leading-none">
            AI TACTICAL <span className="text-primary">ADVISOR</span>
          </h2>
          <p className="text-foreground/50 text-lg font-light max-w-2xl mx-auto">
            Calculate your path to victory. Select mission parameters and let our AI determine your optimal deployment configuration.
          </p>
        </div>

        <div className="bg-[#050505] border border-white/5 p-8 md:p-12 relative group shadow-2xl">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Map Terrain</label>
              <Select onValueChange={setMapType}>
                <SelectTrigger className="bg-black/50 border-white/10 rounded-none h-14 text-white focus:ring-primary/40 focus:border-primary/40">
                  <SelectValue placeholder="Identify Terrain" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                  <SelectItem value="urban" className="focus:bg-primary focus:text-white">Srinagar Urban</SelectItem>
                  <SelectItem value="snow" className="focus:bg-primary focus:text-white">Ladakh Foothills</SelectItem>
                  <SelectItem value="desert" className="focus:bg-primary focus:text-white">Arid Outpost</SelectItem>
                  <SelectItem value="forest" className="focus:bg-primary focus:text-white">Dense Jungle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Mission Protocol</label>
              <Select onValueChange={setGameMode}>
                <SelectTrigger className="bg-black/50 border-white/10 rounded-none h-14 text-white focus:ring-primary/40 focus:border-primary/40">
                  <SelectValue placeholder="Identify Mode" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                  <SelectItem value="team deathmatch" className="focus:bg-primary focus:text-white">Team Deathmatch</SelectItem>
                  <SelectItem value="battle royale" className="focus:bg-primary focus:text-white">Lone Wolf (FFA)</SelectItem>
                  <SelectItem value="capture the flag" className="focus:bg-primary focus:text-white">Dominance</SelectItem>
                  <SelectItem value="sniper" className="focus:bg-primary focus:text-white">Sniper Duels</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handleRecommend} 
            disabled={loading || !mapType || !gameMode}
            className="w-full bg-primary text-white hover:bg-primary/90 h-16 font-black uppercase tracking-[0.2em] text-xs rounded-none btn-slanted group relative overflow-hidden"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing Data...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> Run Tactical Simulation
              </span>
            )}
          </Button>

          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40"></div>
        </div>

        {result && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
             <Card className="bg-black/40 border-primary/30 rounded-none overflow-hidden backdrop-blur-md">
               <CardHeader className="bg-primary/10 border-b border-primary/20 p-6">
                 <CardTitle className="flex items-center gap-3 text-primary uppercase text-sm font-bold tracking-[0.3em]">
                   <ShieldCheck className="w-5 h-5" /> Loadout Recommendation Complete
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-8 space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white/5 p-6 border-l-4 border-primary group hover:bg-white/[0.08] transition-colors">
                     <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-primary/60" />
                        <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">Target Operative</span>
                     </div>
                     <p className="text-3xl font-stencil text-white tracking-wide">{result.character}</p>
                   </div>
                   <div className="bg-white/5 p-6 border-l-4 border-primary group hover:bg-white/[0.08] transition-colors">
                     <div className="flex items-center gap-2 mb-2">
                        <Sword className="w-4 h-4 text-primary/60" />
                        <span className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">Required Ordinance</span>
                     </div>
                     <p className="text-3xl font-stencil text-white tracking-wide">{result.weapon}</p>
                   </div>
                 </div>
                 
                 <div className="bg-black/60 p-8 border border-white/5 relative">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <BrainCircuit className="w-12 h-12" />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Intelligence Summary</span>
                    <p className="text-foreground/70 leading-relaxed font-light text-sm italic">
                      "{result.reasoning}"
                    </p>
                 </div>
               </CardContent>
             </Card>
          </div>
        )}
      </div>
    </section>
  );
}
