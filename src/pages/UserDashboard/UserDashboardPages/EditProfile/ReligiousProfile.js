import { AiOutlineLoading } from "react-icons/ai";
import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { useState } from "react";
import Input from "../../../../components/UI/Input/Input";

const religionOptions = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Jain",
  "Parsi",
  "Jewish",
  "Bahá'í",
  "Other",
  "Agnostic",
  "Atheist",
  "Prefer not to say",
];

const motherTongueOptions = [
  "Assamese",
  "Bengali",
  "Bodo",
  "Dogri",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Manipuri",
  "Marathi",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
  "Other",
];

const communityOptions = [
  "Kayastha",
  "Rajput",
  "Agarwal",
  "Gujarati",
  "Punjabi",
  "Bengali",
  "Patel",
  "Tamil",
  "Malayali",
  "Parsi",
  "Reddy",
  "Maratha",
  "Nair",
  "Jat",
  "Gujjar",
  "Other",
];

const subCommunityOptions = {
  Kayastha: ["Kayastha 1", "Kayastha 2", "Other"],
  Rajput: ["Rajput 1", "Rajput 2", "Other"],
  Agarwal: ["Agarwal 1", "Agarwal 2", "Other"],
  Gujarati: ["Gujarati 1", "Gujarati 2", "Other"],
  Punjabi: ["Punjabi 1", "Punjabi 2", "Other"],
  Bengali: ["Bengali 1", "Bengali 2", "Other"],
  Patel: ["Patel 1", "Patel 2", "Other"],
  Tamil: ["Tamil 1", "Tamil 2", "Other"],
  Malayali: ["Malayali 1", "Malayali 2", "Other"],
  Parsi: ["Parsi 1", "Parsi 2", "Other"],
  Reddy: ["Reddy 1", "Reddy 2", "Other"],
  Maratha: ["Maratha 1", "Maratha 2", "Other"],
  Nair: ["Nair 1", "Nair 2", "Other"],
  Jat: ["Jat 1", "Jat 2", "Other"],
  Gujjar: ["Gujjar 1", "Gujjar 2", "Other"],
};

const ReligiousProfile = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    religion: "",
    motherTongue: "",
    community: "",
    subCommunity: "",
    gothra: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedFormData = { ...formData, [id]: value };
    if (id === "community") {
      const selectedCommunity = communityOptions[value] || [];
      if (selectedCommunity) {
        updatedFormData = {
          ...updatedFormData,
          subCommunity: selectedCommunity[0],
        };
      }
    }
    setFormData(updatedFormData);
    setFormErrors({
      ...formErrors,
      [id]: "",
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    if (!formData.religion) {
      errors.religion = "Religion is required.";
      valid = false;
    }
    if (!formData.motherTongue) {
      errors.motherTongue = "Mother tongue is required.";
      valid = false;
    }
    if (!formData.community) {
      errors.community = "Community is required.";
      valid = false;
    }
    if (!formData.subCommunity) {
      errors.subCommunity = "Sub-community is required.";
      valid = false;
    }
    if (!formData.gothra) {
      errors.gothra = "Place of birth is required.";
      valid = false;
    } else if (/\d/.test(formData.gothra)) {
      errors.gothra = "Place of birth cannot contain numbers.";
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
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="religious">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Religious Information
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="religion"
              label="Religion:"
              options={religionOptions}
              value={formData.religion}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.religion}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="motherTongue"
              label="Mother Tongue:"
              options={motherTongueOptions}
              value={formData.motherTongue}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.motherTongue}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="community"
              label="Community:"
              options={communityOptions}
              value={formData.community}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.community}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="subCommunity"
              label="Sub-Community:"
              options={subCommunityOptions[formData.community] || []}
              value={formData.subCommunity}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.subCommunity}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="gothra"
              label="Gothra:"
              placeholder="Enter your gothra"
              value={formData.gothra}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.gothra}
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

export default ReligiousProfile;
