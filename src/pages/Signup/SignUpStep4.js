import Button from "../../components/UI/Button/Button";
import SelectInput from "../../components/UI/SelectInput/SelectInput";

const SignUpStep4 = (props) => {
  return (
    <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 bg-blue-100 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
      {" "}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center mr-2 w-[50%]">
          <SelectInput
            id="city"
            name="city"
            label="City:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-end ml-2 w-[50%]">
          <SelectInput
            id="state"
            name="state"
            label="State:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-end mr-2 w-[50%]">
          <SelectInput
            id="country"
            name="country"
            label="Country:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center ml-2 w-[50%]">
          <SelectInput
            id="pincode"
            name="pincode"
            label="Pin-Code:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-end w-full">
          <SelectInput
            id="hobbiesinterest"
            name="hobbiesinterest"
            label="Hobbies & Interest:"
            options={[]}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button className="w-full h-[60px] font-bold text-[24px]">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpStep4;
