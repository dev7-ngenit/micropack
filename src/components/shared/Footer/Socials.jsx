import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Socials() {
  return (
    <div>
      <h4 className="mb-4 text-xl text-white">Socials</h4>

      <form className="relative">
        <Input
          className="mb-3 h-7 w-[calc(100%-50px)] rounded-full pr-9 md:w-[210px]"
          placeholder="Enter your e-mail"
        />
        <FaArrowRightLong className="absolute top-1/2 right-3 -translate-y-1/2 text-white md:-right-4" />
      </form>

      <p className="text-base">
        Sign up for our newsletter and be the first to know about coupons and
        special promotions.
      </p>

      <div className="mt-4 flex items-center gap-x-2 text-xl">
        <FaFacebookF />
        <FaInstagram />
        <FiYoutube />
      </div>
    </div>
  );
}
