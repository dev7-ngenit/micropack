import Title from "@/components/shared/Title/Title";
import { notFound } from "next/navigation";

export default async function page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/about-us`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    notFound();
  }

  const { data } = await res.json();

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">About Us</Title>

      <article
        className="prose mt-10 max-w-full"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></article>
    </main>
  );
}
