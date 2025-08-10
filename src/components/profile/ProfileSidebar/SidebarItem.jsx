"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BaggageClaim, Home, Inbox } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Order History",
    url: "/profile/order-history",
    icon: BaggageClaim,
  },
  {
    title: "Address Book",
    url: "/profile/address-book",
    icon: Inbox,
  },
];

export default function SidebarItem() {
  const pathname = usePathname();

  return items.map((item) => (
    <SidebarMenuItem
      key={item.title}
      className={cn(item.url === pathname && "rounded-l-sm bg-gray-200/50")}
    >
      <SidebarMenuButton asChild>
        <Link href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
}
