import Title from "@/components/shared/Title/Title";

export default async function page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/privacy-policy`,
    {
      cache: "no-store",
    },
  );
  const { data } = await response.json();

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Privacy Policy
      </Title>

      <section
        className="prose mt-10 max-w-full md:mt-16"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      />
    </main>
  );
}
