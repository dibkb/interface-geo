import Box from "@/app/_layout/box";
import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";
import React from "react";
import LockSvg from "../svg/lock";

export const Performance = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        "w-full p-6 font-semibold text-xs flex flex-col gap-4",
        className
      )}
      zeroZero={false}
      zeroOne={false}
    >
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-3xl font-bold text-red-500">34</h3>
        <Gauge className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2">
        <p>Performance</p>
        <div className="flex items-center gap-2 rounded-xl px-4 py-1 bg-red-50 text-[8px]">
          <span className="w-2 h-2 bg-red-700 rounded-full" />
          <p className="text-red-700">Action Required</p>
        </div>
      </div>
    </Box>
  );
};

export const PerformanceLocked = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        "w-full p-6 font-semibold text-xs flex flex-col gap-4 relative",
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
      <div className="flex items-center gap-2 justify-between blur-xs">
        <h3 className="text-3xl font-bold text-red-500">34</h3>
        <Gauge className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2 blur-xs">
        <p>Performance</p>
        <div className="flex items-center gap-2 rounded-xl px-4 py-1 bg-red-50 text-[8px]">
          <span className="w-2 h-2 bg-red-700 rounded-full" />
          <p className="text-red-700">Action Required</p>
        </div>
      </div>
    </Box>
  );
};
