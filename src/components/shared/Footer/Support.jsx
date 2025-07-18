import Link from "next/link";

export default function Support() {
  return (
    <div className="min-w-[200px]">
      <h4 className="mb-4 text-xl text-white">Support</h4>

      <div className="flex flex-col">
        <Link
          href="/contact-us"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Contact Us
        </Link>
        <Link
          href="/faq"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          FAQ
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
          Refund Policy
        </Link>
        <Link
          href="/privacy-policy"
          className="w-fit cursor-pointer duration-300 hover:text-[#EBEFF1]"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
