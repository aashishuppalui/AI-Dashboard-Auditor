import SiteFooter from "../components/common/SiteFooter";
import HomeHeader from "../components/home/HomeHeader";
import HomeHero from "../components/home/HomeHero";
import HowItWorks from "../components/home/HowItWorks";
import ReviewCapabilities from "../components/home/ReviewCapabilities";

export default function Home() {
  return (
    <main className="home-page">
      <HomeHeader />

      <HomeHero />

      <HowItWorks />

      <ReviewCapabilities />

      <SiteFooter />
    </main>
  );
}