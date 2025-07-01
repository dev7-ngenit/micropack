import Title from "@/components/shared/Title/Title";

export default async function page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/return-policy`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );
  const { data } = await response.json();

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Refund Policy
      </Title>

      <section className="prose mt-10 flex max-w-full flex-col gap-5 md:mt-16">
        {data?.content}
      </section>
    </main>
  );
}
