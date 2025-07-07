import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-5 text-2xl text-white md:order-last md:text-3xl">
      <Link href="/profile">
        <CgProfile className="hover:cursor-pointer" />
      </Link>
      <Link href="/cart">
        <FaBagShopping className="hover:cursor-pointer" />
      </Link>
    </div>
  );
}
