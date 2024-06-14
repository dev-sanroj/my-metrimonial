import Button from "../../components/UI/Button/Button";

const AllMatchesPaginate = () => {
  return (
    <div className="flex justify-end items-center w-[90%] p-4 mt-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center mr-2">
          <Button
            text="Prev"
            className="!bg-[#FFFFFF] !shadow-transparent rounded-none !h-[36px] w-[50px] !border-[1px] !border-[#333333] hover:text-[#FF4061] active:text-[#333333]"
            colorBtn="text-[#333333]"
          />
          <span className="flex justify-center items-center font-bold text-[#FF4061] border-[1px] border-[#333333] mx-2 w-[36px] h-[36px]">
            1
          </span>
          <Button
            text="Next"
            className="!bg-[#FFFFFF] !shadow-transparent rounded-none !h-[36px] w-[50px] !border-[1px] !border-[#333333] hover:text-[#FF4061] active:text-[#333333]"
            colorBtn="text-[#333333]"
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
            className="h-[26px] w-[56px] text-[#FF4061] font-bold rounded-md px-2 mx-2 border-2 border-[#333333]"
          />
          <span className="text-[14px] font-medium text-[#333333]">of 100</span>
        </div>
      </div>
    </div>
  );
};

export default AllMatchesPaginate;
