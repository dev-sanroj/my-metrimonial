const Form5Step = (props) => {
  return (
    <ul className="flex justify-center items-center mx-10">
      <li
        onClick={props.onShowBasicInfo}
        className="flex justify-center items-center cursor-pointer"
      >
        <span
          className={`bg-[${
            props.fillStep1 ? props.fillStep1 : "#333333"
          }] flex justify-center items-center text-[24px] text-[#FFFFFF] font-extrabold w-[50px] h-[50px] rounded-full`}
        >
          1
        </span>
        <span
          className={`bg-[${
            props.fillStep2 ? props.fillStep2 : "#333333"
          }] w-[60px] h-[2px] rounded-full`}
        ></span>
      </li>
      <li
        onClick={props.onShowPersonalInfo}
        className="flex justify-center items-center cursor-pointer"
      >
        <span
          className={`bg-[${
            props.fillStep2 ? props.fillStep2 : "#333333"
          }] flex justify-center items-center text-[24px] text-[#FFFFFF] font-extrabold w-[50px] h-[50px] rounded-full`}
        >
          2
        </span>
        <span
          className={`bg-[${
            props.fillStep3 ? props.fillStep3 : "#333333"
          }] w-[60px] h-[2px] rounded-full`}
        ></span>
      </li>
      <li
        onClick={props.onShowFamilyLifestyle}
        className="flex justify-center items-center cursor-pointer"
      >
        <span
          className={`bg-[${
            props.fillStep3 ? props.fillStep3 : "#333333"
          }] flex justify-center items-center text-[24px] text-[#FFFFFF] font-extrabold w-[50px] h-[50px] rounded-full`}
        >
          3
        </span>
        <span
          className={`bg-[${
            props.fillStep4 ? props.fillStep4 : "#333333"
          }] w-[60px] h-[2px] rounded-full`}
        ></span>
      </li>
      <li
        onClick={props.onShowProfessionalDetails}
        className="flex justify-center items-center cursor-pointer"
      >
        <span
          className={`bg-[${
            props.fillStep4 ? props.fillStep4 : "#333333"
          }] flex justify-center items-center text-[24px] text-[#FFFFFF] font-extrabold w-[50px] h-[50px] rounded-full`}
        >
          4
        </span>
        <span
          className={`bg-[${
            props.fillStep5 ? props.fillStep5 : "#333333"
          }] w-[60px] h-[2px] rounded-full`}
        ></span>
      </li>
      <li
        onClick={props.onShowSocialMedia}
        className="flex justify-center items-center cursor-pointer"
      >
        <span
          className={`bg-[${
            props.fillStep5 ? props.fillStep5 : "#333333"
          }] flex justify-center items-center text-[24px] text-[#FFFFFF] font-extrabold w-[50px] h-[50px] rounded-full`}
        >
          5
        </span>
      </li>
    </ul>
  );
};

export default Form5Step;
