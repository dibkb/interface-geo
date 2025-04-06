import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import { cn } from "@/lib/utils";
import Edges from "./edges";

const Hero = () => {
  return (
    <ThreeGridLayout className="h-[60vh]">
      <section className="flex flex-col h-full items-center justify-center">
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

        <div className="mt-6 w-[600px] relative">
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
      </section>
    </ThreeGridLayout>
  );
};

export default Hero;
