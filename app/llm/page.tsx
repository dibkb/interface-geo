import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Performance, PerformanceLocked } from "../_components/llm/performance";
import Box from "../_layout/box";
import ThreeGridLayout from "../_layout/three-grid";
import { ShopifySvg } from "../_components/svg/social";
import Edges from "../_components/edges";
import CopySvg from "../_components/svg/copy";
import Markdown from "react-markdown";
import { markdown } from "@/utils/markdown";
export default function LLM() {
  return (
    <ThreeGridLayout className="h-full overflow-scroll">
      <section className="flex flex-col gap-4 pt-6 relative">
        <main className="grid grid-cols-3 w-[1000px] mx-auto">
          <Performance className="col-span-1" />
          <PerformanceLocked className="col-span-1" />
          <PerformanceLocked className="col-span-1" />
        </main>
        <Box className="w-[1000px] mx-auto flex justify-between items-center p-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-sm">
              Unlock Instant AI Visibility for your brand in One Click
            </h2>
            <p className="text-foreground/64 text-xs">
              Optimize for AI-driven search, and unlock new opportunities for
              visibility.
            </p>
          </div>
          <div className="flex items-center gap-2 relative border border-foreground/8 px-4 py-2 hover:border-foreground/20 transition-colors duration-300 cursor-pointer">
            <Edges.TopLeft className="w-2 h-2 absolute top-[-4px] left-[-4px]" />
            <Edges.TopRight className="w-2 h-2 absolute top-[-4px] right-[-4px]" />
            <Edges.BottomLeft className="w-2 h-2 absolute bottom-[-4px] right-[-4px]" />
            <Edges.BottomRight className="w-2 h-2 absolute bottom-[-4px] right-[-4px]" />

            <ShopifySvg className="w-5 h-5" />
            <p className="text-sm flex-1">Push to Shopify</p>
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </Box>

        <Box className="w-[1000px] mx-auto flex justify-between items-center p-4">
          <div className="flex flex-col gap-8 p-6 w-full">
            <div className="flex items-center justify-between gap-2">
              <Box className="px-4 py-2 flex items-center gap-2 text-sm font-semibold">
                LLMs.txt
                <ChevronDown className="w-4 h-4" />
              </Box>
              <button className="bg-white rounded-md py-3 z-100 text-background flex items-center gap-2 px-4 hover:bg-foreground/90 transition-colors duration-300 cursor-pointer text-xs font-bold">
                <CopySvg />
                Copy
              </button>
            </div>
            <Box className="p-6 text-foreground/64 text-sm">
              <Markdown>{markdown()}</Markdown>
            </Box>
          </div>
        </Box>
      </section>
    </ThreeGridLayout>
  );
}
