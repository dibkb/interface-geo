import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Xsvg, LinkedinSvg } from "./svg/social";
const Footer = ({ className }: { className?: string }) => {
  return (
    <ThreeGridLayout className={cn("border-none", className)}>
      <section className="flex h-full items-center pt-8 px-12 justify-between relative">
        <Link
          href="/"
          className="text-sm text-foreground/64 font-semibold hover:text-foreground transition-colors duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="text-sm text-foreground/64 font-semibold hover:text-foreground transition-colors duration-300"
        >
          © 2024, Heimer Labs Private Limited
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/">
            <Xsvg className="text-foreground/64 hover:text-foreground transition-colors duration-300" />
          </Link>
          <Link href="/">
            <LinkedinSvg className="text-foreground/64 hover:text-foreground transition-colors duration-300" />
          </Link>
        </div>
      </section>
    </ThreeGridLayout>
  );
};

export default Footer;
