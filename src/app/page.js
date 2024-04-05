"use client";


import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";

import Resources from "@/components/Resources";


import Team from "@/components/Team";

import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
     
      <Resources />
      
      <Work />
     
      <Team />
      
    </div>
  );
}
