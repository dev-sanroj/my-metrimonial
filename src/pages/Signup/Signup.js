import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import SignUpStep4 from "./SignUpStep4";
import StepsBox from "./StepsBox";

const Signup = (props) => {
  return (
    <Modal onHideSignup={props.onHideSignup}>
      <div className="flex flex-col justify-center items-center relative py-3 md:p-4 w-full md:w-[600px] lg:min-w-[800px]">
        <div className="flex justify-center items-center w-full">
          <StepsBox />
          <IoCloseSharp
            onClick={props.onHideSignup}
            className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer right-2 top-2"
            size={28}
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-extrabold text-[26px] md:text-[32px] text-[#333333] text-center">
              Sign up to Matrimony
            </h2>
            <p className="font-medium text-[16px] text-[#333333]">
              Already a member?
              <button
                onClick={props.onShowSignIn}
                href="/"
                className="text-[#66B6FF] ml-2 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
          <SignUpStep1 />
          {/* <SignUpStep2 /> */}
          {/* <SignUpStep3 /> */}
          {/* <SignUpStep4 /> */}
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
