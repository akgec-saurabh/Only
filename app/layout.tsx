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
          <main className="pt-[80px]">
            <div className="mx-auto max-w-xl p-4 md:max-w-2xl  lg:max-w-screen-lg  xl:max-w-screen-2xl xl:px-10">
              {children}
            </div>
          </main>
          <BottomFooter />
        </Providers>
      </body>
    </html>
  );
}
