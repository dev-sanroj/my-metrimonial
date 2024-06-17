import { FaCheckCircle } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
// import { VscEye } from "react-icons/vsc";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const SignUpStep1 = (props) => {
  return (
    <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
      {" "}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="mobile-number"
            placeholder="Enter mobile no"
            label="Mobile Number "
            message="Verified"
            messageIcon={<FaCheckCircle className="ml-1 text-[#75F94C]" />}
            className="w-full"
          />
        </div>

        <div className="flex justify-between items-end w-full md:w-[48%]">
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

          <Button className="rounded-xl font-bold my-1 px-">OK</Button>
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
        <Button className="w-full h-[60px] font-bold text-[24px]">Next</Button>
      </div>
    </form>
  );
};

export default SignUpStep1;
