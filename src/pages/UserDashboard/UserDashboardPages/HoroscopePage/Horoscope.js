import { GiAges } from "react-icons/gi";
import DashboardLayout from "../../DashboardLayout";
import { MdCastForEducation, MdOutlineLocationCity } from "react-icons/md";

const Horoscope = (props) => {
  return (
    <DashboardLayout activePage="horoscope" onShowSignUp={props.onShowSignUp}>
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-center md:justify-start lg:justify-start items-center w-full">
          <p className="font-extrabold text-[18px] lg:text-[26px] text-[#FF4061]">
            <span className="text-[#333333]">User Profile: </span>User Name
          </p>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-3"></span>
        <div className="flex flex-col justify-start items-center w-full lg:w-[70%] self-center">
          <div className="flex flex-col justify-center items-center md:items-start lg:items-start w-full">
            <p className="text-[#333333] font-bold my-2">Basic Information</p>
            <ul className="flex flex-col md:flex-row justify-center items-center my-2 w-full">
              <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-full md:w-[30%] h-[140px] mx-3 my-3 md:my-0">
                <GiAges size={40} className="text-[#616161]" />
                <span className="font-bold text-[#818181] text-[18px]">
                  Age
                </span>
                <span className="font-bold text-[#FF4061] text-[18px]">28</span>
              </li>
              <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-full md:w-[30%] h-[140px] mx-3 my-3 md:my-0">
                <MdOutlineLocationCity size={40} className="text-[#616161]" />
                <span className="font-bold text-[#818181] text-[18px]">
                  City
                </span>
                <span className="font-bold text-[#FF4061] text-[18px]">
                  Bhopal
                </span>
              </li>
              <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-full md:w-[30%] h-[140px] mx-3 my-3 md:my-0">
                <MdCastForEducation size={40} className="text-[#616161]" />
                <span className="font-bold text-[#818181] text-[18px]">
                  Education
                </span>
                <span className="font-bold text-[#FF4061] text-[18px]">
                  education
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start lg:items-start w-full ">
            <p className="text-[#333333] font-bold my-2">Horoscope Details</p>
            <ul className="flex flex-col justify-center items-center md:items-start lg:items-start my-2 w-full">
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Date of Birth:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  Jan 15 1996
                </span>
              </li>
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Time of Birth:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  10:30
                </span>
              </li>
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Place of Birth:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  IND
                </span>
              </li>
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Zodiac Sign:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  Capricorn
                </span>
              </li>
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Moon Sign:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  Taurus
                </span>
              </li>
              <li className="flex justify-around items-center mx-3 my-1">
                <span className="font-semibold text-[#818181] text-[16px]">
                  Manglik Status:
                </span>
                <span className="font-semibold text-[#FF4061] text-[18px] ml-4">
                  Non-Manglik
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Horoscope;
