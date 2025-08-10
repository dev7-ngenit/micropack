import { BaggageClaim, Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import SidebarItem from "./SidebarItem";

// Menu items.
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

export default function ProfileSidebar() {
  return (
    <Sidebar className={cn("h-full")}>
      <SidebarContent className="h-full overflow-x-hidden">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button variant="destructive" className="cursor-pointer">
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
