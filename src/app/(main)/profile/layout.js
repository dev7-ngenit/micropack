import PageTitle from "@/components/profile/PageTitle";
import ProfileNav from "@/components/profile/ProfileNav";

export default function Layout({ children }) {
  return (
    <section className="container mx-auto min-h-[calc(100dvh-33rem)]">
      <PageTitle />

      <ProfileNav />

      <section className="mt-10">{children}</section>
    </section>
  );
}
