import { useState } from "react";
import { GiAges, GiBodyHeight } from "react-icons/gi";
import {
  MdCastForEducation,
  MdContentCopy,
  MdOutlineLocationCity,
} from "react-icons/md";

const UserAboutData = () => {
  const [profileId] = useState("Fmd596396401");
  const [isProfileIdCopy, setIsProfileIdCopy] = useState(false);
  const [copyAlertMessage, setCopyAlertMessage] = useState("Copied!");
  const handleCopyProfileId = () => {
    navigator.clipboard
      .writeText(profileId)
      .then(() => {
        setIsProfileIdCopy(true);
        setTimeout(() => setIsProfileIdCopy(false), 1000);
      })
      .catch((err) => setCopyAlertMessage("Failed to copy!"));
  };

  return (
    <ul className="flex flex-col justify-start items-start lg:w-[49%]">
      <li className="flex flex-col justify-start items-center lg:items-start w-full mb-4 mt-4 lg:mt-0">
        <p className="font-extrabold text-[#FF4061] text-[24px] md:text-[26px] lg:text-[36px] mb-2">
          User Name
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex justify-center pl-2 items-center font-bold text-[#FF4061] bg-[#FFC0CB] h-[30px] rounded-md text-[20px]">
            Profile Id:
            <span className="text-[#FFFFFF] ml-1">{profileId}</span>
            <span
              onClick={handleCopyProfileId}
              className="flex px-2 justify-center items-center ml-2 text-[#FFFFFF] bg-[#333333] hover:bg-[#FF4061] rounded-r-md h-full cursor-pointer active:text-[#FF4061] "
            >
              <span
                className={`${
                  isProfileIdCopy ? "flex" : "opacity-0"
                } justify-center items-center text-[14px] absolute mt-[-70px] h-[30px] rounded-sm p-2 bg-[#393939] font-bold text-[#FFFFFF] transition-opacity duration-100`}
              >
                {copyAlertMessage}
              </span>
              <MdContentCopy />
            </span>
          </div>
          <span className="flex justify-center items-center bg-[#4CAF50] font-medium text-[#FFFFFF] rounded-md px-3 my-2 h-[30px] ml-4">
            Available
          </span>
        </div>
      </li>
      <li className="flex justify-center items-center w-full my-4">
        <ul className="flex flex-wrap md:flex-row justify-between items-center w-full">
          <li className="flex flex-col justify-center items-center w-[45%] md:w-[20%] lg:w-[20%] h-[130px] border-2 rounded-lg my-3 md:my-0">
            <MdOutlineLocationCity size={42} className="text-[#616161]" />
            <span className="font-medium text-[#818181] text-[20px] my-1">
              City
            </span>
            <span className="font-bold text-[#FF4061] text-[20px]">Bhopal</span>
          </li>
          <li className="flex flex-col justify-center items-center w-[45%] md:w-[20%] lg:w-[20%] h-[130px] border-2 rounded-lg my-3 md:my-0">
            <GiAges size={42} className="text-[#616161]" />
            <span className="font-medium text-[#818181] text-[20px] my-1">
              Age
            </span>
            <span className="font-bold text-[#FF4061] text-[20px]">28</span>
          </li>
          <li className="flex flex-col justify-center items-center w-[45%] md:w-[20%] lg:w-[20%] h-[130px] border-2 rounded-lg my-3 md:my-0">
            <GiBodyHeight size={42} className="text-[#616161]" />
            <span className="font-medium text-[#818181] text-[20px] my-1">
              Height
            </span>
            <span className="font-bold text-[#FF4061] text-[20px]">5'4"</span>
          </li>
          <li className="flex flex-col justify-center items-center w-[45%] md:w-[20%] lg:w-[20%] h-[130px] border-2 rounded-lg my-3 md:my-0">
            <MdCastForEducation size={42} className="text-[#616161]" />
            <span className="font-medium text-[#818181] text-[20px] my-1">
              Occupation
            </span>
            <span className="font-bold text-[#FF4061] text-[20px]">
              Corporate
            </span>
          </li>
        </ul>
      </li>
      <li className="flex flex-col justify-center items-center md:items-start w-full my-4">
        <p className="text-[#333333] font-bold my-2 text-[20px]">
          About Myself
        </p>
        <p className="text-[#818181] my-2 text-center md:text-left text-[18px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text.
        </p>
      </li>
    </ul>
  );
};
export default UserAboutData;
