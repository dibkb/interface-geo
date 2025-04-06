import React from "react";
import Edges from "../_components/edges";
import { cn } from "@/lib/utils";
const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative border border-foreground/8", className)}>
      <Edges.TopLeft className="w-2 h-2 absolute top-[-4px] left-[-4px]" />
      <Edges.TopRight className="w-2 h-2 absolute top-[-4px] right-[-4px]" />
      <Edges.BottomRight className="w-2 h-2 absolute bottom-[-4px] right-[-4px]" />
      <Edges.BottomLeft className="w-2 h-2 absolute bottom-[-4px] left-[-4px]" />
      {children}
    </div>
  );
};

export default Box;
