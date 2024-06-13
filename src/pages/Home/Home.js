import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import HowItsWorkSection from "../../components/HowItsWorkSection/HowItsWorkSection";
import Navbar from "../../components/Navbar/Navbar";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection";

const Home = (props) => {
  return (
    <>
      <Navbar
        onShowBasicInfo={props.onShowBasicInfo}
        onShowSignUp={props.onShowSignUp}
      />
      <HeroSection />
      <WhyChooseUsSection />
      <HowItsWorkSection />
      <Footer />
    </>
  );
};

export default Home;
