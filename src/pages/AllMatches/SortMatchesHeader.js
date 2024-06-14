import SelectInput from "../../components/UI/SelectInput/SelectInput";

const SortMatchesHeader = (props) => {
  return (
    <div
      className={`${props.className} flex justify-between items-start lg:items-center w-[90%] rounded-lg border-2 border-[#FFC0CB]`}
    >
      <div className="flex justify-between items-center w-[50%]">
        <p className="flex flex-col lg:flex-row justify-center items-center text-[#333333] text-[18px] font-medium text-center lg:text-start">
          Showing <span className="text-[#FF4060]">32</span> Profiles
        </p>
      </div>
      <div className="flex justify-end items-center h-full">
        <SelectInput
          id="sortby"
          name="sortby"
          label="Sort by"
          optionTitle="Most relative"
          flexDirection="flex-col lg:!flex-row justify-center items-start lg:items-center"
          className="w-[150px] lg:!w-[180px]"
        />
      </div>
    </div>
  );
};

export default SortMatchesHeader;
