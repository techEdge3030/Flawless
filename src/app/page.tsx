import Image from "next/image";
import Header from "./view/Header";
import HeroSection from "./view/HeroSection";
import WhatsMoreImportantSection from "./view/WhatsMoreImportantSection";
import ShopByStyleSection from "./view/ShopByStyleSection";

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
