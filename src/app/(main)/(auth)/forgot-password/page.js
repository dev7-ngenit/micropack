"use client";

import AuthLayout from "@/components/(auth)/AuthLayout/AuthLayout";
import Button from "@/components/(auth)/Button/Button";
import FormField from "@/components/(auth)/FormField/FormField";
import Link from "next/link";
import { Suspense, useState } from "react";

const ForgotPasswordPageContent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would handle the password reset here
      console.log("Password reset requested for:", email);

      // Show success message
      setIsSubmitted(true);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset your password"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <FormField
            label="Email address"
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleChange}
            error={error}
            required
          />

          <div className="mt-6 space-y-4">
            <Button type="submit" className="box-border w-full">
              Send reset link
            </Button>

            <Button
              type="button"
              className="box-border w-full border-2 border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <Link href="/login" className="block w-full">
                Back to login
              </Link>
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <div className="mb-6 rounded-lg bg-green-50 p-4">
            <p className="text-green-800">
              We&apos;ve sent a password reset link to <strong>{email}</strong>
            </p>
          </div>
          <p className="mb-6 text-gray-600">
            Please check your email and follow the instructions to reset your
            password. If you don&apos;t see the email, check your spam folder.
          </p>
          <Button type="button" variant="outline" fullWidth>
            <Link href="/login" className="block w-full">
              Back to login
            </Link>
          </Button>
        </div>
      )}
    </AuthLayout>
  );
};

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordPageContent />
    </Suspense>
  );
}
