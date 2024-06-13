import AllMatchesPaginate from "../../../AllMatches/AllMatchesPaginate";
import AllProfiles from "../../../AllMatches/AllProfiles";
import SortMatchesHeader from "../../../AllMatches/SortMatchesHeader";

const MatchingSuggestions = () => {
  return (
    <section
      id="matchingsuggestions"
      className="flex justify-center items-center w-full bg-[#FFFFFF]"
    >
      <div className="flex flex-col justify-center items-start w-[95%] border-2 border-[#FFC0CB] rounded-lg p-4">
        <div className="flex justify-start items-center w-full">
          <p className="text-[24px] font-extrabold text-[#FF4061] my-2">
            Matching Suggestions
          </p>
        </div>
        <div className="flex justify-center items-center w-full my-2">
          <SortMatchesHeader className="w-full px-4 py-3" />
        </div>
        <div className="flex flex-col justify-center items-center w-full my-2">
          <AllProfiles />
          <AllMatchesPaginate />
        </div>
      </div>
    </section>
  );
};
export default MatchingSuggestions;
