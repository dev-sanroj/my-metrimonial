import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import AllMatchesPaginate from "../../../AllMatches/AllMatchesPaginate";
import AllProfiles from "../../../AllMatches/AllProfiles";
import SortMatchesHeader from "../../../AllMatches/SortMatchesHeader";
import AsideSortingBox from "./AsideSortingBox";

const SearchUser = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center w-[100%] bg-[#FFFFF4] mt-20 mb-32 py-8">
        <div className="flex justify-between items-start w-[95%]">
          <div className="flex justify-center items-start w-[30%] border-2 border-[#FFC0CB] rounded-lg px-4 bg-white">
            <AsideSortingBox />
          </div>
          <div className="flex flex-col justify-center items-start w-[69%]">
            <SortMatchesHeader className="w-full bg-white mb-2" />
            <div className="flex flex-col justify-center w-full border-2 border-[#FFC0CB] rounded-lg py-4 bg-white mt-2">
              <AllProfiles className="!w-[200px]" />
              <AllMatchesPaginate />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchUser;
