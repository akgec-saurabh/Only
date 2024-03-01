import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import { Providers } from "@/app/Providers";
import Overlays from "@/app/Overlays";
import BottomFooter from "@/components/BottomFooter";

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
          <main className="pt-[80px]">{children}</main>
          <BottomFooter />
        </Providers>
      </body>
    </html>
  );
}
