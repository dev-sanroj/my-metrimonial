import { FiFilter } from "react-icons/fi";
import AllMatchesPaginate from "../../../AllMatches/AllMatchesPaginate";
import AllProfiles from "../../../AllMatches/AllProfiles";
import SortMatchesHeader from "../../../AllMatches/SortMatchesHeader";
import DashboardLayout from "../../DashboardLayout";
import AsideSortingBox from "./AsideSortingBox";
import classes from "./FindProfile.module.css";

const FindProfile = (props) => {
  return (
    <DashboardLayout activePage="findprofile">
      <div className="flex flex-col justify-center items-start w-full">
        <ul className="flex justify-center items-start w-full px-2 min-h-[540px] max-h-[540px] overflow-y-scroll">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <label
              htmlFor="filtermenu"
              className="lg:hidden flex justify-start items-center w-full bg-[#FFC0CB] py-2 rounded-lg px-3 mb-4 group"
            >
              <FiFilter
                size={30}
                className="text-[#FF4061] bg-[#FFFFFF] p-1 rounded-md group-active:text-[#FFFFFF] group-active:bg-[#FF4061]"
              />
              <span className="text-[#FFFFFF] font-bold ml-2 text-[18px] group-active:text-[#FF4061]">
                Filter
              </span>
            </label>
            <input
              id="filtermenu"
              className={`${classes["filtermenu"]} hidden`}
              type="checkbox"
            />
            <div className="hidden lg:flex justify-center items-start w-full lg:w-[25%] border-2 border-[#FFC0CB] rounded-lg px-3 lg:px-4 bg-white mb-4 lg:mb-0">
              <AsideSortingBox />
            </div>
            <div className="flex flex-col justify-center items-start w-full lg:w-[74%]">
              <SortMatchesHeader className=" w-full px-4 py-2 mb-3" />
              <div className="flex flex-col justify-center items-center w-full border-2 border-[#FFC0CB] rounded-lg py-4 bg-white mt-2">
                <AllProfiles className="w-full md:w-[45%]" />
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
