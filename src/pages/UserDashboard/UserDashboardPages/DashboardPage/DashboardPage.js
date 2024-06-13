import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button/Button";
import DashboardLayout from "../../DashboardLayout";
import MatchingSuggestions from "./MatchingSuggestions";
const DashboardPage = (props) => {
  return (
    <DashboardLayout activePage="dashboard">
      <div className="flex flex-col justify-start items-center w-full">
        <div className="flex justify-start items-center w-full p-4">
          <Link to="">
            <Button text="Search Bride/Groom" className="mr-4 font-bold" />
          </Link>
          <a href="#matchingsuggestions">
            <Button text="New Matches" className="ml-4 font-bold" />
          </a>
        </div>
        <div className="flex justify-center items-center w-full p-4">
          <ul className="flex flex-wrap justify-between items-center w-full">
            <li className="flex flex-col justify-center items-center min-h-[210px] w-[45%] bg-[#FFFFF4] p-4 rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.1)] my-4">
              <span className="text-[#FF4061] font-bold text-[20px] my-2">
                0
              </span>
              <p className="text-[#333333] text-[18px] font-extrabold my-2">
                Profile View
              </p>
            </li>
            <li className="flex flex-col justify-center items-center min-h-[210px] w-[45%] bg-[#FFFFF4] p-4 rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.1)] my-4">
              <span className="text-[#FF4061] font-bold text-[20px] my-2">
                0
              </span>
              <p className="text-[#333333] text-[18px] font-extrabold my-2">
                Matches
              </p>
            </li>
            <li className="flex flex-col justify-center items-center min-h-[210px] w-[45%] bg-[#FFFFF4] p-4 rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.1)] my-4">
              <Link to="/dashboard/latest-request">
                <Button text="Letest Request" />
              </Link>
            </li>
            <li className="flex flex-col justify-center items-center min-h-[210px] w-[45%] bg-[#FFFFF4] p-4 rounded-lg shadow-[0_0_12px_rgba(0,0,0,0.1)] my-4">
              <span className="text-[#FF4061] font-bold text-[20px] my-2">
                0
              </span>
              <p className="text-[#333333] text-[18px] font-extrabold my-2">
                Click
              </p>
            </li>
          </ul>
        </div>
      </div>
      <MatchingSuggestions />
    </DashboardLayout>
  );
};
export default DashboardPage;
