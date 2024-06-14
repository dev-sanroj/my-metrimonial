import SelectInput from "../../components/UI/SelectInput/SelectInput";

const SortMatchesHeader = (props) => {
  return (
    <div
      className={`${props.className} flex flex-col md:flex-row justify-between items-center lg:items-center w-[90%] rounded-lg border-2 border-[#FFC0CB]`}
    >
      <div className="flex justify-center md:justify-between items-center w-full md:w-[50%] ">
        <p className="flex justify-center items-center text-[#474747] text-[18px] md:text-[20px] font-normal text-center lg:text-start">
          Showing <span className="mx-1">32</span> Profiles
        </p>
      </div>
      <div className="flex justify-end items-center h-full w-full md:w-auto">
        <SelectInput
          id="sortby"
          label="Sort by"
          className="w-[150px] lg:!w-[180px] !h-[40px]"
          flexDirection="flex-row items-center"
          colorLabel="text-[#474747]"
          textLabel="text-[14px]"
        />
      </div>
    </div>
  );
};

export default SortMatchesHeader;
