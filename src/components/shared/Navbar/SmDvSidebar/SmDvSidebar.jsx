import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarContent from "./SidebarContent";

export default function SmDvSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FaBars className="block text-2xl text-white md:hidden" />
      </SheetTrigger>

      <SheetContent side="left" className="overflow-x-visible">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Menu Options</SheetTitle>
        </SheetHeader>

        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
