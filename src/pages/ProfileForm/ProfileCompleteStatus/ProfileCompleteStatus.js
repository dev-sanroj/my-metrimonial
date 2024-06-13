import Button from "../../../components/UI/Button/Button";
import Modal from "../../../components/UI/Modal/Modal";
import { FaCheckCircle } from "react-icons/fa";

const ProfileCompleteStatus = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onHideProfileCompleteStatus();
  };

  return (
    <Modal>
      <div className="flex flex-col justify-center items-center relative py-10 border p-4">
        <div className="flex justify-center items-center text-[#333333] text-[24px] font-bold">
          <FaCheckCircle className="text-[#FFC0CB] mr-2" size={30} />
          You have successfully completed Your Profile.
        </div>
        <div className="mt-10 mb-10">
          <Button text="Done" className="px-20" onButtonClick={submitHandler} />
        </div>
      </div>
    </Modal>
  );
};

export default ProfileCompleteStatus;
