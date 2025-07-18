import { Input } from "@/components/ui/input";
import { FaArrowRightLong, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

export default function Socials() {
  return (
    <div className="max-w-[300px] min-w-[200px]">
      <h4 className="mb-4 text-xl text-white">Socials</h4>

      <form className="relative">
        <Input
          className="mb-3 h-7 w-[calc(100%-50px)] rounded-full pr-9 md:w-[210px]"
          autoComplete="email"
          name="email"
          type="email"
          placeholder="Enter your e-mail"
        />
        <FaArrowRightLong className="absolute top-1/2 right-3 -translate-y-1/2 text-white md:right-[3.125rem]" />
      </form>

      <p className="text-base">
        Sign up for our newsletter and be the first to know about offers.
      </p>

      <div className="mt-4 flex items-center gap-x-4 text-xl">
        <FaFacebookF className="cursor-pointer hover:text-white" />
        <FaInstagram className="-ml-1 cursor-pointer text-2xl hover:text-white" />
        <FiYoutube className="cursor-pointer text-[1.75rem] hover:text-white" />
      </div>
    </div>
  );
}
