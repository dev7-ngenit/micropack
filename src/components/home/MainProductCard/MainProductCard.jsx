import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainProductCard() {
  return (
    <div className="container my-20 box-border flex flex-col px-5 md:mx-auto md:flex-row">
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

        <Button className="mx-auto mt-3 block rounded-full bg-[rgb(47,158,207)] px-10 text-base [box-shadow:rgba(19,63,82,0.3)_0px_2.77725px_5.5545px_0px,rgba(19,63,82,0.15)_0px_5.5545px_11.109px_-2.77725px,rgb(30,101,132)_0px_-2.77725px_0px_0px_inset]">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
