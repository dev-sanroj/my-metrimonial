import { IoCloseSharp } from "react-icons/io5";
import Modal from "../../../components/UI/Modal/Modal";
import Form5Step from "../Form5Step/Form5Step";
import BasicInfoForm from "./BasicInfoForm";

const BasicInfo = (props) => {
  return (
    <Modal onHideSignup={props.onHideBasicInfoForm}>
      <div className="flex flex-col justify-center items-center relative py-5 border p-4">
        <div className="flex justify-between items-center px-2 w-full">
          <button className="font-bold text-[18px] active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer">
            Back
          </button>

          <Form5Step
            onShowBasicInfo={props.onShowBasicInfo}
            onShowPersonalInfo={props.onShowPersonalInfo}
            onShowFamilyLifestyle={props.onShowFamilyLifestyle}
            onShowProfessionalDetails={props.onShowProfessionalDetails}
            onShowSocialMedia={props.onShowSocialMedia}
            fillStep1="#FFC0CB"
            fillStep2="#333333"
            fillStep3="#333333"
            fillStep4="#333333"
            fillStep5="#333333"
          />

          <IoCloseSharp
            onClick={props.onHideBasicInfo}
            className="active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer "
            size={28}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="flex flex-col justify-center items-center min-w-[500px]">
            <h2 className="font-extrabold text-[32px] text-[#FF4061]">
              Basic Information
            </h2>
          </div>
          <BasicInfoForm onShowPersonalInfo={props.onShowPersonalInfo} />
        </div>
      </div>
    </Modal>
  );
};

export default BasicInfo;
