import { Menubar } from "@/components/ui/menubar";
import Link from "next/link";
import MenuLink from "./MenuLink";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/search" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Others",
    children: [{ name: "Drivers", href: "/drivers-download" }],
  },
];

export default async function CenterLinks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/categories?per_page=4`,
  );
  const { data } = await response.json();

  const categories = data?.slice(0, 4);

  return (
    <Menubar className="ml-10 hidden text-white md:flex md:gap-x-5">
      {links.map((link) =>
        link?.href ? (
          <Link
            href={link.href}
            key={link.name}
            className="text-[22px] font-medium decoration-amber-500 underline-offset-[1rem] duration-300 hover:text-amber-500 hover:underline"
          >
            {link.name}
          </Link>
        ) : (
          <MenuLink key={link.name} name={link.name} children={link.children} />
        ),
      )}
      {/* {categories.map((category) => (
        <Link
          href={`/search?category=${category?.id}`}
          key={category?.id}
          className="text-xl font-bold decoration-amber-500 underline-offset-[1rem] duration-300 hover:text-amber-500 hover:underline"
        >
          {category?.name}
        </Link>
      ))} */}
    </Menubar>
  );
}
