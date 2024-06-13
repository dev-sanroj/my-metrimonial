import { GiAges, GiBodyHeight } from "react-icons/gi";
import { MdCastForEducation, MdOutlineLocationCity } from "react-icons/md";

const BasicInfoSection = () => {
  return (
    <li className="flex flex-col justify-center items-start w-full py-10 border-b-2">
      <ul className="flex justify-between items-center my-2 w-full">
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px]">
          <MdOutlineLocationCity size={40} className="text-[#616161]" />
          <span className="font-bold text-[#818181] text-[18px]">City</span>
          <span className="font-bold text-[#FF4061] text-[18px]">Bhopal</span>
        </li>
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px]">
          <GiAges size={40} className="text-[#616161]" />
          <span className="font-bold text-[#818181] text-[18px]">Age</span>
          <span className="font-bold text-[#FF4061] text-[18px]">28</span>
        </li>

        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px]">
          <GiBodyHeight size={40} className="text-[#616161]" />
          <span className="font-bold text-[#818181] text-[18px]">Height</span>
          <span className="font-bold text-[#FF4061] text-[18px]">5'4"</span>
        </li>
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px]">
          <MdCastForEducation size={40} className="text-[#616161]" />
          <span className="font-bold text-[#818181] text-[18px]">
            Occupation
          </span>
          <span className="font-bold text-[#FF4061] text-[18px]">
            Corporate
          </span>
        </li>
      </ul>
    </li>
  );
};

export default BasicInfoSection;
