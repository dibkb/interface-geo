import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-semibold text-[28px] text-white flex justify-start items-center h-full",
        className
      )}
    >
      interface
    </Link>
  );
};
