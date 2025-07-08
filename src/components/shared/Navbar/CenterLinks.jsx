import Link from "next/link";

export default async function CenterLinks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/categories?per_page=4`,
  );
  const { data } = await response.json();

  const categories = data?.slice(0, 4);

  return (
    <section className="ml-10 hidden text-white md:flex md:gap-x-5">
      {categories.map((category) => (
        <Link
          href={`/search?category=${category?.id}`}
          key={category?.id}
          className="text-xl font-bold decoration-amber-500 underline-offset-[1rem] duration-300 hover:text-amber-500 hover:underline"
        >
          {category?.name}
        </Link>
      ))}
    </section>
  );
}
