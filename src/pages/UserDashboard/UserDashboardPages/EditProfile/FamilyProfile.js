import { AiOutlineLoading } from "react-icons/ai";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { useState } from "react";

const fatherStatusOptions = [
  "Employed",
  "Self-employed",
  "Retired",
  "Unemployed",
  "Business Owner",
  "Deceased",
  "Student",
  "Homemaker",
  "Freelancer",
  "Part-time Worker",
  "Disabled",
  "Veteran",
  "Contractor",
  "Investor",
  "Consultant",
];

const motherStatusOptions = [
  "Employed",
  "Self-employed",
  "Homemaker",
  "Retired",
  "Unemployed",
  "Business Owner",
  "Deceased",
  "Student",
  "Freelancer",
  "Part-time Worker",
  "Disabled",
  "Veteran",
  "Contractor",
  "Investor",
  "Consultant",
];

const siblingOptions = [
  "None",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10 or more",
];

const familyTypeOptions = [
  "Nuclear Family",
  "Joint Family",
  "Extended Family",
  "Single-parent Family",
  "Blended Family",
  "Childless Family",
  "Stepfamily",
  "Other",
];

const familyValuesOptions = [
  "Traditional",
  "Modern",
  "Liberal",
  "Conservative",
  "Progressive",
  "Religious",
  "Secular",
  "Open-minded",
  "Close-knit",
  "Supportive",
  "Respectful",
  "Tolerant",
  "Adventurous",
  "Educational",
  "Community-oriented",
  "Other",
];

const FamilyProfile = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fatherName: "",
    motherName: "",
    fatherStatus: "",
    motherStatus: "",
    sibling: "",
    familyType: "",
    familyValues: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedFormData = { ...formData, [id]: value };

    setFormData(updatedFormData);
    setFormErrors({
      ...formErrors,
      [id]: "",
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    if (!formData.fatherName) {
      errors.fatherName = "Father name is required.";
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(formData.fatherName)) {
      errors.fatherName = "Only contain letters and spaces.";
      valid = false;
    }

    if (!formData.motherName) {
      errors.motherName = "Mother name is required.";
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(formData.motherName)) {
      errors.motherName = "Only contain letters and spaces.";
      valid = false;
    }

    if (!formData.fatherStatus) {
      errors.fatherStatus = "Please select father's status.";
      valid = false;
    }

    if (!formData.motherStatus) {
      errors.motherStatus = "Please select mother's status.";
      valid = false;
    }

    if (!formData.sibling) {
      errors.sibling = "Please select number of siblings.";
      valid = false;
    }

    if (!formData.familyType) {
      errors.familyType = "Please select family type.";
      valid = false;
    }

    if (!formData.familyValues) {
      errors.familyValues = "Please select family values.";
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
      // Post data to API
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="family">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Family Background
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="fatherName"
              label="Father Name:"
              placeholder="Enter father name"
              className="font-semibold cursor-pointer"
              value={formData.fatherName}
              onChange={handleChange}
              width="w-full"
              error={formErrors.fatherName}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="motherName"
              label="Mother Name:"
              placeholder="Enter mother name"
              value={formData.motherName}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.motherName}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="fatherStatus"
              label="Father's Status:"
              options={fatherStatusOptions}
              value={formData.fatherStatus}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.fatherStatus}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="motherStatus"
              label="Mother's Status:"
              options={motherStatusOptions}
              value={formData.motherStatus}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.motherStatus}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="sibling"
              label="Number of Siblings:"
              options={siblingOptions}
              value={formData.sibling}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.sibling}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="familyType"
              label="Family Type:"
              options={familyTypeOptions}
              value={formData.familyType}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.familyType}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="familyValues"
              label="Family Values:"
              options={familyValuesOptions}
              value={formData.familyValues}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.familyValues}
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

export default FamilyProfile;
