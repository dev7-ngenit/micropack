import Details from "@/components/search/Details/Details";
import NoContent from "@/components/search/NoContent";
import Title from "@/components/shared/Title/Title";

export default async function page({ searchParams }) {
  const { query } = (await searchParams) || {};

  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      {query && (
        <Title className="text-4xl [background-position-y:70%]">
          Search for “{query}”
        </Title>
      )}

      {!query && <NoContent />}

      {query && <Details searchParams={searchParams} />}
    </main>
  );
}
