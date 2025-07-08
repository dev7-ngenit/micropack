import { cn } from "@/lib/utils";
import { FaSearch } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function NoContent({ className, ...props }) {
  const {
    icon,
    title = "Search",
    subtitle = "Use the search bar to find products",
  } = props || {};
  return (
    <Card
      className={cn(
        "mx-auto mt-20 h-[20rem] max-w-[28rem] shadow-2xl",
        className,
      )}
    >
      <CardContent className="relative mx-auto mt-6 size-[10rem] rounded-full bg-[#3EAFE1] p-0 inset-shadow-[0_-20px_10px_#00000024]">
        {icon || (
          <FaSearch className="absolute top-2/3 left-[57%] -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-white drop-shadow-[0_-15px_2px_rgba(0,_0,_0,_.08)]" />
        )}
      </CardContent>

      <CardFooter className="block text-center">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="mt-2 text-xl text-gray-900/70">{subtitle}</p>
      </CardFooter>
    </Card>
  );
}
