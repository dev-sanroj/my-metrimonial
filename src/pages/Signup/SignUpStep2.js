import SelectInput from ".././../components/UI/SelectInput/SelectInput";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const SignUpStep2 = (props) => {
  return (
    <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="first-name"
            placeholder="Enter first name"
            label="First Name:"
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="last-name"
            placeholder="Enter last name"
            label="Last Name:"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="maritalstatus"
            name="maritalstatus"
            label="Marital Status:"
            options={[]}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-end w-full md:w-[48%]">
          <Input
            id="dateofbirth"
            placeholder="_ _/_ _/_ _ _ _"
            label="Date of Birth:"
            className="w-full"
          />
          {/* <div className="flex justify-between items-center mr-2 w-[30%]">
            <SelectInput
              id="maritalstatus"
              name="maritalstatus"
              select="Date"
              label="Date of Birth:"
              options={[]}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center mr-2 w-[30%]">
            <SelectInput
              id="maritalstatus"
              name="maritalstatus"
              select="Month"
              options={[]}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center mr-2 w-[30%]">
            <SelectInput
              id="maritalstatus"
              name="maritalstatus"
              select="Year"
              options={[]}
              className="w-full"
            />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-between items-end w-full md:w-[48%]">
          <div className="flex justify-between items-center w-[48%]">
            <SelectInput
              id="height"
              name="height"
              select="Select Ft._ _"
              label="Height:"
              options={[]}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-end w-[48%]">
            <SelectInput
              id="height"
              name="height"
              select="Select In._ _"
              options={[]}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="weight"
            name="weight"
            label="Weight:"
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

export default SignUpStep2;
