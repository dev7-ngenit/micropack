import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";

export default function NavIcons() {
  return (
    <div className="text-2xl md:text-3xl text-white flex items-center gap-5 md:order-last">
      <CgProfile className="hover:cursor-pointer" />
      <FaBagShopping className="hover:cursor-pointer" />
    </div>
  );
}
