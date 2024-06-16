import MyPlanCard from "./MyPlanCard";

const MyPlans = (props) => {
  return (
    <div className="flex justify-center items-start p-2  md:p-4 bg-[#FFFFF4] shadow-[0_0_8px_rgba(0,0,0,0.1)] w-full rounded-lg mt-4">
      <div className="flex flex-col justify-start items-start w-full overflow-y-scroll min-h-[480px] max-h-[500px] pr-2 md:pr-4">
        <ul className="flex justify-between items-center w-full bg-[#FFFFFF]">
          <li className="flex justify-center items-center font-bold text-[14px] md:text-[16px] text-[#212529] md:p-2 text-center border-[1px] w-[25%] h-[60px]">
            Plan type
          </li>
          <li className="flex justify-center items-center font-bold text-[14px] md:text-[16px] text-[#212529] md:p-2 text-center border-[1px] w-[35%] h-[60px]">
            Duration
          </li>
          <li className="flex justify-center items-center font-bold text-[14px] md:text-[16px] text-[#212529] md:p-2 text-center border-[1px] w-[15%] h-[60px]">
            Cost
          </li>
          <li className="flex justify-center items-center font-bold text-[14px] md:text-[16px] text-[#212529] md:p-2 text-center border-[1px] w-[25%] h-[60px]">
            Invoice
          </li>
        </ul>
        <MyPlanCard />
        <MyPlanCard />
        <MyPlanCard />
      </div>
    </div>
  );
};

export default MyPlans;
