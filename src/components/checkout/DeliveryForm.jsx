"use client";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import FormField from "../shared/FormField/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function DeliveryForm({ data, setData }) {
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
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          required
        />
        <FormField
          label="Last Name"
          id="last-name"
          placeholder="Enter your last name"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          required
        />
      </div>
      <FormField
        label="Email"
        id="email"
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <FormField
        label="Company"
        id="company"
        placeholder="Company"
        value={data.company}
        onChange={(e) => setData({ ...data, company: e.target.value })}
      />
      <FormField
        label="Address One"
        id="address-one"
        placeholder="Enter your address"
        value={data.addressOne}
        onChange={(e) => setData({ ...data, addressOne: e.target.value })}
        required
      />
      <FormField
        label="Address Two"
        id="address-two"
        placeholder="Enter your address"
        value={data.addressTwo}
        onChange={(e) => setData({ ...data, addressTwo: e.target.value })}
      />
      <FormField
        label="State"
        id="state"
        placeholder="Enter your state"
        value={data.state}
        onChange={(e) => setData({ ...data, state: e.target.value })}
        required
      />

      <div className="mb-4">
        <label
          htmlFor="country"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Country <span className="text-red-500">*</span>
        </label>
        <Select
          name="country"
          id="country"
          value={data.country}
          onValueChange={(value) => setData({ ...data, country: value })}
        >
          <SelectTrigger className="focus:ring-primary-500 focus:border-primary-500 w-[92.5%] border-gray-300 px-4 text-base font-normal text-gray-500 shadow-none">
            <SelectValue placeholder="Select Country" />
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
        value={data.postalCode}
        onChange={(e) => setData({ ...data, postalCode: e.target.value })}
        required
      />
      <FormField
        label="Phone"
        id="phone"
        placeholder="Enter your phone number"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        required
      />

      {/* <div className="mt-2 flex items-center gap-x-2">
        <Checkbox
          id="default-address"
          name="default-address"
          className="focus:ring-primary-500 focus:border-primary-500 block border border-gray-300 font-medium text-gray-700"
        />
        <label htmlFor="default-address">Use as default address</label>
      </div> */}
    </form>
  );
}
