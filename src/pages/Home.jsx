import Header from "../components/common/Header";
import HeroCarousel from "../components/home/HeroCarousel";
import AboutIntro from "../components/home/AboutIntro";
import PopularJewellery from "../components/home/PopularJewellery";
import CategoryGrid from "../components/home/CategoryGrid";
import DiscountBanner from "../components/home/DiscountBanner";
import YouMayLike from "../components/home/YouMayLike";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      <AboutIntro />
        <PopularJewellery />
        <CategoryGrid />
        <DiscountBanner />
        <YouMayLike />
        <Testimonials />
      <Footer />
    </>
  );
};

export default Home;