import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AllMatchesPaginate from "./AllMatchesPaginate";
import AllProfiles from "./AllProfiles";
import SortMatchesHeader from "./SortMatchesHeader";

const AllMatches = (props) => {
  return (
    <>
      <Navbar
        onShowBasicInfo={props.onShowBasicInfo}
        onShowSignUp={props.onShowSignUp}
      />
      <section
        className={`relative flex justify-center items-center w-[100%] h-[60vh] bg-[url('https://img.freepik.com/premium-photo/joyful-wedding-reception-entrance-bride-groom-high-resolution-image-with-glossy-backdrop-ca_980716-195996.jpg?w=1380')] bg-cover bg-no-repeat bg-top`}
      >
        <span className="absolute z-0 left-0 top-0 bg-[rgba(255,64,97,0.5)] w-[100%] h-[100%]"></span>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-[#FFFFFF] font-shadow text-[80px] font-bold mb-3">
              Wellcome To Logo Web
            </h2>
            <h2 className="text-[#FFFFFF] font-shadow text-[24px] font-normal mt-3">
              Forever Starts Here. Your Journey, Your Wedding Wonderland!{" "}
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-[100%] bg-[#FFFFF4] py-8">
        <div className="flex flex-col justify-center items-center w-[90%] bg-[#FFFFFF] border-2 border-[#FF4060] rounded-lg py-4 mb-32">
          <SortMatchesHeader className="px-4 py-3 mb-3" />
          <AllProfiles />
          <AllMatchesPaginate />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllMatches;
