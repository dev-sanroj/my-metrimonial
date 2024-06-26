import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import SelectInput from "../../components/UI/SelectInput/SelectInput";
import { AiOutlineLoading } from "react-icons/ai";

const religionOptions = [
  "Christianity",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Sikhism",
  "Judaism",
  "Bahá'í",
  "Jainism",
  "Shinto",
  "Taoism",
  "Zoroastrianism",
  "Other",
];

const communityOptions = [
  "Brahmin",
  "Kshatriya",
  "Vaishya",
  "Shudra",
  "Dalit",
  "Other Backward Class (OBC)",
  "Scheduled Tribes (ST)",
  "Scheduled Castes (SC)",
  "Christian",
  "Muslim",
  "Sikh",
  "Jain",
  "Parsi",
  "Buddhist",
  "Jewish",
];

const subCommunityOptions = [
  "Iyer",
  "Iyengar",
  "Rajput",
  "Maratha",
  "Agarwal",
  "Bania",
  "Reddy",
  "Yadav",
  "Kurmi",
  "Meena",
  "Gond",
  "Balija",
  "Madiga",
  "Roman Catholic",
  "Sunni",
  "Shia",
  "Ramgarhia",
  "Khalsa",
  "Digambar",
  "Svetambar",
  "Irani",
  "Ashkenazi",
  "Sephardic",
];

const motherTongueOptions = [
  "English",
  "Spanish",
  "Hindi",
  "Tamil",
  "Telugu",
  "Bengali",
  "Gujarati",
  "Marathi",
  "Punjabi",
  "Urdu",
]; // Add more as needed
const highestQualificationOptions = [
  "High School",
  "Bachelor's",
  "Master's",
  "PhD",
]; // Replace with actual qualification options
const occupationOptions = [
  "Engineer",
  "Doctor",
  "Teacher",
  "Artist",
  "Lawyer",
  "Businessperson",
]; // Replace with actual occupation options

const SignUpStep3 = ({ onPrev, onNext }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    religion: "",
    community: "",
    subCommunity: "",
    motherTongue: "",
    highestQualification: "",
    occupation: "",
  });

  const [formErrors, setFormErrors] = useState({
    religion: "",
    community: "",
    subCommunity: "",
    motherTongue: "",
    highestQualification: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {
      religion: "",
      community: "",
      subCommunity: "",
      motherTongue: "",
      highestQualification: "",
      occupation: "",
    };

    if (formData.religion === "") {
      errors.religion = "Religion is required";
      valid = false;
    }
    if (formData.community === "") {
      errors.community = "Community is required";
      valid = false;
    }
    if (formData.subCommunity === "") {
      errors.subCommunity = "Sub community is required";
      valid = false;
    }
    if (formData.motherTongue === "") {
      errors.motherTongue = "Mother tongue is required";
      valid = false;
    }
    if (formData.highestQualification === "") {
      errors.highestQualification = "Highest qualification is required";
      valid = false;
    }
    if (formData.occupation === "") {
      errors.occupation = "Occupation is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleOnNext = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!validateInputs()) {
      setIsLoading(false);
      return;
    }

    try {
      console.log(formData);
      // Post data to API
      onNext(formData);
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleOnNext}
      className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="religion"
            name="religion"
            label="Religion:"
            options={religionOptions}
            className="w-full"
            value={formData.religion}
            onChange={handleChange}
            error={formErrors.religion}
          />
        </div>
        <div className="flex justify-center items-end w-full md:w-[48%]">
          <SelectInput
            id="community"
            name="community"
            label="Community:"
            options={communityOptions}
            className="w-full"
            value={formData.community}
            onChange={handleChange}
            error={formErrors.community}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="subCommunity"
            name="subCommunity"
            label="Sub-Community:"
            options={subCommunityOptions}
            className="w-full"
            value={formData.subCommunity}
            onChange={handleChange}
            error={formErrors.subCommunity}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="motherTongue"
            name="motherTongue"
            label="Mother-Tongue:"
            options={motherTongueOptions}
            className="w-full"
            value={formData.motherTongue}
            onChange={handleChange}
            error={formErrors.motherTongue}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="highestQualification"
            name="highestQualification"
            label="Highest Qualification:"
            options={highestQualificationOptions}
            className="w-full"
            value={formData.highestQualification}
            onChange={handleChange}
            error={formErrors.highestQualification}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="occupation"
            name="occupation"
            label="Occupation:"
            options={occupationOptions}
            className="w-full"
            value={formData.occupation}
            onChange={handleChange}
            error={formErrors.occupation}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <div className="flex justify-between items-center w-full">
          <Button
            text="Prev"
            onButtonClick={onPrev}
            className="w-[48%] h-[50px] font-bold text-[24px]"
            bgBtn="bg-[#333333] hover:bg-[#222222 ]"
          />
          <Button
            text={isLoading ? "Loading..." : "Next"}
            className="w-[48%] h-[50px] font-bold text-[24px]"
          >
            {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpStep3;
