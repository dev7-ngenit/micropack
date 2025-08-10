"use client";

import Title from "@/components/shared/Title/Title";
import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname = usePathname();

  const pageTitle = pathname === "/profile" ? "Order History" : "Addresses";

  return (
    <div className="border-b border-b-gray-400 pb-4">
      <Title className="px-2 text-4xl capitalize [background-position-y:80%]">
        {pageTitle}
      </Title>
    </div>
  );
}
