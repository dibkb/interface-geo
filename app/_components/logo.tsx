import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "font-semibold text-[28px] text-white flex justify-start items-center h-full",
        className
      )}
    >
      interface
    </h1>
  );
};
