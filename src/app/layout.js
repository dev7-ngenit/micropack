import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import CartProvider from "./providers/CartProvider";

const neuzeitGrotesk = localFont({
  src: [
    {
      path: "./fonts/neuzeit-grotesk/neuzeit-grotesk-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/neuzeit-grotesk/neuzeit-grotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neuzeit-grotesk/neuzeit-grotesk-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/neuzeit-grotesk/neuzeit-grotesk-Black.otf",
      weight: "900",
      style: "black",
    },
  ],
});

export const metadata = {
  title: "Micropack",
  description: "Accessories management platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neuzeitGrotesk.className} bg-[#EBEFF1] antialiased`}>
        <CartProvider>
          <Navbar />

          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

          <Footer />
        </CartProvider>

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
