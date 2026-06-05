"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoImg = PlaceHolderImages.find(img => img.id === "logo-main");

  const navLinks = [
    { name: "Intro", href: "#" },
    { name: "Story", href: "#story" },
    { name: "Modes", href: "#modes" },
    { name: "Arsenal", href: "#armory" },
    { name: "Faces", href: "#intelligence" },
    { name: "Partners", href: "#partners" },
    { name: "Creators", href: "#creators" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            {logoImg?.imageUrl && (
              <div className="relative w-12 h-12 overflow-hidden mix-blend-screen transition-transform hover:scale-110">
                <Image 
                  src={logoImg.imageUrl} 
                  alt="FAU-G Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}
            <span className="font-stencil text-xl tracking-tight whitespace-nowrap">
              FAU-G <span className="text-primary">DOMINATION</span>
            </span>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/60 hover:text-white transition-colors font-bold text-[10px] tracking-[0.2em] uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground block px-3 py-3 font-bold text-xs uppercase tracking-widest border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
