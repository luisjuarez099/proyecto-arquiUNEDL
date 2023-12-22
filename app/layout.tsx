import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
const inter = Inter({ subsets: ["latin"] });
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Refaccionaria",
  description: "Proyecto de arquitectura de software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Theme>
            <main className="relative  overflow-hidden ">{children}</main>
          </Theme>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
