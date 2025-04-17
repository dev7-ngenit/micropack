import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <form className="relative order-last flex grow items-center justify-center -mt-2 md:m-0">
      <Input
        placeholder="Type to search..."
        className="md:mr-6 ml-auto h-[2.2rem] w-full md:max-w-[530px] rounded-full bg-white pl-5 focus-visible:border-[#fbcf00] focus-visible:ring-[#fbcf00]"
      />

      <IoSearchOutline className="absolute top-1/2 right-1 md:right-7 size-5 -translate-y-1/2 rounded-full bg-[#2f9ecf] p-[.55rem] text-white" />
    </form>
  );
}
