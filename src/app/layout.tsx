import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

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
      className={`${HindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
