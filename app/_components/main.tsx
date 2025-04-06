import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import Edges from "./edges";
import PerplexityLogo from "./svg/Perplexity";

const MainSection = () => {
  return (
    <ThreeGridLayout className="min-h-[190px]">
      <section className="flex flex-col h-full items-center justify-center relative">
        <Edges.BottomLeft transparent={true} />
        <Edges.BottomRight transparent={true} />
        <main className="border border-foreground/8 flex items-center justify-center xl:w-[1000px]">
          <div className="border-r border-foreground/8 py-6 flex-1 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border-r border-foreground/8 py-6 flex-1 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border-r border-foreground/8 py-6 flex-1 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border-r border-foreground/8 py-6 flex-1 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="py-6 flex-1 flex items-center justify-center">
            <PerplexityLogo />
          </div>
        </main>
      </section>
    </ThreeGridLayout>
  );
};
export default MainSection;
