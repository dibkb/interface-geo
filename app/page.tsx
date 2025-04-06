import Link from "next/link";
import { Logo } from "./_components/logo";
import ThreeGridLayout from "./_layout/three-grid";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main>
      <ThreeGridLayout className="h-[100px]">
        <main className="px-8 h-full flex justify-between items-center">
          <Logo />
          <ul className="flex items-center gap-4 text-sm font-semibold text-white/64">
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Integrations</Link>
            </li>
          </ul>
          <Button
            color="white"
            className="bg-white text-background hover:bg-white/90 cursor-pointer transition-all duration-300"
          >
            Button
          </Button>
        </main>
      </ThreeGridLayout>
      <section className="flex flex-col items-center justify-center h-[calc(100vh-100px)]"></section>
    </main>
  );
}
