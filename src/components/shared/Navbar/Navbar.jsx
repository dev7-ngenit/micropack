import Image from "next/image";
import { Links } from "./Links";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 flex h-[70px] items-center justify-between bg-[#163340] px-[47px]">
      <Image src="/logo.png" width={160} height={46} priority />

      <Links />

      <SearchBar />

      <NavIcons />
    </nav>
  );
}
