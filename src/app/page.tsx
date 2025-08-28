import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsMoreImportantSection from "@/components/WhatsMoreImportantSection";
import ShopByStyleSection from "@/components/ShopByStyleSection";
import DiamondShapesSection from "@/components/DiamondShapesSection";
import JewelleryCollectionSection from "@/components/JewelleryCollectionSection";
import DesignBespokeSection from "@/components/DesignBespokeSection";
import NewTrendingSection from "@/components/NewTrendingSection";
import ColoredDiamondsSection from "@/components/ColoredDiamondsSection";
import BespokeSection from "@/components/BespokeSection";
import GuidesSection from "@/components/GuidesSection";
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <HeroSection />
      <WhatsMoreImportantSection />
      <ShopByStyleSection />
      <DiamondShapesSection />
      <JewelleryCollectionSection />
      <DesignBespokeSection />
      <NewTrendingSection />
      <ColoredDiamondsSection />
      <BespokeSection />
      <GuidesSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
