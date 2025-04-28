import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchNav() {
  return (
    <nav className="flex h-24 items-center justify-between bg-white shadow-[0_0_0_100vmax_#ffffff] [clip-path:_inset(0_-100vmax)]">
      <span>110 results</span>

      <div className="flex items-center gap-x-3 text-lg text-gray-900/50">
        Sort by:
        <Select>
          <SelectTrigger className="w-[180px] border-2 border-slate-500/50 focus-within:border-sky-500 focus:border-sky-500 focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1">
            <SelectValue placeholder="Relevance" />
          </SelectTrigger>

          <SelectContent className="border-2 py-0">
            <SelectItem value="light">Relevance</SelectItem>
            <SelectItem value="dark">Price (low to high)</SelectItem>
            <SelectItem value="system">Price (high to low)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
}
