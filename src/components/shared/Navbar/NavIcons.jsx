"use client";

import { Badge } from "@/components/ui/badge";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";

export default function NavIcons() {
  const { cart } = useCart();

  return (
    <div className="flex items-center gap-5 text-2xl text-white md:order-last md:text-3xl">
      <Link href="/profile">
        <CgProfile className="hover:cursor-pointer" />
      </Link>

      <Link href="/cart" className="relative w-fit">
        <FaBagShopping className="hover:cursor-pointer" />
        <Badge className="absolute -top-2 -right-2 rounded-full bg-[#2F9ECF]">
          {cart?.length}
        </Badge>
      </Link>
    </div>
  );
}
