import React from "react";
import Edges from "../_components/edges";
import { cn } from "@/lib/utils";
const Box = ({
  children,
  className,
  zeroZero = true,
  zeroOne = true,
  oneZero = true,
  oneOne = true,
}: {
  children: React.ReactNode;
  className?: string;
  zeroZero?: boolean;
  zeroOne?: boolean;
  oneZero?: boolean;
  oneOne?: boolean;
}) => {
  return (
    <div className={cn("relative border border-foreground/8", className)}>
      {zeroZero && (
        <Edges.TopLeft className="w-2 h-2 absolute top-[-4px] left-[-4px]" />
      )}
      {zeroOne && (
        <Edges.TopRight className="w-2 h-2 absolute top-[-4px] right-[-4px]" />
      )}
      {oneZero && (
        <Edges.BottomLeft className="w-2 h-2 absolute bottom-[-4px] right-[-4px]" />
      )}
      {oneOne && (
        <Edges.BottomRight className="w-2 h-2 absolute bottom-[-4px] right-[-4px]" />
      )}
      {children}
    </div>
  );
};

export default Box;
