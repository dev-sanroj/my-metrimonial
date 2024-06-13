import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaSection = () => {
  return (
    <li className="flex flex-col justify-center items-start py-10 border-b-2 w-full">
      <p className="text-[#555555] font-bold text-[20px] mb-4">Social Media</p>
      <ul className="flex flex-wrap justify-between items-start mt-2 w-[40%]">
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
    </li>
  );
};

export default SocialMediaSection;
