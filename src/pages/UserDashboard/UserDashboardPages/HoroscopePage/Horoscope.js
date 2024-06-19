// import { GiAges } from "react-icons/gi";
import DashboardLayout from "../../DashboardLayout";
import {
  MdError,
  //   MdCastForEducation,
  MdOutlineFileUpload,
  // MdOutlineLocationCity,
} from "react-icons/md";
import Button from "../../../../components/UI/Button/Button";
import { BiSolidFileImage } from "react-icons/bi";

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
        <div className="flex flex-col justify-start items-start w-full lg:w-[70%] self-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center py-10 w-full md:px-4 lg:px-0">
            <div className="flex flex-col justify-center items-center w-[90%]">
              <label
                htmlFor="horoscopeimage"
                className="flex justify-center items-center text-slate-500 font-bold w-full md:w-[60%] lg:w-[260px] p-4 mb-2 outline-2 outline-slate-300 hover:outline-[#FF406155] outline-dashed rounded-md cursor-pointer bg-slate-50 group"
              >
                <span>Select Horoscope:</span>
                <MdOutlineFileUpload className="text-[25px] ml-2 group-hover:ml-4 duration-100 " />
              </label>
              <input id="horoscopeimage" type="file" className="hidden" />
              <Button
                text="Upload Horoscope"
                className="w-full md:w-[60%] lg:w-[260px] mt-2 font-medium"
              />
            </div>
            <div className="flex flex-col justify-center items-start mb-4 md:mb-0 w-[90%]">
              <p className="flex justify-center items-center text-[#333333] mb-2">
                <BiSolidFileImage className="text-[20px] text-slate-500 mr-2" />
                <span>File Information</span>
              </p>
              <div className="flex flex-col justify-center items-center w-full lg:w-[320px] min-h-[220px] p-6 outline-2 outline-slate-300 outline-dashed rounded-md cursor-pointer bg-slate-50">
                <p className="flex justify-start items-center border-2 border-[#FF4061aa] bg-[#FF406122] text-[#FF4061] text-[14px] p-2 w-full">
                  <MdError className="mr-2 text-[20px]" /> File upload failed!
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLDyQcuHqq5KdvVekmxS-Z1r7_bYcUUI3Bw&s"
                  alt="horoscopeimage"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-start items-center w-full lg:w-[70%] self-center">
        {/* <div className="flex flex-col justify-start items-center w-full lg:w-[70%] self-center">
        {/* <div className="flex flex-col justify-start items-center w-full lg:w-[70%] self-center">
        {/* <div className="flex flex-col justify-start items-center w-full lg:w-[70%] self-center">
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
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Horoscope;
