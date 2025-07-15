"use client";

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { useRef } from "react";

export default function MenuLink({ name, children }) {
  const contentRef = useRef(null);

  return (
    <MenubarMenu>
      <MenubarTrigger className="border-none text-[22px] font-medium decoration-amber-500 underline-offset-[1rem] duration-300 hover:text-amber-500 hover:underline">
        {name}
      </MenubarTrigger>

      <MenubarContent className="mt-3 ml-1" ref={contentRef}>
        {children.map((child) => (
          <Link key={child.name} href={child.href}>
            <MenubarItem className="text-lg">{child.name}</MenubarItem>
          </Link>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
}
