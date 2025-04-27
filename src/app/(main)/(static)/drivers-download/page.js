import Drivers from "@/components/drivers-download/Drivers/Drivers";
import Title from "@/components/shared/Title/Title";

export default function page() {
  return (
    <main className="container !mt-10 box-border px-5 md:!my-16 md:box-content md:min-h-[calc(100dvh-33rem)]">
      <Title className="text-4xl [background-position-y:70%]">
        Drivers Download
      </Title>

      <Drivers />
    </main>
  );
}
