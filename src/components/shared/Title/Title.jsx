import { cn } from "@/lib/utils";

export default function Title({ children, className }) {
  return (
    <h1
      className={cn(
        "w-fit bg-[linear-gradient(90deg,_transparent_0,_rgba(251,_207,_0,_0.5)_15%,_rgba(251,_207,_0,_0.5)_85%,_transparent_100%)] bg-size-[100%_35%] bg-repeat-x text-3xl font-bold [background-position-y:center]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
