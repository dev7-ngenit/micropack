"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortByOptions = [
  { title: "Price (low to high)", value: "price_low_to_high" },
  { title: "Price (high to low)", value: "price_high_to_low" },
];

export default function Dropdown({ sortBy }) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const handleToggleSortBy = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sortby", value);

    router.push(`${path}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleToggleSortBy}>
      <SelectTrigger className="w-[180px] border-2 border-slate-500/50 focus-within:border-sky-500 focus:border-sky-500 focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1">
        <SelectValue
          placeholder={
            sortByOptions.find((o) => o.value === sortBy)?.value ||
            "Price (low to high)"
          }
        />
      </SelectTrigger>

      <SelectContent className="border-2 py-0">
        {sortByOptions.map((option) => (
          <SelectItem key={option.title} value={option.value}>
            {option.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
