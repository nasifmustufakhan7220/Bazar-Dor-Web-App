import GoogleSignInToast from "@/components/GoggleToast";
import Hero from "@/components/Hero";
import AllProducts from "@/components/The Product Sections (Home Page)/AllProducts";
import HomePageSkeleton from "@/components/The Product Sections (Home Page)/HomeSkeleton";
import TodayDownPrices from "@/components/The Product Sections (Home Page)/TodayDownPrices";
import TodayUpPrices from "@/components/The Product Sections (Home Page)/TodayUpPrices";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<HomePageSkeleton/>}>
        <TodayUpPrices />
      </Suspense>
      <Suspense fallback={<HomePageSkeleton/>}>
        <TodayDownPrices />
      </Suspense>
      <Suspense fallback={<HomePageSkeleton/>}>
        <AllProducts />
      </Suspense>

      <Suspense fallback={null}>
        <GoogleSignInToast />
      </Suspense>
    </div>
  );
}
