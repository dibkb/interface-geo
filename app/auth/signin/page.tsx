import Edges from "@/app/_components/edges";
import Box from "@/app/_layout/box";
import ThreeGridLayout from "@/app/_layout/three-grid";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

export default function SignIn() {
  return (
    <ThreeGridLayout className="h-full">
      <section className="flex flex-col h-full items-center justify-center relative">
        <Edges.BottomLeft transparent={true} />
        <Edges.BottomRight transparent={true} />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[50px] font-semibold text-foreground text-center">
            Optimising..
          </h3>
          <h3 className="text-[50px] font-semibold text-foreground/64 text-center">
            https://getinterface.tech
          </h3>
          <p className="text-muted-foreground my-4 text-center">
            Did you know? By 2030, AI search could capture 20% of all
            Google&apos;s searches
          </p>
        </div>

        <Box className="xl:w-[450px] mt-8 p-8 py-16 flex flex-col gap-4">
          <Link href="/auth/login">
            <Box className="w-min px-4 mb-12 py-2 mx-auto text-foreground/64 text-sm cursor-pointer whitespace-nowrap font-semibold">
              Waitlist
            </Box>
          </Link>
          <Box className="w-full px-4 py-2 mx-auto text-foreground/64 hover:text-foreground transition-colors duration-300 text-sm hover:border-foreground/20 cursor-pointer flex items-center gap-2">
            <form className="flex items-center gap-2 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none flex-1"
              />
              <button
                type="submit"
                className="text-foreground/64 hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </form>
          </Box>

          <p
            // href="/auth/login"
            className="mx-auto my-6 text-foreground/64 text-sm"
          >
            We’ll get in touch shortly!
          </p>
        </Box>
      </section>
    </ThreeGridLayout>
  );
}
