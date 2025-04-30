import SearchNav from "../SearchNav";
import Products from "./Products";
import Sidebar from "./Sidebar";

export default function Details({ searchParams }) {
  return (
    <section className="mt-10">
      <SearchNav />

      <section className="mt-9 flex items-start gap-x-12">
        <Sidebar />

        <Products searchParams={searchParams} />
      </section>
    </section>
  );
}
