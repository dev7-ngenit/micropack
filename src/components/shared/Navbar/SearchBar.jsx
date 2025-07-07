"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function SearchBar() {
  const queryParams = useSearchParams();
  const [queryValue, setQueryValue] = useState(queryParams.get("query") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.search.value === "") {
      return toast.custom(<Modal />);
    } else {
      const params = new URLSearchParams();
      params.set("query", e.target.search.value);

      redirect(`/search?${params.toString()}`);
    }
  };

  return (
    <form
      className="relative order-last -mt-2 flex grow items-center justify-center md:m-0"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Type to search..."
        className="ml-auto h-[2.2rem] w-full rounded-full bg-white pl-5 !text-lg focus-visible:border-[#fbcf00] focus-visible:ring-[#fbcf00] md:mr-6 md:max-w-[530px]"
        name="search"
        value={queryValue}
        onChange={(e) => setQueryValue(e.target.value)}
      />

      <button
        type="submit"
        className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer md:right-7"
      >
        <IoSearchOutline className="size-5 rounded-full bg-[#2f9ecf] p-[.55rem] text-white" />
      </button>
    </form>
  );
}

function Modal() {
  return (
    <Alert className="absolute top-0 right-0 flex w-sm motion-translate-x-in-[0%] motion-translate-y-in-[-192%] items-center gap-x-2">
      <MdError className="-mt-[5px] fill-red-500" />
      <AlertTitle className="text-lg">Write something to search!</AlertTitle>
    </Alert>
  );
}
