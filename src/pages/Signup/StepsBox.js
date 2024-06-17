const StepsBox = (props) => {
  return (
    <ul className="flex justify-center items-center w-full mb-2">
      <li className="flex justify-center items-center">
        <span
          className={`flex justify-center items-center ${"bg-[#FFC0CB]"} text-[#FFFFFF] font-semibold text-[24px] w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] rounded-full`}
        >
          1
        </span>
        <span
          className={`flex justify-center items-center w-[30px] md:w-[70px] lg:w-[100px] h-[2px] ${"bg-[#333333]"}`}
        ></span>
      </li>
      <li className="flex justify-center items-center">
        <span
          className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] rounded-full`}
        >
          2
        </span>
        <span
          className={`flex justify-center items-center w-[30px] md:w-[70px] lg:w-[100px] h-[2px] ${"bg-[#333333]"}`}
        ></span>
      </li>
      <li className="flex justify-center items-center">
        <span
          className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] rounded-full`}
        >
          3
        </span>
        <span
          className={`flex justify-center items-center w-[30px] md:w-[70px] lg:w-[100px] h-[2px] ${"bg-[#333333]"}`}
        ></span>
      </li>
      <li className="flex justify-center items-center">
        <span
          className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] rounded-full`}
        >
          4
        </span>
      </li>
    </ul>
  );
};

export default StepsBox;
