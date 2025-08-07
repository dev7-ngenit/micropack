"use client";

import { Input } from "@/components/ui/input";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import Loader from "../Loader/Loader";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
  const axios = useAxiosSecure();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email === "") {
      return toast.error("Email is required");
    }

    setLoading(true);
    try {
      await axios.post("/v1/subscription", { email });

      toast.success("Successfully subscribed.");
      setResponseStatus("Successfully subscribed.");
    } catch (error) {
      setResponseStatus(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="relative" onSubmit={handleSubscribe}>
      {loading ? (
        <Loader className="mb-3" />
      ) : responseStatus ? (
        <p className="mb-2 max-w-[280px] text-base text-wrap">
          {responseStatus}
        </p>
      ) : (
        <>
          {" "}
          <Input
            className="mb-3 h-7 w-[calc(100%-50px)] rounded-full pr-9 md:w-[210px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your e-mail"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white md:right-[3.125rem]"
          >
            <FaArrowRightLong />
          </button>
        </>
      )}
    </form>
  );
}
