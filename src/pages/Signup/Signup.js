import React, { useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import SignUpStep4 from "./SignUpStep4";

const Signup = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });
  console.log("formData: ", formData);

  const handleNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, [`step${currentStep}`]: data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SignUpStep1 onNext={handleNextStep} />;
      case 2:
        return <SignUpStep2 onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 3:
        return <SignUpStep3 onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 4:
        return <SignUpStep4 onPrev={handlePrevStep} />;
      default:
        return null;
    }
  };

  return (
    <Modal onHidePopup={props.onHideSignup}>
      <div className="flex flex-col justify-center items-center relative py-3 md:p-4 w-full lg:min-w-full">
        <div className="flex justify-center items-center w-full">
          <ul className="flex justify-center items-center w-full mb-2">
            {[1, 2, 3, 4].map((step) => (
              <li key={step} className="flex justify-center items-center">
                <span
                  className={`flex justify-center items-center ${
                    currentStep >= step ? "bg-[#FFC0CB]" : "bg-[#333333]"
                  } text-[#FFFFFF] font-semibold text-[24px] w-[30px] h-[30px] md:w-[40px] lg:w-[50px] md:h-[40px] lg:h-[50px] rounded-full`}
                >
                  {step}
                </span>
                {step < 4 && (
                  <span
                    className={`flex justify-center items-center w-[30px] md:w-[70px] lg:w-[100px] h-[2px] ${
                      currentStep > step ? "bg-[#FFC0CB]" : "bg-[#333333]"
                    }`}
                  ></span>
                )}
              </li>
            ))}
          </ul>
          <IoCloseSharp
            onClick={props.onHideSignup}
            className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer -right-1 -top-1 md:right-2 md:top-2"
            size={28}
          />
        </div>

        <div className="flex flex-col justify-start items-center w-full max-h-[450px] overflow-y-scroll">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-extrabold text-[26px] md:text-[32px] text-[#333333] text-center">
              Sign up to Matrimony
            </h2>
            <p className="font-medium text-[16px] text-[#333333]">
              Already a member?
              <button
                onClick={props.onShowSignIn}
                className="text-[#66B6FF] ml-2 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
          {renderStep()}
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
