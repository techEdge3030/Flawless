import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhatsMoreImportantSection from "../components/WhatsMoreImportantSection";
import ShopByStyleSection from "../components/ShopByStyleSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <HeroSection />
      <WhatsMoreImportantSection />
      <ShopByStyleSection />
    </div>
  );
}
