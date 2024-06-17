import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import SignUpStep1 from "./SignUpStep1";

const Signup = (props) => {
  return (
    <Modal onHideSignup={props.onHideSignup}>
      <div className="flex flex-col justify-center items-center relative py-3 p-4 lg:min-w-[800px]">
        <div className="flex justify-center items-center w-full">
          <ul className="flex justify-center items-center w-full mb-2">
            <li className="flex justify-center items-center">
              <span
                className={`flex justify-center items-center ${"bg-[#FFC0CB]"} text-[#FFFFFF] font-semibold text-[24px] w-[50px] h-[50px] rounded-full`}
              >
                1
              </span>
              <span
                className={`flex justify-center items-center w-[100px] h-[2px] ${"bg-[#333333]"}`}
              ></span>
            </li>
            <li className="flex justify-center items-center">
              <span
                className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[50px] h-[50px] rounded-full`}
              >
                2
              </span>
              <span
                className={`flex justify-center items-center w-[100px] h-[2px] ${"bg-[#333333]"}`}
              ></span>
            </li>
            <li className="flex justify-center items-center">
              <span
                className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[50px] h-[50px] rounded-full`}
              >
                3
              </span>
              <span
                className={`flex justify-center items-center w-[100px] h-[2px] ${"bg-[#333333]"}`}
              ></span>
            </li>
            <li className="flex justify-center items-center">
              <span
                className={`flex justify-center items-center ${"bg-[#333333]"} text-[#FFFFFF] font-semibold text-[24px] w-[50px] h-[50px] rounded-full`}
              >
                4
              </span>
            </li>
          </ul>
          <IoCloseSharp
            onClick={props.onHideSignup}
            className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer right-2 top-2"
            size={28}
          />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
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
          <SignUpStep1 />
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
