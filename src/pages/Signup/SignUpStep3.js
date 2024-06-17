import Button from "../../components/UI/Button/Button";
import SelectInput from "../../components/UI/SelectInput/SelectInput";

const SignUpStep3 = (props) => {
  return (
    <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="religion"
            name="religion"
            label="Religion:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-end w-full md:w-[48%]">
          <SelectInput
            id="community"
            name="community"
            label="Community:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="subcommunity"
            name="subcommunity"
            label="Sub-Community:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="mothertongue"
            name="mothertongue"
            label="Mother-Tongue:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="highestqualification"
            name="highestqualification"
            label="Highest Qualification:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="occupation"
            name="occupation"
            label="Occupation:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button className="w-full h-[60px] font-bold text-[24px]">Next </Button>
      </div>
    </form>
  );
};

export default SignUpStep3;
