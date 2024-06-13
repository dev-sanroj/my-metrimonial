import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = (props) => {
  return (
    <Modal onHideSignup={props.onHideForgotPassword}>
      <div className="flex justify-center items-center relative py-5 border p-4">
        <IoCloseSharp
          onClick={props.onHideForgotPassword}
          className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer right-2 top-2"
          size={28}
        />

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start min-w-[400px]">
            <h2 className="font-extrabold text-[32px] text-[#333333]">
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
