import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = (props) => {
  return (
    <Modal onHideSignup={props.onHideForgotPassword}>
      <div className="flex flex-col justify-center items-center relative py-3 md:p-4 w-full lg:min-w-full">
        <div className="flex justify-center items-center w-full mb-2">
          <IoCloseSharp
            onClick={props.onHideForgotPassword}
            className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer -right-1 -top-1 md:right-2 md:top-2"
            size={28}
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-extrabold text-[26px] md:text-[32px] text-[#333333] text-center">
              Reset Your Password
            </h2>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
