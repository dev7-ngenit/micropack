import Copyright from "./Copyright";
import Payments from "./Payments";
import Socials from "./Socials";
import Support from "./Support";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#FBCF00] bg-[#091C25] pt-14 pb-10 md:h-[350px]">
      <div className="mx-auto grid grid-cols-1 gap-x-20 gap-y-14 border-b border-[#59666C] px-5 pb-11 text-lg font-semibold text-[#59666C] md:w-6xl md:grid-cols-4">
        <Support />

        <Socials />

        <Copyright />

        <Payments />
      </div>
    </footer>
  );
}
