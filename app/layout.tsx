import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import { Providers } from "./Providers";
import Overlays from "./Overlays";

const inter = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Timber Trend",
  description: "Eccomerce Furniture Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <Overlays />
          <Header />
          <main className="pt-[96px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
