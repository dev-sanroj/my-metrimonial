import AllMatchesPaginate from "../../../AllMatches/AllMatchesPaginate";
import AllProfiles from "../../../AllMatches/AllProfiles";
import SortMatchesHeader from "../../../AllMatches/SortMatchesHeader";
import DashboardLayout from "../../DashboardLayout";
import AsideSortingBox from "./AsideSortingBox";

const FindProfile = (props) => {
  return (
    <DashboardLayout activePage="findprofile">
      <div className="flex flex-col justify-center items-start w-full">
        <ul className="flex justify-center items-start w-full pr-2 min-h-[540px] max-h-[540px] overflow-y-scroll">
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-start w-[25%] border-2 border-[#FFC0CB] rounded-lg px-4 bg-white">
              <AsideSortingBox />
            </div>
            <div className="flex flex-col justify-center items-start w-[74%]">
              <SortMatchesHeader className="w-full p-3 bg-white mb-2" />
              <div className="flex flex-col justify-center items-center w-full border-2 border-[#FFC0CB] rounded-lg py-4 bg-white mt-2">
                <AllProfiles />
                <AllMatchesPaginate />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </DashboardLayout>
  );
};
export default FindProfile;
