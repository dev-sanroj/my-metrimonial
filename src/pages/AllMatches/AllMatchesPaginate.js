import Button from "../../components/UI/Button/Button";

const AllMatchesPaginate = () => {
  return (
    <div className="flex justify-end items-center w-[90%] p-4 mt-4">
      <div className="flex justify-between items-center md:w-[60%] lg:w-[55%] ">
        <div className="flex justify-between items-center mr-2">
          <Button
            text="Prev"
            className="!bg-[#FFFFFF] !shadow-transparent text-[14px] lg:text-[20px] font-light rounded-none w-[40px] lg:w-[72px] !border-[1px] !border-[#333333] hover:text-[#FF4061] active:text-[#333333]"
            colorBtn="text-[#333333]"
            heightBtn="h-[30px] lg:h-[36px]"
          />
          <span className="flex justify-center items-center font-semibold text-[24px] text-[#FF4061] border-[1px] border-[#333333] mx-2 p-2 h-[30px] lg:h-[36px]">
            1
          </span>
          <Button
            text="Next"
            className="!bg-[#FFFFFF] !shadow-transparent text-[14px] lg:text-[20px] font-light rounded-none w-[40px] lg:w-[72px] !border-[1px] !border-[#333333] hover:text-[#FF4061] active:text-[#333333]"
            colorBtn="text-[#333333]"
            heightBtn="h-[30px] lg:h-[36px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[14px] font-medium text-[#333333] r-2">
            page
          </span>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="h-[36px] w-[40px] lg:w-[56px] text-[#333333] font-medium rounded-md px-2 mx-2 border-[1px] border-[#999999]"
          />
          <span className="text-[14px] font-medium text-[#333333]">of 100</span>
        </div>
      </div>
    </div>
  );
};

export default AllMatchesPaginate;
