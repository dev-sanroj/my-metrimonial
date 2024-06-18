import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import SelectInput from "../../components/UI/SelectInput/SelectInput";

// Define the options arrays
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
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
            text="Next"
            onButtonClick={onNext}
            className="w-[48%] h-[50px] font-bold text-[24px]"
          />
        </div>
      </div>
    </form>
  );
};

export default SignUpStep3;
