"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  // We removed Shadcn's default trigger style completely.
  // This gives us pure control: completely transparent background, 
  // soft white hover, and no ugly white blocks on active pages.
  const customNavStyle = "px-3 md:px-5 py-2 rounded-md font-serif text-base md:text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-white/50 transition-all cursor-pointer";

  return (
   
    <div className="absolute top-0 left-0 w-full flex justify-center py-6 bg-transparent z-50">
      <NavigationMenu>
        <NavigationMenuList className="space-x-1 md:space-x-2">
          
          {/* Home Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Publication & talks Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link href="/publication_and_talks">Publication & Talks</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Corpus Button */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link
                href="https://english-vietnamese-corpus.vercel.app/corpus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corpus
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Timeline Button */}
          {/* <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link href="/timeline">Trip Timeline</Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */}

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}