import { BiSolidImageAdd } from "react-icons/bi";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

const BasicInfoForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-4">
        <label
          htmlFor="profile-photo"
          className="relative flex justify-center items-center border-[#9CA3AF] border-2 border-dashed rounded-full w-[90px] h-[90px] cursor-pointer"
        >
          <BiSolidImageAdd
            size={30}
            className="absolute bottom-2 -right-2 text-[#9CA3AF]"
          />
        </label>
        <input id="profile-photo" type="file" className="hidden" />
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="First Name"
            placeholder="Enter first name"
            required="true"
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Last Name"
            placeholder="Enter last name"
            required="true"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="email"
            label="Email"
            placeholder="Enter email"
            required="true"
          />
        </div>
        <div className="ml-2">
          <Input type="radio" label="Gender" placeholder="Enter last name" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            required="true"
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="City"
            placeholder="Enter city"
            required="true"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={props.onShowPersonalInfo}
          text="Next"
          className="font-black !px-20"
        />
      </div>
    </form>
  );
};

export default BasicInfoForm;
