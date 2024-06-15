import { BiSearch } from "react-icons/bi";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import { TiStopwatch } from "react-icons/ti";
import { FaRegBell, FaRegThumbsUp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaShieldHalved } from "react-icons/fa6";

const AsideSortingBox = (props) => {
  return (
    <ul className="flex flex-col justify-center items-center w-full">
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <BiSearch className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            I'm looking for
          </span>
        </div>
        <div className="flex justify-center items-center w-full">
          <SelectInput
            id="i'mlookingfor"
            options={["Bride", "Groom"]}
            className="border-[#FFC0CB] font-semibold !w-[100%]"
          />
        </div>
      </li>
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <TiStopwatch className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            Age
          </span>
        </div>
        <div className="flex justify-center items-center w-full">
          <SelectInput
            id="i'mlookingfor"
            options={["Bride", "Groom"]}
            className="border-[#FFC0CB] font-semibold !w-[100%]"
          />
        </div>
      </li>
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <FaRegBell className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            Select Religion
          </span>
        </div>
        <div className="flex justify-center items-center w-full">
          <SelectInput
            id="i'mlookingfor"
            options={["Bride", "Groom"]}
            className="border-[#FFC0CB] font-semibold !w-[100%]"
          />
        </div>
      </li>
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <HiOutlineLocationMarker className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            Location
          </span>
        </div>
        <div className="flex justify-center items-center w-full">
          <SelectInput
            id="i'mlookingfor"
            options={["Bride", "Groom"]}
            className="border-[#FFC0CB] font-semibold !w-[100%]"
          />
        </div>
      </li>
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <FaRegThumbsUp className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            Availablity
          </span>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profileall" />
            <label
              htmlFor="profileall"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              All
            </label>
          </div>
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profileavailable" />
            <label
              htmlFor="profileavailable"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              Available
            </label>
          </div>
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profileoffline" />
            <label
              htmlFor="profileoffline"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              Offline
            </label>
          </div>
        </div>
      </li>
      <li className="flex flex-col justify-center items-start w-full my-3">
        <div className="flex justify-start items-center w-full">
          <span className="flex justify-center items-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-[#FFC0CB] rounded-md">
            <FaShieldHalved className="text-[#FF4061] text-[14px] lg:text-[20px]" />
          </span>
          <span className="ml-2 text-[#FF4061BB] font-bold text-[14px] lg:text-[16px]">
            Profile
          </span>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profileall" />
            <label
              htmlFor="profileall"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              All
            </label>
          </div>
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profilepremium" />
            <label
              htmlFor="profilepremium"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              Premium
            </label>
          </div>
          <div className="flex justify-start items-center my-2">
            <input type="radio" name="profile" id="profilefree" />
            <label
              htmlFor="profilefree"
              className="text-[#FF4061BB] font-medium text-[14px] ml-4"
            >
              Free
            </label>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AsideSortingBox;
