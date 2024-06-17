import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import HowItsWorkSection from "../../components/HowItsWorkSection/HowItsWorkSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection";

const Home = (props) => {
  return (
    <>
      <Navbar onShowSignUp={props.onShowSignUp} />
      <HeroSection />
      <WhyChooseUsSection />
      <HowItsWorkSection />
    </>
  );
};

export default Home;
