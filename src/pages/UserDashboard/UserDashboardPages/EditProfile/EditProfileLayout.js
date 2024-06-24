import { FaArrowCircleRight } from "react-icons/fa";
import DashboardLayout from "../../DashboardLayout";
import { Link } from "react-router-dom";
import { TbCreditCardFilled } from "react-icons/tb";
import classes from "./EditProfileLayout.module.css";

const EditProfileLayout = (props) => {
  return (
    <DashboardLayout activePage="editprofile" onShowSignUp={props.onShowSignUp}>
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-start items-center w-full">
          <li className="flex justify-between md:justify-start font-black text-[22px] text-[#FF4061] w-full">
            Edit Profile
            <label
              htmlFor="editcategory"
              className="flex justify-center items-center md:hidden text-[#FFFFFF] bg-[#FF4061] active:bg-[#FFC0CB] p-1 rounded-md h-[35px]"
            >
              <TbCreditCardFilled size={30} />
              <span className="text-[16px] mx-1">Category</span>
            </label>
          </li>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-2"></span>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full mt-4 ">
          <input
            type="checkbox"
            id="editcategory"
            className={`hidden ${classes["editcategory"]}`}
          />
          <ul
            className={`hidden md:flex flex-col justify-center items-start w-full md:w-[18%] mb-2 md:m-0 ${classes["editcategoryul"]}`}
          >
            <Link
              to="/edit-profile/personal"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "personal"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Personal</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/religious"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "religious"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Religious</span>
                <span className="">
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/family"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "family"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Family</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/education"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "education"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Education</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/address"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "address"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Address</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/lifestylesocial"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "lifestylesocial"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Social</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/aboutmore"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "aboutmore"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">About More</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
            <Link
              to="/edit-profile/matchpreferences"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "matchpreferences"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Match Preferences</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
          </ul>
          <div className="flex justify-center items-start md:items-start w-full md:w-[82%] p-2 md:py-4 md:px-4 lg:px-8 border-[#FFC0CB] rounded-lg border-2 overflow-y-scroll overflow-x-hidden min-h-[540px] max-h-[540px] mt-2 md:mt-0">
            {props.children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditProfileLayout;
