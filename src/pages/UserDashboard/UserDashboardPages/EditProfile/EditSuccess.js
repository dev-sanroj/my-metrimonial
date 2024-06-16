import { FaCheckCircle } from "react-icons/fa";
import Modal from "../../../../components/UI/Modal/Modal";
import Button from "../../../../components/UI/Button/Button";

const EditSuccess = (props) => {
  return (
    <Modal onHideSignup={props.onHideEditSuccess}>
      <div className="flex flex-col justify-center items-center relative py-5 p-4 w-[250px] md:w-[500px] lg:w-[700px]">
        <div className="flex justify-between items-center my-4">
          <FaCheckCircle className="mr-1 text-[#4CAF50] text-[32px] md:text-[40px]" />
          <span className="text-[18px] md:text-[26px] font-bold text-[#333333] ml-1">
            Update Success
          </span>
        </div>
        <div className="flex justify-center items-center my-4">
          <Button
            text="Done"
            className="font-bold h-[50px] w-[150px]"
            onButtonClick={() => {
              props.onHideEditSuccess();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditSuccess;
