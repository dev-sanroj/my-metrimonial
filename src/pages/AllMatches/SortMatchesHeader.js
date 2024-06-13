import SelectInput from "../../components/UI/SelectInput/SelectInput";

const SortMatchesHeader = (props) => {
  return (
    <div
      className={`${props.className} flex justify-between items-center w-[90%] rounded-lg border-2 border-[#FFC0CB] p-41`}
    >
      <div className="flex justify-between items-center">
        <p className="text-[#333333] text-[18px] font-medium">
          Showing 32 Profiles
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <SelectInput
          id="sortby"
          name="sortby"
          label="Sort by"
          optionTitle="Most relative"
          flexDirection="!flex-row justify-center items-center"
          className="!w-[180px]"
        />
      </div>
    </div>
  );
};

export default SortMatchesHeader;
