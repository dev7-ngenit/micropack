import Image from "next/image";

import { Links } from "./Links";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import SmDvSidebar from "./SmDvSidebar/SmDvSidebar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 flex h-[120px] flex-wrap items-center justify-between bg-[#163340] px-[21px] md:h-[79px] md:px-[47px]">
      <SmDvSidebar />

      <Image src="/logo.png" alt="logo" width={160} height={46} priority />

      <Links />

      <SearchBar />

      <NavIcons />
    </nav>
  );
}
