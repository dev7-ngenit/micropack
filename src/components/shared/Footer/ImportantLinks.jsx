import Link from "next/link";

export default function ImportantLinks() {
  return (
    <div>
      <h4 className="mb-4 text-xl text-white">Important Links</h4>

      <div className="flex flex-col">
        <Link
          href="/about-us"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          About Us
        </Link>
        <Link
          href="/terms-and-conditions"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/drivers-download"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Drivers Download
        </Link>
        <Link
          href="/ccpa-opt-out"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Do Not Sell My Personal Information
        </Link>
      </div>
    </div>
  );
}
