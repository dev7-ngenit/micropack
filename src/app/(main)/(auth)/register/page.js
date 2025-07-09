"use client";

import AuthLayout from "@/components/(auth)/AuthLayout/AuthLayout";
import Button from "@/components/(auth)/Button/Button";
import FormField from "@/components/shared/FormField/FormField";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would handle the registration here
      console.log("Registration form submitted", formData);

      // Simulate API error for demo purposes
      setErrors({
        form: "Registration functionality is not implemented in this demo",
      });
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started with Micropack"
    >
      <form onSubmit={handleSubmit}>
        {errors.form && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-600">
            {errors.form}
          </div>
        )}

        <FormField
          label="Full name"
          type="text"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <FormField
          label="Email address"
          type="email"
          id="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <FormField
          label="Password"
          type="password"
          id="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <FormField
          label="Confirm password"
          type="password"
          id="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
        />

        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </a>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-red-500">{errors.agreeToTerms}</p>
              )}
            </div>
          </div>
        </div>

        <Button type="submit" variant="primary" className="box-border w-full">
          Create account
        </Button>

        {/* <SocialLogin providers={socialProviders} /> */}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
