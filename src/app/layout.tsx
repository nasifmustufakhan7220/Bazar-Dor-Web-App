import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import NavLinks from "@/components/navlink/NavLinks";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

const HindSiliguri = Hind_Siliguri({
  subsets:["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor is modern grocery shop app, where people by their healthy food, which is created by bazar dor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${HindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f0f5f0] flex flex-col">
          <Header/>
          <NavLinks/>
          <Marquee/>
        <main className="max-w-240 mx-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
