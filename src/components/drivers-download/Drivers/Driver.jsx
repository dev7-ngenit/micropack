import { FaFileZipper } from "react-icons/fa6";

export default function Driver({ driver }) {
  const { name, size, link, date, totalFiles } = driver || {};

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-1.5">
        <FaFileZipper className="text-5xl text-[#5AA3C4]" />

        <div>
          <a href="/charger.jpg" className="underline" download>
            {name}
          </a>
          <p className="text-sm text-slate-700/50">{size}</p>
        </div>
      </div>

      <div>
        <p className="text-slate-700/80">{date}</p>

        {totalFiles && (
          <p className="text-end text-sm text-slate-700/50">{totalFiles}</p>
        )}
      </div>
    </div>
  );
}
