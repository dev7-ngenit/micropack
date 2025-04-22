import Image from "next/image";

export default function Product() {
  return (
    <div className="w-full">
      <Image
        src="/mouse.jpg"
        width={258}
        height={258}
        className="size-[11.5rem] rounded-2xl md:size-[16.125rem]"
      />

      <p className="mt-2 line-clamp-2 text-center text-lg font-semibold">
        Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempore quibusdam, voluptatem enim autem laudantium
        quos eveniet beatae, quo, ex dolorum possimus id nisi explicabo illum
        ea? Ab iusto neque nihil!
      </p>
    </div>
  );
}
