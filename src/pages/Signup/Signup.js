import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import SignUpForm from "./SignUpForm";

const Signup = (props) => {
  return (
    <Modal onHideSignup={props.onHideSignup}>
      <div className="flex justify-center items-center relative py-5 border p-4">
        <IoCloseSharp
          onClick={props.onHideSignup}
          className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer right-2 top-2"
          size={28}
        />

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start min-w-[400px]">
            <h2 className="font-extrabold text-[32px] text-[#333333]">
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
          <SignUpForm />
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
