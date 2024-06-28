import { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import EditProfileLayout from "./EditProfileLayout";
import { AiOutlineLoading } from "react-icons/ai";

const AboutMore = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [aboutYourselfWords, setAboutYourselfWords] = useState(0);
  const [aboutYourFamilyWords, setAboutYourFamilyWords] = useState(0);

  const [aboutYourselfText, setAboutYourselfText] = useState("");
  const [aboutYourFamilyText, setAboutYourFamilyText] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const maxLetters = 250;

  const handleAboutYourselfChange = (e) => {
    const letterCount = e.target.value.trim().length;
    setAboutYourselfText(e.target.value);
    setAboutYourselfWords(letterCount);
  };
  const handleAboutYourFamilyChange = (e) => {
    const letterCount = e.target.value.trim().length;
    setAboutYourFamilyText(e.target.value);
    setAboutYourFamilyWords(letterCount);
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    if (!aboutYourselfText.trim()) {
      errors.aboutYourselfText = "About Yourself is required.";
      valid = false;
    } else if (/^\d+$/.test(aboutYourselfText.trim())) {
      errors.aboutYourselfText = "Not contain only numbers.";
      valid = false;
    }

    if (!aboutYourFamilyText.trim()) {
      errors.aboutYourFamilyText = "About Your Family is required.";
      valid = false;
    } else if (/^\d+$/.test(aboutYourFamilyText.trim())) {
      errors.aboutYourFamilyText = "Not contain only numbers.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleOnSave = () => {
    if (!validateInputs()) {
      return;
    }

    const data = {
      aboutYourSelf: aboutYourselfText.trim(),
      aboutYourFamily: aboutYourFamilyText.trim(),
    };

    console.log(data);

    setIsLoading(true);
    setError(null);

    try {
      // Post data to API
      props.onShowEditSuccess();
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="aboutmore">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          About More
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center my-2 w-full">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="aboutyourself"
                className="text-[#333333] font-medium mb-1"
              >
                About Yourself:
              </label>
              <span className="text-[14px] text-[#333333]">
                {aboutYourselfWords}/{maxLetters}
              </span>
            </div>
            <textarea
              id="aboutyourself"
              placeholder="Write about yourself"
              className="focus:outline-[#66B6FF] text-[#858585] border-[2px] border-[#858585] text-[14px] lg:text-16px px-2 py-2 w-full rounded-md min-h-[120px]"
              onChange={handleAboutYourselfChange}
              maxLength={maxLetters}
            />
            {formErrors.aboutYourselfText && (
              <p className="text-[14px] text-[#FF4061] font-medium">
                {formErrors.aboutYourselfText}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center my-2 w-full">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="aboutyourfamily"
                className="text-[#333333] font-medium mb-1"
              >
                About Your Family:
              </label>
              <span className="text-[14px] text-[#333333]">
                {aboutYourFamilyWords}/{maxLetters}
              </span>
            </div>
            <textarea
              id="aboutyourfamily"
              placeholder="Write about your family"
              className="focus:outline-[#66B6FF] text-[#858585] border-[2px] border-[#858585] text-[14px] lg:text-16px px-2 py-2 w-full rounded-md min-h-[120px]"
              onChange={handleAboutYourFamilyChange}
              maxLength={maxLetters}
            />
            {formErrors.aboutYourFamilyText && (
              <p className="text-[14px] text-[#FF4061] font-medium">
                {formErrors.aboutYourFamilyText}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-start items-center my-5 w-full">
          <Button
            onButtonClick={handleOnSave}
            text={isLoading ? "Loading..." : "Save"}
            className="font-bold w-[130px] h-[50px]"
          >
            {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
          </Button>
        </div>
      </div>
    </EditProfileLayout>
  );
};

export default AboutMore;
