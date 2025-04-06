import { cn } from "@/lib/utils";
import React from "react";

const ThreeGridLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "border-b border-foreground/8 grid grid-cols-10 grid-gap-[16px]",
        className
      )}
    >
      <span className="col-span-1 border-r border-foreground/8"></span>
      <div className="col-span-8">{children}</div>
      <span className="col-span-1 border-l border-foreground/8"></span>
    </section>
  );
};

export default ThreeGridLayout;
