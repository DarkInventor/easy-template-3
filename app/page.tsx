import { AnimatedTooltipPreview } from "@/components/animated-tooltip-demo";
import { FloatingNavbar } from "@/components/floating-navbar";
import { HeroHighlightDemo } from "@/components/hero-highlight-page";
import { MacbookScrollDemo } from "@/components/macbook-scroll-demo";
import { TabsDemo } from "@/components/tabs-demo";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="z-10 w-full font-mono text-sm flex flex-col items-center">
        <FloatingNavbar />
        
        <div className="w-full z-[-1]">
          <HeroHighlightDemo />
          
        </div>
        {/* <TextRevealCard text={"Introducing Easy UI"} revealText={"Try Easy UI Now!"} /> */}
       
        <MacbookScrollDemo />
        <TabsDemo />
      </div>
    </main>
  );
}
