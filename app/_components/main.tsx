/* eslint-disable @next/next/no-img-element */
import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import Edges from "./edges";

const MainSection = () => {
  return (
    <ThreeGridLayout className="min-h-[190px]">
      <section className="flex flex-col h-full items-center justify-center relative">
        <Edges.BottomLeft transparent={true} />
        <Edges.BottomRight transparent={true} />
        <main className="items-center justify-center flex flex-wrap w-full xl:w-[1000px]">
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-8 w-1/3 xl:w-1/5 flex items-center justify-center h-24">
            <img
              src={
                "https://www.tryprofound.com/_next/static/media/chatgpt-logo.f21fb7db.svg"
              }
              className="w-[120px]"
              alt=""
            />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center h-24">
            <img
              src={
                "https://www.tryprofound.com/_next/static/media/perplexity-logo.3c7e2fc6.svg"
              }
              className="w-[140px]"
              alt=""
            />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center h-24">
            <img
              src={
                "https://www.tryprofound.com/_next/static/media/google-ai-overviews-logo.07ba4b8b.svg"
              }
              className="w-[140px]"
              alt=""
            />
          </div>
          <div className="border border-foreground/8 xl:border-r-0 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center h-24">
            <img
              src={
                "https://www.tryprofound.com/_next/static/media/copilot-logo.61e01dd4.svg"
              }
              alt=""
              className="w-[140px]"
            />
          </div>
          <div className="border border-foreground/8 py-2 xl:py-6 w-1/3 xl:w-1/5 flex items-center justify-center h-24">
            <img
              src={
                "https://www.tryprofound.com/_next/static/media/amazon-rufus-logo.42bd0728.svg"
              }
              alt=""
              className="w-[140px]"
            />
          </div>
        </main>
      </section>
    </ThreeGridLayout>
  );
};
export default MainSection;
