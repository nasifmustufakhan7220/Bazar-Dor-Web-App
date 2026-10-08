import Hero from "@/components/Hero";
import TodayDownPrices from "@/components/The Product Sections (Home Page)/TodayDownPrices";
import TodayUpPrices from "@/components/The Product Sections (Home Page)/TodayUpPrices";

export default function Home() {
  return (
   <div>
    <Hero/>
    <TodayUpPrices/>
    <TodayDownPrices/>
   </div>
  );
}
