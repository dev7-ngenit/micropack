import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <form className="relative flex grow items-center justify-center">
      <Input
        placeholder="Type to search..."
        className="mr-6 ml-auto h-[2.2rem] max-w-[530px] rounded-full bg-white pl-5 focus-visible:border-[#fbcf00] focus-visible:ring-[#fbcf00]"
      />

      <IoSearchOutline className="absolute top-1/2 right-7 size-7 -translate-y-1/2 rounded-full bg-[#2f9ecf] p-[.3rem] text-white" />
    </form>
  );
}
