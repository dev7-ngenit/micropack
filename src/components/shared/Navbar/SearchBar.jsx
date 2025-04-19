import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <form className="relative order-last -mt-2 flex grow items-center justify-center md:m-0">
      <Input
        placeholder="Type to search..."
        className="ml-auto h-[2.2rem] w-full rounded-full bg-white pl-5 !text-lg focus-visible:border-[#fbcf00] focus-visible:ring-[#fbcf00] md:mr-6 md:max-w-[530px]"
      />

      <IoSearchOutline className="absolute top-1/2 right-1 size-5 -translate-y-1/2 rounded-full bg-[#2f9ecf] p-[.55rem] text-white md:right-7" />
    </form>
  );
}
