import { FaCheckCircle } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
// import { VscEye } from "react-icons/vsc";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const SignUpForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-start w-full mt-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center mr-2">
          <Input
            id="first-name"
            placeholder="Enter first name"
            label="First Name"
            className="w-[260px]"
          />
        </div>
        <div className="flex justify-center items-center ml-2">
          <Input
            id="last-name"
            placeholder="Enter last name"
            label="Last Name"
            className="w-[260px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="flex justify-center items-center mr-2">
          <Input
            id="mobile-number"
            placeholder="Enter mobile no"
            label="Mobile Number "
            message="Verified"
            messageIcon={<FaCheckCircle className="ml-1 text-[#75F94C]" />}
            className="w-[260px]"
          />
        </div>

        <div className="flex justify-between items-end ml-2 w-full ">
          <div className="flex flex-col justify-center items-start">
            <label className="text-[#333333] font-medium my-1">OTP:</label>
            <input
              id="otp"
              type="text"
              placeholder="_ _ _ _"
              maxLength={4}
              minLength={4}
              label="OTP"
              className="px-3 focus:outline-[#333333] border-2 border-[#858585] rounded-lg h-[50px] w-[80px] text-[20px]"
            />
          </div>

          <Button className="rounded-xl font-bold my-1">OK</Button>
          <Button className="bg-[#858585] text-[#333] my-1 rounded-xl font-bold">
            Resend
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <Input
          inputBtnHandler={""}
          id="email"
          placeholder="Enter email"
          label="email"
          className="w-full"
        />
      </div>
      <div className="flex justify-between items-center w-full ">
        <Input
          inputBtnHandler={""}
          id="password"
          placeholder="Enter password"
          label="Password"
          className="w-full"
          inputBtn={<VscEyeClosed className="text-[#858585]" />}
        />
      </div>

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button className="w-full h-[60px] font-bold text-[24px]">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
