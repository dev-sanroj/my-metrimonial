import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const UserHobbiesData = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full lg:w-[49%]">
      <div className="flex flex-col justify-center items-center md:items-start w-full">
        <p className="text-[#333333] font-bold mb-4text-[20px]">
          Hobbies & Interest
        </p>
        <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Reading
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Writing
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Gamming
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Traveling
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Singing
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Dancing
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Fitness
          </li>
          <li className="flex justify-center items-center w-[48%] md:w-[23%] my-2 lg:my-4 border-2 p-2 rounded-md text-[#818181] text-[16px] font-medium">
            Yoga
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start py-10 w-full">
        <p className="text-[#555555] font-bold text-[20px] ">Social Media</p>
        <ul className="flex flex-wrap justify-between items-start mt-2 w-full md:w-[40%]  ">
          <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
            <FaWhatsappSquare size={45} className="text-[#515151]" />
          </li>
          <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
            <FaInstagramSquare size={45} className="text-[#515151]" />
          </li>
          <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
            <FaFacebookSquare size={45} className="text-[#515151]" />
          </li>
          <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
            <FaXTwitter size={45} className="text-[#515151]" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserHobbiesData;
