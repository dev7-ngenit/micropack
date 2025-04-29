import SearchNav from "../SearchNav";
import Products from "./Products";
import Sidebar from "./Sidebar";

export default function Details() {
  return (
    <section className="mt-10">
      <SearchNav />

      <section className="mt-9 flex items-start gap-x-12">
        <Sidebar />

        <Products />
      </section>
    </section>
  );
}
