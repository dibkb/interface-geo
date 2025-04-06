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
        <main className="items-center justify-center flex flex-wrap w-full xl:w-[1000px]">
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center">
            <PerplexityLogo />
          </div>
          <div className="border border-foreground/8 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center">
            <PerplexityLogo />
          </div>
        </main>
      </section>
    </ThreeGridLayout>
  );
};
export default MainSection;
