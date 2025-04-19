import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainProductCard() {
  return (
    <div className="container my-20 box-border flex flex-col px-5 md:mx-auto md:flex-row md:px-0">
      <Image
        src="/mouse.jpg"
        width={560}
        height={420}
        className="rounded-t-xl md:rounded-xl"
      />

      <div className="mt-3 md:mx-auto md:flex md:w-1/3 md:flex-col md:justify-center">
        <h2 className="text-center text-[1.6rem] font-bold">
          Ergonomic Vertical Wireless Trackball Mouse
        </h2>

        <p className="text-center font-semibold">
          Ergonomic Design with Smooth Thumb Control, 2.4G Wireless Connection.
        </p>

        <Button className="button-primary mx-auto mt-3 block cursor-pointer !px-10 text-base">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
