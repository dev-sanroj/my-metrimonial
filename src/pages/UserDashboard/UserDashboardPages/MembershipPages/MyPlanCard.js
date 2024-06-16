import Button from "../../../../components/UI/Button/Button";

const MyplanCard = () => {
  return (
    <ul className="flex justify-between items-center w-full bg-[#FFFFFF]">
      <li className="flex justify-center items-center text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[25%] h-[60px]">
        Platinum
      </li>
      <li className="flex justify-center items-center text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[35%] h-[60px]">
        12 Months(May 2024-June 2024)
      </li>
      <li className="flex justify-center items-center text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[15%] h-[60px]">
        Cost
      </li>
      <li className="flex justify-center items-center text-[14px] lg:text-[16px] text-[#212529] p-2 text-center border-[1px] w-[25%] h-[60px]">
        <Button
          text="DOWNLOAD"
          className="rounded-none h-[40px] w-[180px]"
          bgBtn="bg-[#000000] font-semibold"
        />
      </li>
    </ul>
  );
};

export default MyplanCard;
