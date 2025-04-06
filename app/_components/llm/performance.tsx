import Box from "@/app/_layout/box";
import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";
import React from "react";
import LockSvg from "../svg/lock";

export const Performance = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        "w-full p-4 font-semibold text-xs flex flex-col gap-4",
        className
      )}
      zeroZero={false}
      zeroOne={false}
    >
      <Gauge className="w-6 h-6" />
      <div className="flex items-center gap-2">
        <p>Performance</p>
        <div className="flex items-center gap-2 rounded-xl px-4 py-1 bg-red-50 text-[8px]">
          <span className="w-2 h-2 bg-red-700 rounded-full" />
          <p className="text-red-700">Action Required</p>
        </div>
      </div>
      <p className="text-xs text-foreground/64">
        Lorem ipsum bibendum adipiscing adipiscing eu ridiculus mauris sit nunc.
      </p>
    </Box>
  );
};

export const PerformanceLocked = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        "w-full p-4 font-semibold text-xs flex flex-col gap-4 relative",
        className
      )}
      zeroZero={false}
      zeroOne={false}
    >
      {/* locked */}
      <button className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-white rounded-md p-1 z-100 text-background flex items-center gap-2 px-4">
        <LockSvg />
        Locked
      </button>
      <Gauge className="w-6 h-6 blur-xs" />
      <div className="flex items-center gap-2 blur-xs">
        <p>Performance</p>
        <div className="flex items-center gap-2 rounded-xl px-4 py-1 bg-red-50 text-[8px]">
          <span className="w-2 h-2 bg-red-700 rounded-full" />
          <p className="text-red-700">Action Required</p>
        </div>
      </div>
      <p className="text-xs text-foreground/64 blur-xs">
        Lorem ipsum bibendum adipiscing adipiscing eu ridiculus mauris sit nunc.
      </p>
    </Box>
  );
};
