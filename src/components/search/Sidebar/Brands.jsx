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

export default function Brands() {
  const queryParams = useSearchParams();
  const router = useRouter();
  const axios = useAxiosSecure();

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectedBrand = queryParams.get("brand");

  const handleChangeCategory = (value) => {
    const params = new URLSearchParams(queryParams.toString());

    if (selectedBrand === value.toString()) {
      params.delete("brand", value);
    } else {
      params.set("brand", value);
    }

    router.push(`/search?${params.toString()}`);
  };

  useEffect(() => {
    async function fetchBrands() {
      const { data } = await axios.get("/v1/brands");

      setBrands(data?.brands);
      setLoading(false);
    }

    fetchBrands();

    return () => {};
  }, []);

  return (
    <AccordionItem value="brands" className="border-slate-300">
      <AccordionTrigger className="py-4 text-xl font-semibold hover:cursor-pointer hover:no-underline">
        Brands
      </AccordionTrigger>

      <AccordionContent>
        {loading ? (
          <Loader className="mx-auto w-fit" />
        ) : (
          brands.map((brand) => (
            <div
              className="flex items-start space-y-1 space-x-2 pt-1 pl-1"
              key={brand.id}
            >
              <Checkbox
                id="in-stock"
                className="cursor-pointer border-2 border-black/50 focus-visible:ring-[#3EAFE1] data-[state=checked]:border-[#3EAFE1] data-[state=checked]:bg-[#3EAFE1]"
                checked={brand.id.toString() === selectedBrand}
                onCheckedChange={() => handleChangeCategory(brand?.id)}
              />
              <Label
                htmlFor="in-stock"
                className="-mt-1 flex w-full items-center justify-between peer-has-checked:text-blue-300"
              >
                <span className="text-base">{brand?.name}</span>
              </Label>
            </div>
          ))
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
