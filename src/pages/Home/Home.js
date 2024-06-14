import HeroSection from "../../components/HeroSection/HeroSection";
import HowItsWorkSection from "../../components/HowItsWorkSection/HowItsWorkSection";
import Navbar from "../../components/Navbar/Navbar";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <HowItsWorkSection />
    </>
  );
};

export default Home;
