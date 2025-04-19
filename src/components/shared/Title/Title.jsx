import { cn } from "@/lib/utils";

export default function Title({ children, className }) {
  return <h1 className={cn("text-2xl font-bold", className)}>{children}</h1>;
}
