"use client";

import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Tactical Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-primary"></div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">06 / Communications</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-stencil font-normal mb-8 leading-none">
            CONTACT <span className="text-primary">COMMAND</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg font-light leading-relaxed">
            Establish a direct link with the vanguard. For inquiries, partnerships, or operational support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Tactical Form */}
          <div className="relative group">
            <div className="absolute -inset-1 border border-primary/20 pointer-events-none group-focus-within:border-primary/50 transition-colors"></div>
            <div className="bg-[#0a0a0a] p-8 md:p-10 border border-white/5 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary"></div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Callsign / Name</label>
                    <Input 
                      placeholder="Enter your name" 
                      className="bg-black/50 border-white/10 rounded-none h-12 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Signal / Email</label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-black/50 border-white/10 rounded-none h-12 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Subject</label>
                  <Input 
                    placeholder="Brief objective" 
                    className="bg-black/50 border-white/10 rounded-none h-12 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Transmission / Message</label>
                  <Textarea 
                    placeholder="Detailed briefing..." 
                    className="bg-black/50 border-white/10 rounded-none min-h-[150px] focus:border-primary/50 transition-all"
                  />
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 rounded-none font-black uppercase tracking-[0.2em] text-xs btn-slanted">
                  <Send className="mr-2 w-4 h-4" /> Send Transmission
                </Button>
              </form>

              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary"></div>
            </div>
          </div>

          {/* Contact Info & Direct Links */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">Direct Signal</h4>
                  <p className="text-foreground/40 text-xs font-light">support@ncoregames.com</p>
                  <p className="text-foreground/40 text-xs font-light">media@ncoregames.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">Comms Line</h4>
                  <p className="text-foreground/40 text-xs font-light">+91 (22) 6123-4567</p>
                  <p className="text-foreground/40 text-xs font-light">Mon - Fri, 0900 - 1800 IST</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white">HQ Coordinates</h4>
                  <p className="text-foreground/40 text-xs font-light">Ncore Games, Level 4, Tech Park</p>
                  <p className="text-foreground/40 text-xs font-light">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h5 className="font-bold text-[10px] uppercase tracking-[0.3em] text-primary">Operative Feedback</h5>
              </div>
              <p className="text-foreground/60 text-xs font-light leading-relaxed">
                Our intelligence team monitors all incoming transmissions. Expect a response within 24-48 standard operational hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
