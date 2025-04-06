import Link from "next/link";
import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import { cn } from "@/lib/utils";
import Edges from "./edges";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <ThreeGridLayout className="h-full flex-1">
      <section className="flex flex-col h-full items-center justify-center relative">
        {/* arcs */}
        <div className="absolute bottom-0 left-0 w-44 h-44 rounded-tr-full border-t border-r border-foreground/8" />
        <div className="absolute bottom-0 right-0 w-44 h-44 rounded-tl-full border-t border-l border-foreground/8" />

        <Edges.BottomLeft transparent={true} />
        <Edges.BottomRight transparent={true} />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-[80px] font-semibold">Your Brand, Discovered</h1>
          <h3 className="text-[50px] font-semibold text-foreground/64">
            Unlock AI search volume insights
          </h3>
          <p className="text-muted-foreground max-w-[400px] my-4">
            Reach millions of consumers who are using AI to discover new
            products and brands
          </p>
        </div>

        <div className="mt-6 w-[90%] xl:w-[600px] relative">
          <Edges.TopLeft />
          <Edges.TopRight />
          <Edges.BottomRight />
          <Edges.BottomLeft />
          <form
            className={cn(
              "flex items-center gap-2 border border-foreground/8 px-8 py-4",
              "focus-within:border-foreground/20 hover:border-foreground/20 transition-all duration-200"
            )}
          >
            <input
              type="text"
              placeholder="Enter your website URL"
              className="outline-none font-medium text-2xl"
            />
          </form>
        </div>
        <Button
          asChild
          className="mt-8 bg-white text-black hover:bg-foreground/90 cursor-pointer transition-all duration-200 py-6 flex items-center gap-2 font-bold mb-8 xl:mb-0"
        >
          <Link href="/auth/signin">
            Try for free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </section>
    </ThreeGridLayout>
  );
};

export default Hero;
