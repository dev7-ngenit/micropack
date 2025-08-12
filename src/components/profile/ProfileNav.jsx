"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHistory } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

export default function ProfileNav() {
  const pathname = usePathname();

  return (
    <div className="mt-10 space-x-3">
      <Link href="./">
        <Button
          variant={pathname === "/profile" ? "secondary" : "ghost"}
          className={cn(
            "cursor-pointer rounded-full !px-5 text-xl",
            pathname === "/profile" && "font-bold",
          )}
        >
          <FaHistory />
          <span className="ml-1">Order History</span>
        </Button>
      </Link>
      <Link href="/profile/addresses">
        <Button
          variant={pathname === "/profile/addresses" ? "secondary" : "ghost"}
          className={cn(
            "cursor-pointer rounded-full !px-5 text-xl",
            pathname === "/profile/addresses" && "font-bold",
          )}
        >
          <FaAddressBook />
          <span className="ml-1">Addresses</span>
        </Button>
      </Link>
      <Button
        variant="ghost"
        className={cn("cursor-pointer rounded-full !px-5 text-xl")}
      >
        <LuLogOut />
        <span className="ml-1">Log Out</span>
      </Button>
    </div>
  );
}
