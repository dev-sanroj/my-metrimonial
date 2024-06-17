import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import SelectInput from "../../components/UI/SelectInput/SelectInput";

const cityOptions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
];

const stateOptions = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Telangana",
  "Gujarat",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Maharashtra",
  "Rajasthan",
];

const pincodeOptions = [
  "400001",
  "110001",
  "560001",
  "500001",
  "380001",
  "600001",
  "700001",
  "395001",
  "411001",
  "302001",
];

const hobbiesInterestOptions = [
  "Reading",
  "Traveling",
  "Cooking",
  "Sports",
  "Music",
  "Art",
  "Photography",
  "Gardening",
  "Writing",
  "Gaming",
];

const countryOptions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
];

const SignUpStep4 = ({ onPrev }) => {
  return (
    <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center mr-2 w-[50%]">
          <SelectInput
            id="city"
            name="city"
            label="City:"
            options={cityOptions}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-end ml-2 w-[50%]">
          <SelectInput
            id="state"
            name="state"
            label="State:"
            options={stateOptions}
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
            options={countryOptions}
            className="w-full"
          />
        </div>
        <div className="flex justify-center items-center ml-2 w-[50%]">
          <Input
            id="pincode"
            placeholder="Enter pincode"
            label="Pin-Code:"
            options={pincodeOptions}
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
            options={hobbiesInterestOptions}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <div className="flex justify-between items-center w-full">
          <Button
            text="Prev"
            onButtonClick={() => onPrev()}
            className="w-[48%] h-[50px] font-bold text-[24px]"
            bgBtn="bg-[#333333]"
          />
          <Button
            text="Sign Up"
            className="w-[48%] h-[50px] font-bold text-[24px]"
          />
        </div>
      </div>
    </form>
  );
};

export default SignUpStep4;
