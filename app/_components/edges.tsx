import { cn } from "@/lib/utils";
import { colors } from "@/utils/colors";
import React from "react";

const Edges = {
  TopLeft: ({ transparent = false }: { transparent?: boolean }) => {
    return (
      <span
        className={cn(
          "absolute top-[-6px] left-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[${colors.box__background}]`
        )}
      />
    );
  },
  TopRight: ({ transparent = false }: { transparent?: boolean }) => {
    return (
      <span
        className={cn(
          "absolute top-[-6px] right-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[${colors.box__background}]`
        )}
      />
    );
  },
  BottomRight: ({ transparent = false }: { transparent?: boolean }) => {
    return (
      <span
        className={cn(
          "absolute bottom-[-6px] right-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[${colors.box__background}]`
        )}
      />
    );
  },
  BottomLeft: ({ transparent = false }: { transparent?: boolean }) => {
    return (
      <span
        className={cn(
          "absolute bottom-[-6px] left-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[${colors.box__background}]`
        )}
      />
    );
  },
};

export default Edges;
