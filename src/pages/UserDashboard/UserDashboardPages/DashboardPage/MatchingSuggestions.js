import AllMatchesPaginate from "../../../AllMatches/AllMatchesPaginate";
import AllProfiles from "../../../AllMatches/AllProfiles";
import SortMatchesHeader from "../../../AllMatches/SortMatchesHeader";

const MatchingSuggestions = () => {
  return (
    <section
      id="matchingsuggestions"
      className="flex justify-center lg:justify-end items-center w-full lg:w-[95%] bg-[#FFFFFF] "
    >
      <div className="flex flex-col justify-center items-center w-[95%] lg:w-[72%] bg-[#FFFFFF] border-2 border-[#FFC0CB] rounded-lg py-4 lg:px-6">
        {/* <div className="flex flex-col justify-center items-start w-[95%] border-2 border-[#FFC0CB] rounded-lg p-4"> */}
        <div className="flex justify-start items-center w-full">
          <p className="text-[24px] font-extrabold text-[#FF4061] my-2 px-4 py-2">
            Matching Suggestions
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full my-2">
          <SortMatchesHeader className="px-4 py-2 mb-3" />
          <AllProfiles className="w-full md:w-[45%] lg:w-[28%]" />
          <AllMatchesPaginate />
        </div>
      </div>
    </section>
  );
};
export default MatchingSuggestions;
