import Link from "next/link";

export default function Support() {
  return (
    <div>
      <h4 className="mb-4 text-xl text-white">Support</h4>

      <div className="flex flex-col">
        <Link
          href="/contact-us"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Contact Us
        </Link>
        <Link
          href="/about-us"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          About Us
        </Link>
        <Link
          href="/buying-policy"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Buying Policy
        </Link>
        <Link
          href="/refund-policy"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Refund Policy{" "}
        </Link>
        <Link
          href="/privacy-policy"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Privacy Policy
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
        <Link
          href="/faq"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          FAQ
        </Link>
      </div>
    </div>
  );
}
