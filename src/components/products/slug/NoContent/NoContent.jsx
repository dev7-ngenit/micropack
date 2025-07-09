import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaSearch } from "react-icons/fa";

export default function NoContent({ title, subtitle, icon }) {
  const RenderIcon = icon || FaSearch;

  return (
    <Card className="mx-auto mt-20 h-[20rem] max-w-[28rem] shadow-2xl">
      <CardContent className="relative mx-auto mt-6 size-[10rem] rounded-full bg-[#3EAFE1] p-0 inset-shadow-[0_-20px_10px_#00000024]">
        <RenderIcon className="absolute top-2/3 left-[57%] -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-white drop-shadow-[0_-15px_2px_rgba(0,_0,_0,_.08)]" />
      </CardContent>

      <CardFooter className="block text-center">
        {title && <h3 className="text-4xl font-bold">{title}</h3>}
        {subtitle && (
          <p className="mt-2 text-xl text-gray-900/70">{subtitle}</p>
        )}
      </CardFooter>
    </Card>
  );
}
