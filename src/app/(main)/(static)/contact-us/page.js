import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">Contact Us</Title>

      <section className="mt-10 flex flex-col gap-5 md:mt-16">
        <h3 className="text-xl">
          If you have any questions or concerns regarding our products or
          services, please feel free to contact us via email or live chat on our
          website
        </h3>

        <h3 className="text-xl">Email：<span className="underline">micropack@micropackhk.com</span></h3>

        <h3 className="text-xl">
          We strive to provide excellent customer service and will do our best
          to respond to your inquiries as quickly as possible.
        </h3>
      </section>
    </main>
  );
}
