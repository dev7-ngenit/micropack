import Title from "@/components/shared/Title/Title";

export default async function page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/terms-and-condition`,
  );
  const { data } = await response.json();

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Terms and Conditions
      </Title>

      <article className="prose mt-10 max-w-full">{data?.content}</article>
    </main>
  );
}
