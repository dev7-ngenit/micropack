import Details from "@/components/search/Details/Details";
import NoContent from "@/components/search/NoContent";
import Title from "@/components/shared/Title/Title";

export default async function page({ searchParams }) {
  const { q } = (await searchParams) || {};

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      {q && (
        <Title className="text-4xl [background-position-y:70%]">
          Search for “{q}”
        </Title>
      )}

      <Details />

      {!q && <NoContent />}
    </main>
  );
}
