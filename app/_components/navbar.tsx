"use client";
import React from "react";
import ThreeGridLayout from "../_layout/three-grid";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Edges from "./edges";

const Navbar = () => {
  return (
    <ThreeGridLayout className="h-[100px]">
      <main className="px-8 h-full flex justify-between items-center relative">
        <Edges.BottomRight transparent={true} />
        <Edges.BottomLeft transparent={true} />
        <Logo />
        {/* <ul className="flex items-center gap-6 text-sm font-semibold text-white/64">
          <li>
            <Link
              href="/"
              className="hover:text-white transition-all duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-white transition-all duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-white transition-all duration-300"
            >
              Integrations
            </Link>
          </li>
        </ul> */}
        <Button
          color="white"
          onClick={() => {
            window.open(
              "https://cal.com/rebhav-bharadwaj/introductory-chat",
              "_blank"
            );
          }}
          className="bg-white text-background hover:bg-white/90 cursor-pointer transition-all duration-300"
        >
          Book a call
        </Button>
      </main>
    </ThreeGridLayout>
  );
};

export default Navbar;
