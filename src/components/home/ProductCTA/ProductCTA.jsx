import Image from "next/image";

export default function ProductCTA() {
  return (
    <section className="container mx-auto">
      <Image
        src="/mouse.jpg"
        width={1116}
        height={618}
        className="h-[13.25rem] w-[24.063rem] md:h-[38.625rem] md:w-full mx-auto rounded-2xl"
      />
    </section>
  );
}
