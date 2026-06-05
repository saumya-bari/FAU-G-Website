import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Team } from "@/components/sections/team";
import { Intelligence } from "@/components/sections/intelligence";
import { Modes } from "@/components/sections/modes";
import { Regiment } from "@/components/sections/regiment";
import { Armory } from "@/components/sections/armory";
import { Creators } from "@/components/sections/creators";
import { Achievements } from "@/components/sections/achievements";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Team />
      <Modes />
      <Regiment />
      <Armory />
      <Intelligence />
      <Creators />
      <Achievements />
      <Footer />
    </main>
  );
}
