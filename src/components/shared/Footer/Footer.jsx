import Copyright from "./Copyright";
import ImportantLinks from "./ImportantLinks";
import Socials from "./Socials";
import Support from "./Support";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#FBCF00] bg-[#091C25] pt-14 pb-10 text-[#59666C] md:h-[260px]">
      <div className="mx-auto flex justify-between gap-x-10 gap-y-14 border-b border-[#59666C] px-5 pb-11 text-lg font-semibold md:w-6xl md:grid-cols-4">
        <Support />

        <ImportantLinks />

        <Socials />

        <Copyright />
      </div>

      <p className="mt-5 text-center">
        Copyright &copy; 2025. All rights reserved
      </p>
    </footer>
  );
}
