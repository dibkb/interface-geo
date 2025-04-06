import React from "react";
import Box from "../_layout/box";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ThreeGridLayout from "../_layout/three-grid";
import Edges from "../_components/edges";
import PageOne from "../_components/carosoul/pageOne";
const Carosoul = () => {
  return (
    <ThreeGridLayout className="h-full">
      <section className="flex flex-col h-full items-center justify-center relative">
        <Edges.BottomLeft transparent={true} />
        <Edges.BottomRight transparent={true} />

        <Box className="xl:w-[750px] mt-8 p-8 py-16 flex flex-col gap-4">
          <PageOne />
          <div className="flex items-center gap-8 justify-between">
            <Box className="w-full px-4 py-2 mx-auto text-foreground/64 hover:text-foreground transition-colors duration-300 text-sm hover:border-foreground/20 cursor-pointer flex items-center gap-2 max-w-[250px]">
              <button className="text-foreground/64 hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold flex items-center gap-2 justify-between w-full">
                <ArrowLeft className="w-6 h-6" />
                <p>Back</p>
              </button>
            </Box>
            <Box className="w-full px-4 py-2 mx-auto text-foreground/64 hover:text-foreground transition-colors duration-300 text-sm hover:border-foreground/20 cursor-pointer flex items-center gap-2 max-w-[250px]">
              <button className="text-foreground/64 hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold flex items-center gap-2 justify-between w-full">
                <p>Proceed</p>
                <ArrowRight className="w-6 h-6" />
              </button>
            </Box>
          </div>
        </Box>
      </section>
    </ThreeGridLayout>
  );
};

export default Carosoul;
