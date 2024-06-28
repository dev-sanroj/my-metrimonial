import { AiOutlineLoading } from "react-icons/ai";
import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { useState } from "react";

const qualificationTypeOptions = [
  "High School",
  "Undergraduate",
  "Postgraduate",
  "Doctorate",
  "Vocational Training",
];
const highestQualificationOptions = {
  "High School": ["High School Diploma", "GED"],
  Undergraduate: [
    "Associate Degree",
    "Bachelor's Degree (B.A.)",
    "Bachelor's Degree (B.Sc.)",
    "Bachelor's Degree (B.Com.)",
    "Bachelor's Degree (B.Eng.)",
    "Bachelor's Degree (B.Tech.)",
  ],
  Postgraduate: [
    "Postgraduate Diploma",
    "Master's Degree (M.A.)",
    "Master's Degree (M.Sc.)",
    "Master's Degree (M.Com.)",
    "Master's Degree (M.Eng.)",
    "Master's Degree (MBA)",
    "Master's Degree (M.Tech.)",
    "Postgraduate Certificate",
  ],
  Doctorate: [
    "Doctor of Philosophy (Ph.D.)",
    "Doctor of Education (Ed.D.)",
    "Doctor of Business Administration (DBA)",
    "Professional Doctorate (D.Eng.)",
    "Professional Doctorate (D.Sc.)",
    "Professional Doctorate (D.M.)",
    "Professional Doctorate (D.Phil.)",
  ],
  "Vocational Training": [
    "Certificate",
    "Diploma",
    "Advanced Diploma",
    "Professional Certification (PMP)",
    "Professional Certification (CPA)",
    "Professional Certification (CISSP)",
  ],
};
const occupationOptions = [
  "Student",
  "Employed",
  "Self-employed",
  "Unemployed",
  "Retired",
];
const manglikStatus = [
  "Manglik",
  "Non-Manglik",
  "Partial Manglik",
  "Don't Know",
];
const annualIncomeOptions = [
  "₹1,00000 - ₹2,00000",
  "₹2,00000 - ₹3,00000",
  "₹3,00000 - ₹4,00000",
  "₹4,00000 - ₹5,00000",
  "₹5,00000 - ₹6,00000",
  "₹6,00000 - ₹7,00000",
  "₹7,00000 - ₹8,00000",
  "₹8,00000 - ₹9,00000",
  "₹9,00000 - ₹10,00000",
  "₹100,000+",
];

const MatchPreferences = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    qualificationType: "",
    highestQualification: "",
    occupation: "",
    annualIncome: "",
    manglicStatus: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedFormData = { ...formData, [id]: value };
    const newFormErrors = { ...formErrors };
    if (id === "qualificationType") {
      const selectedHighestQualification =
        highestQualificationOptions[value] || [];
      if (selectedHighestQualification) {
        updatedFormData = {
          ...updatedFormData,
          subCommunity: selectedHighestQualification[0],
        };
      }
    } else if (id === "occupation") {
      const selectedPosition = occupationOptions[value] || [];
      if (selectedPosition) {
        updatedFormData = {
          ...updatedFormData,
          subCommunity: selectedPosition[0],
        };
      }
    } else if (id === "highestQualification" && !formData.qualificationType) {
      newFormErrors.qualificationType =
        "Please select a qualification type first.";
    }
    setFormData(updatedFormData);
    setFormErrors(newFormErrors);
    setFormErrors({
      ...formErrors,
      [id]: "",
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    if (!formData.qualificationType) {
      errors.qualificationType = "Qualification type is required.";
      valid = false;
    }
    if (!formData.highestQualification) {
      errors.highestQualification = "Highest qualification is required.";
      valid = false;
    }

    if (!formData.occupation) {
      errors.occupation = "Occupation is required.";
      valid = false;
    }
    if (!formData.annualIncome) {
      errors.annualIncome = "Annual income is required.";
      valid = false;
    }
    if (!formData.manglicStatus) {
      errors.manglicStatus = "Manglic status is required.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleOnSave = () => {
    setIsLoading(true);
    setError(null);

    if (!validateInputs()) {
      setIsLoading(false);
      return;
    }

    try {
      console.log(formData);
      props.onShowEditSuccess();
      // Post data to API
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EditProfileLayout
      onShowSignUp={props.onShowSignUp}
      editPage="matchpreferences"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Lifestyle & Social Media
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="qualificationType"
              label="Qualification-Type:"
              options={qualificationTypeOptions}
              value={formData.qualificationType}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.qualificationType}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="highestQualification"
              label="Highest Qualification:"
              options={
                highestQualificationOptions[formData.qualificationType] || []
              }
              value={formData.highestQualification}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.highestQualification}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="occupation"
              label="Occupation:"
              options={occupationOptions}
              value={formData.occupation}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.occupation}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="annualIncome"
              label="Annual-Income:"
              options={annualIncomeOptions}
              value={formData.annualIncome}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.annualIncome}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="manglicStatus"
              options={manglikStatus}
              label="Manglic Status:"
              value={formData.manglicStatus}
              onChange={handleChange}
              className="border-2 cursor-pointer"
              width="w-full"
              error={formErrors.manglicStatus}
            />
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

export default MatchPreferences;
