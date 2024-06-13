import { VscEyeClosed } from "react-icons/vsc";
// import { VscEye } from "react-icons/vsc";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const SignInForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-start w-full mt-8 bg-[]">
      <Input
        id="mobile-number"
        placeholder="Enter mobile or email"
        label="Mobile Number or Email id"
        // message="Verified"
        className="w-[550px]"
      />

      <Input
        id="password"
        placeholder="Enter password"
        label="Password"
        inputBtn={<VscEyeClosed className="text-[#858585]" />}
        className="w-[550px]"
      />

      <p
        onClick={props.onShowForgotPassword}
        className="text-[#66B6FF] ml-2 hover:underline cursor-pointer"
      >
        Forgot Password?
      </p>

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button className="w-full h-[60px] font-bold text-[24px]">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
