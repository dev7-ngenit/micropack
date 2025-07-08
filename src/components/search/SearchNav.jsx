import { cn } from "@/lib/utils";
import Dropdown from "./SearchNav/Dropdown";

export default function SearchNav({ totalResults, sortBy }) {
  return (
    <nav
      className={cn(
        "mt-10 flex h-24 items-center bg-white shadow-[0_0_0_100vmax_#ffffff] [clip-path:_inset(0_-100vmax)]",
        totalResults ? "justify-between" : "justify-end",
      )}
    >
      {!!totalResults && <span>{totalResults} results</span>}

      <div className="flex items-center gap-x-3 text-lg text-gray-900/50">
        Sort by:
        <Dropdown sortBy={sortBy} />
      </div>
    </nav>
  );
}
