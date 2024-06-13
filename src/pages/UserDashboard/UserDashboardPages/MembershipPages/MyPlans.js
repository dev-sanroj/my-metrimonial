import Button from "../../../../components/UI/Button/Button";

const MyPlans = (props) => {
  return (
    <div className="flex justify-center items-start p-4 bg-[#FFFFF4] shadow-[0_0_8px_rgba(0,0,0,0.1)] w-full rounded-lg mt-4">
      <div className="flex flex-col justify-start items-start w-full overflow-y-scroll min-h-[480px] max-h-[500px] pr-4">
        <ul className="flex justify-between items-center w-full bg-[#FFFFFF]">
          <li className="flex justify-center items-center font-extrabold text-[#454545] p-2 text-center border-[1px] w-[25%] h-[60px]">
            Plan type
          </li>
          <li className="flex justify-center items-center font-extrabold text-[#454545] p-2 text-center border-[1px] w-[35%] h-[60px]">
            Duration
          </li>
          <li className="flex justify-center items-center font-extrabold text-[#454545] p-2 text-center border-[1px] w-[15%] h-[60px]">
            Cost
          </li>
          <li className="flex justify-center items-center font-extrabold text-[#454545] p-2 text-center border-[1px] w-[25%] h-[60px]">
            Invoice
          </li>
        </ul>
        <ul className="flex justify-between items-center w-full bg-[#FFFFFF]">
          <li className="flex justify-center items-center text-[#959595] p-2 text-center border-[1px] w-[25%] h-[60px]">
            Platinum
          </li>
          <li className="flex justify-center items-center text-[#959595] p-2 text-center border-[1px] w-[35%] h-[60px]">
            12 Months(May 2024-June 2024)
          </li>
          <li className="flex justify-center items-center text-[#959595] p-2 text-center border-[1px] w-[15%] h-[60px]">
            Cost
          </li>
          <li className="flex justify-center items-center text-[#959595] p-2 text-center border-[1px] w-[25%] h-[60px]">
            <Button
              text="DOWNLOAD"
              className="bg-[#000000] rounded-none h-[40px] w-[180px]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPlans;
