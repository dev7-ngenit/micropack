import React from "react";
import { Fingerprint } from "lucide-react";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="from-primary-50 to-secondary-50 my-10 flex items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-card">
        {/* Auth header */}
        <div className="p-6 pb-0 md:p-8">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h1>
          <p className="mb-6 text-center text-gray-500">{subtitle}</p>
        </div>

        {/* Auth content */}
        <div className="p-6 pt-4 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
