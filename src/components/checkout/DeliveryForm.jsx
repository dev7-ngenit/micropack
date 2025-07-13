"use client";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import FormField from "../shared/FormField/FormField";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function DeliveryForm() {
  const [countries, setCountries] = useState([]);
  const axios = useAxiosSecure();

  useEffect(() => {
    async function fetchCountries() {
      const data = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name",
      );

      setCountries(data.data);
    }

    fetchCountries();

    return () => {};
  }, []);

  return (
    <form className="rounded-lg bg-white p-6">
      <div className="flex">
        <FormField
          label="First Name"
          id="first-name"
          placeholder="Enter your first name"
          required
        />
        <FormField
          label="Last Name"
          id="last-name"
          placeholder="Enter your last name"
          required
        />
      </div>
      <FormField label="Company" id="company" placeholder="Company" />
      <FormField
        label="Address One"
        id="address-one"
        placeholder="Enter your address"
        required
      />
      <FormField
        label="Address Two"
        id="address-two"
        placeholder="Enter your address"
      />
      <FormField
        label="City"
        id="city"
        placeholder="Enter your city"
        required
      />

      <div className="mb-4">
        <label
          htmlFor="country"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Country <span className="text-red-500">*</span>
        </label>
        <Select name="country" id="country">
          <SelectTrigger className="focus:ring-primary-500 focus:border-primary-500 w-[92.5%] border-gray-300 px-4 text-base font-normal text-gray-500 shadow-none">
            <SelectValue placeholder="Bangladesh" />
          </SelectTrigger>
          <SelectContent>
            {countries?.length > 0 &&
              countries.map((country) => (
                <SelectItem
                  key={country.name.common}
                  value={country.name.common}
                >
                  {country.name.common}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <FormField
        label="Postal/ZIP code"
        id="zip-code"
        type="number"
        placeholder="Enter the postal/ZIP code"
        required
      />
      <FormField
        label="Phone"
        id="phone"
        placeholder="Enter your phone number"
        required
      />

      <div className="mt-2 flex items-center gap-x-2">
        <Checkbox
          id="default-address"
          name="default-address"
          className="focus:ring-primary-500 focus:border-primary-500 block border border-gray-300 font-medium text-gray-700"
        />
        <label htmlFor="default-address">Use as default address</label>
      </div>
    </form>
  );
}
