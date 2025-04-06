import { cn } from "@/lib/utils";
import React from "react";

const Edges = {
  TopLeft: ({
    transparent = false,
    className,
  }: {
    transparent?: boolean;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "absolute top-[-6px] left-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[#1B1B1B]`,
          className
        )}
      />
    );
  },
  TopRight: ({
    transparent = false,
    className,
  }: {
    transparent?: boolean;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "absolute top-[-6px] right-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[#1B1B1B]`,
          className
        )}
      />
    );
  },
  BottomRight: ({
    transparent = false,
    className,
  }: {
    transparent?: boolean;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "absolute bottom-[-6px] right-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[#1B1B1B]`,
          className
        )}
      />
    );
  },
  BottomLeft: ({
    transparent = false,
    className,
  }: {
    transparent?: boolean;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "absolute bottom-[-6px] left-[-6px] rounded-[3px] w-3 h-3 z-100 border border-foreground/8",
          transparent ? "bg-foreground/8" : `bg-[#1B1B1B]`,
          className
        )}
      />
    );
  },
};

export default Edges;
