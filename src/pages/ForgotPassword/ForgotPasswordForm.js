import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const ForgotPasswordForm = () => {
  return (
    <form className="flex flex-col justify-center items-start w-full mt-8">
      <Input
        id="mobile-number"
        placeholder="Enter mobile no"
        label="Mobile Number "
        message="Verified"
        messageIcon={<FaCheckCircle className="ml-1 text-[#75F94C]" />}
        className="w-[550px]"
      />

      <div className="flex justify-start items-center mt-4 mb-2">
        <input
          type="text"
          minLength="4"
          maxLength="4"
          placeholder="_ _ _ _"
          className="flex justify-center items-center text-[#858585] text-[20px] w-[90px] h-[50px] rounded-md border-2 border-[#858585] px-5 focus:outline-[#333333]"
        />
        <Button className="ml-2 rounded-xl font-bold">OK</Button>
        <Button className="bg-[#858585] text-[#333] ml-2 rounded-xl font-bold">
          Resend
        </Button>
      </div>

      <Input
        id="new-password"
        placeholder="Enter new password"
        label="New Password"
        className="w-[550px]"
      />

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button className="w-full h-[60px] font-bold text-[24px]">Done</Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
