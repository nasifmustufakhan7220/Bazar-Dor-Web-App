import Hero from "@/components/Hero";
import AllProducts from "@/components/The Product Sections (Home Page)/AllProducts";
import TodayDownPrices from "@/components/The Product Sections (Home Page)/TodayDownPrices";
import TodayUpPrices from "@/components/The Product Sections (Home Page)/TodayUpPrices";

export default function Home() {
  return (
   <div>
    <Hero/>
    <TodayUpPrices/>
    <TodayDownPrices/>
    <AllProducts/>
   </div>
  );
}
