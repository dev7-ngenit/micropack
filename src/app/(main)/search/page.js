import PaginationCom from "@/components/search/PaginationCom";
import Products from "@/components/search/Products";
import SearchNav from "@/components/search/SearchNav";
import Sidebar from "@/components/search/Sidebar/Sidebar";
import rmNullishValues from "@/lib/rmNullishValues";
import { Suspense } from "react";

export default async function page({ searchParams }) {
  const { query, sortby, category, ...rest } = (await searchParams) || {};

  const params = new URLSearchParams(
    rmNullishValues({
      name: query,
      sort_by: sortby,
      category_id: category,
      ...rest,
    }),
  );

  const link = `${process.env.NEXT_PUBLIC_BACKEND_ORIGIN}/v1/products?${params.toString()}`;

  const response = await fetch(link, {
    cache: "no-store",
  });
  const { current_page, total, data, per_page } = await response.json();

  return (
    <main className="!md:my-0 container !my-0 box-border px-5 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <SearchNav totalResults={total} sortBy={sortby} />

      <Suspense fallback={<div>Loading...</div>}>
        <section className="my-9 flex items-start gap-x-8">
          <Sidebar />

          <section className="grow">
            <Products products={data} />
            <PaginationCom
              current={current_page}
              total={Math.ceil(total / per_page)}
            />
          </section>
        </section>
      </Suspense>
    </main>
  );
}
