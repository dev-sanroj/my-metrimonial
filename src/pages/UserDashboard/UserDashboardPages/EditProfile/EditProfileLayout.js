import { FaArrowCircleRight } from "react-icons/fa";
import DashboardLayout from "../../DashboardLayout";
import { Link } from "react-router-dom";

const EditProfileLayout = (props) => {
  return (
    <DashboardLayout activePage="editprofile">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-start items-center w-full">
          <li className="flex justify-center items-center font-black text-[22px] text-[#FF4061]">
            Edit Profile
          </li>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-2"></span>
        <div className="flex justify-center items-start w-full mt-4 min-h-[540px] max-h-[540px] overflow-y-scroll overflow-x-hidden">
          <ul className="flex flex-col justify-center items-start w-[18%]">
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
              to="/edit-profile/photosmore"
              className="flex justify-center items-center w-full"
            >
              <li
                className={`${
                  props.editPage === "photosmore"
                    ? "bg-[#FF4061] text-[#FFFFFF]"
                    : "bg-[transparent] text-[#333333]"
                } flex justify-between items-center border-2 border-[#FFC0CB] px-3  py-3 w-full `}
              >
                <span className="font-bold text-[16px]">Photos & More</span>
                <span>
                  <FaArrowCircleRight size={23} />
                </span>
              </li>
            </Link>
          </ul>
          <div className="flex justify-center items-center w-[82%] p-4 border-[#FFC0CB] rounded-lg border-2 ">
            {props.children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditProfileLayout;
