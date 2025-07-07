import Title from "@/components/shared/Title/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body className="flex h-screen items-center justify-center text-center">
        <section>
          <div>
            <Title className="mx-auto px-2 text-4xl [background-position-y:bottom]">
              404
            </Title>

            <p className="mt-5 text-xl font-bold text-[#94A2A8]">
              Page Not Found
            </p>

            <Link href="/">
              <Button className="button-primary mx-auto mt-10 block cursor-pointer !px-10 text-base">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
