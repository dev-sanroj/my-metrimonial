import { useState } from "react";

const AboutFamily = ({ aboutText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const getDisplayText = () => {
    return isExpanded ? aboutText : aboutText.slice(0, 500);
  };
  return (
    <li className="flex flex-col justify-start items-start w-full my-2">
      <span className="font-medium text-[#555555] text-[16px] mx-2">
        About My Family:
      </span>
      <span className="mt-2 text-[#616161] font-normal text-[16px] ml-2">
        {getDisplayText()}
        <span
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className="text-[#FF4061] cursor-pointer"
        >
          {isExpanded ? "...less" : "...more"}
        </span>
      </span>
    </li>
  );
};

export default AboutFamily;
