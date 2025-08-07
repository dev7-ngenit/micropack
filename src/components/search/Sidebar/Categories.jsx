import Loader from "@/components/shared/Loader/Loader";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const queryParams = useSearchParams();
  const router = useRouter();
  const axios = useAxiosSecure();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectedCategory = queryParams.get("category");

  const handleChangeCategory = (value) => {
    const params = new URLSearchParams(queryParams.toString());

    if (selectedCategory === value.toString()) {
      params.delete("category", value);
    } else {
      params.set("category", value);
    }

    router.push(`/search?${params.toString()}`);
  };

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios.get("/v1/categories");

      setCategories(data?.data);
      setLoading(false);
    }

    fetchCategories();

    return () => {};
  }, []);

  return (
    <AccordionItem value="category" className="border-slate-300">
      <AccordionTrigger className="pt-0 text-xl font-semibold hover:cursor-pointer hover:no-underline">
        Category
      </AccordionTrigger>

      <AccordionContent>
        {loading ? (
          <Loader className="mx-auto w-fit" />
        ) : (
          categories.map((category) => (
            <div
              className="flex items-start space-x-2 pt-1 pl-1"
              key={category.id}
            >
              <Checkbox
                id="in-stock"
                className="cursor-pointer border-2 border-black/50 focus-visible:ring-[#3EAFE1] data-[state=checked]:border-[#3EAFE1] data-[state=checked]:bg-[#3EAFE1]"
                checked={category.id.toString() === selectedCategory}
                onCheckedChange={() => handleChangeCategory(category?.id)}
              />
              <Label
                htmlFor="in-stock"
                className="-mt-1 flex w-full items-center justify-between peer-has-checked:text-blue-300"
              >
                <span className="text-base">{category?.name}</span>
              </Label>
            </div>
          ))
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
