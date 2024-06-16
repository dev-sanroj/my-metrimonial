import { FaDownload } from "react-icons/fa6";
import Button from "../../../../components/UI/Button/Button";

const MyplanCard = () => {
  return (
    <ul className="flex justify-between items-center w-full bg-[#FFFFFF]">
      <li className="flex justify-center items-center bg-blue-200 text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[25%] min-h-[110px]">
        Platinum
      </li>
      <li className="flex justify-center items-center bg-blue-200 text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[35%] min-h-[110px]">
        12 Months(May 2024-June 2024)
      </li>
      <li className="flex justify-center items-center bg-blue-200 text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[15%] min-h-[110px]">
        Cost
      </li>
      <li className="flex justify-center items-center bg-blue-200 text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[25%] min-h-[110px]">
        <FaDownload className="text-[18px] md:hidden" />
        <Button
          text="DOWNLOAD"
          className="hidden md:flex rounded-none h-[40px] w-[140px] md:w-[160px] lg:w-[180px]"
          bgBtn="bg-[#000000] font-semibold"
        />
      </li>
    </ul>
  );
};

export default MyplanCard;
