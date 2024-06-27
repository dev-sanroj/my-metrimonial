import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import MultipleHobbiesSelect from "../../../../components/UI/SelectInput/MultipleHobbiesSelect";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const PersonalProfile = (props) => {
  const hobbiesOptions = [
    "Reading",
    "Writing",
    "Drawing/Painting",
    "Photography",
    "Music (Listening)",
    "Music (Playing Instrument)",
    "Singing",
    "Dancing",
    "Cooking",
    "Baking",
    "Gardening",
    "Traveling",
    "Hiking",
    "Camping",
    "Sports (Playing)",
    "Sports (Watching)",
    "Fitness/Exercise",
    "Yoga",
    "Meditation",
    "Volunteering",
    "Learning New Skills",
    "DIY Projects",
    "Watching Movies/TV Shows",
    "Gaming",
    "Collecting (Stamps, Coins, etc.)",
    "Fashion/Shopping",
    "Foodie/Culinary Exploration",
    "Pets/Animal Care",
    "Socializing/Networking",
    "Outdoor Activities",
    "Adventure Sports",
    "Art and Crafts",
    "Writing Poetry/Prose",
    "Fishing",
    "Cycling",
    "Photography",
    "Birdwatching",
    "Calligraphy",
    "Astrology",
    "Board Games/Card Games",
    "Reading Literature",
    "Cultural Events",
    "Languages",
    "Technology/Computer Science",
    "Entrepreneurship",
    "Financial Investments",
    "Philanthropy",
    "Spirituality",
    "Environmental Conservation",
    "Politics/Current Affairs",
    "History",
    "Science",
    "Health and Wellness",
    "Personal Development",
    "Other",
  ];
  const manglikStatus = [
    "Manglik",
    "Non-Manglik",
    "Partial Manglik",
    "Don't Know",
  ];
  const bloodGroupOpttions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const heightInFt = ["4", "5", "6", "7"];
  const heightInIn = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  const weight = [
    "50 kg",
    "55 kg",
    "60 kg",
    "65 kg",
    "70 kg",
    "75 kg",
    "80 kg",
  ];

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const [formData, setFormData] = useState({
    firstName: "Pre Defined first Name",
    lastName: "Pre Defined last Name",
    maritalStatus: "Pre Defined marital status",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    heightFt: "",
    heightIn: "",
    weight: "",
    manglicStatus: "",
    bloodGroup: "",
    hobbiesInterest: [],
    profilePic: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.id]: "",
    });
  };

  const handleHobbiesChange = (hobbies) => {
    setFormData({
      ...formData,
      hobbiesInterest: hobbies,
    });
    setFormErrors({
      ...formErrors,
      hobbiesInterest: "",
    });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && allowedTypes.includes(file.type)) {
      setFileName(file.name);
      setProfilePicUrl(URL.createObjectURL(file));
      setFormData((prevState) => ({
        ...prevState,
        profilePic: file,
      }));
      setFormErrors((prevState) => ({
        ...prevState,
        profilePic: "",
      }));
    } else {
      setFileName("");
      setProfilePicUrl("");
      setFormErrors((prevState) => ({
        ...prevState,
        profilePic:
          "Invalid file type. Please select an image file (jpeg, png, gif).",
      }));
    }
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required.";
      valid = false;
    }
    if (!formData.timeOfBirth) {
      errors.timeOfBirth = "Time of birth is required.";
      valid = false;
    }
    if (!formData.placeOfBirth) {
      errors.placeOfBirth = "Place of birth is required.";
      valid = false;
    } else if (/\d/.test(formData.placeOfBirth)) {
      errors.placeOfBirth = "Place of birth cannot contain numbers.";
      valid = false;
    }

    if (!formData.heightFt) {
      errors.heightFt = "Height required.";
      valid = false;
    }
    if (!formData.heightIn) {
      errors.heightIn = "Height required.";
      valid = false;
    }
    if (!formData.weight) {
      errors.weight = "Weight is required.";
      valid = false;
    }
    if (!formData.manglicStatus) {
      errors.manglicStatus = "Manglic status is required.";
      valid = false;
    }
    if (!formData.bloodGroup) {
      errors.bloodGroup = "Blood group is required.";
      valid = false;
    }
    if (formData.hobbiesInterest.length === 0) {
      errors.hobbiesInterest = "At least one hobby is required.";
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
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="personal">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Personal Profile
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center">
              <label htmlFor="profilePic">
                <span className="flex justify-center items-center outline-dashed outline-2 outline-[#9CA3AF] rounded-full w-[100px] h-[100px] cursor-pointer relative bg-[#F4F4F4]">
                  <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
                    {profilePicUrl && (
                      <img src={profilePicUrl} alt="SelectedProfilePic" />
                    )}
                  </div>
                  <MdOutlineModeEdit className="text-[#FFFFFF] rounded-full w-[24px] h-[24px] p-1 bg-[#FF4061] absolute bottom-1 right-1" />
                </span>
              </label>
              <input
                id="profilePic"
                type="file"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </div>
            {fileName && (
              <div className="text-[#9CA3AF] px-2 text-sm mt-1 border-2">
                {fileName}
              </div>
            )}
            {formErrors.profilePic && (
              <div className="text-red-500 text-sm mt-1">
                {formErrors.profilePic}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="firstName"
              type="text"
              label="First Name:"
              disabled={true}
              placeholder="first name"
              value={formData.firstName}
              // onChange={handleChange}
              className="font-semibold"
              width="w-full"
              error={formErrors.maritalStatus}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="lastName"
              type="text"
              label="Last Name:"
              disabled={true}
              value={formData.lastName}
              // onChange={handleChange}
              placeholder="last name"
              className="font-semibold"
              width="w-full"
              error={formErrors.lastName}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="maritalStatus"
              type="text"
              label="Marital Status:"
              disabled={true}
              placeholder="marital status"
              value={formData.maritalStatus}
              // onChange={handleChange}
              className="font-semibold"
              width="w-full"
              error={formErrors.maritalStatus}
            />
          </div>
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <div className="flex justify-center items-center w-[48%] md:w-[49%]">
              <Input
                id="dateOfBirth"
                type="date"
                label="Date Of Birth:"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="font-semibold"
                width="w-full"
                error={formErrors.dateOfBirth}
              />
            </div>
            <div className="flex justify-center items-center w-[48%] md:w-[49%]">
              <Input
                type="time"
                id="timeOfBirth"
                label="Time Of Birth:"
                placeholder="HH : MM"
                value={formData.timeOfBirth}
                onChange={handleChange}
                className="font-semibold"
                width="w-full"
                error={formErrors.timeOfBirth}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <Input
              id="placeOfBirth"
              type="text"
              label="Place of Birth:"
              placeholder="Enter place of birth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className="font-semibold"
              width="w-full"
              error={formErrors.placeOfBirth}
            />
          </div>
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <div className="flex justify-between items-center w-[48%]">
              <div className="flex justify-between items-center w-[48%]">
                <SelectInput
                  id="heightFt"
                  name="heightFt"
                  label="Height:"
                  select="Ft."
                  options={heightInFt}
                  className="w-full"
                  value={formData.heightFt}
                  onChange={handleChange}
                  error={formErrors.heightFt}
                />
              </div>
              <div className="flex justify-between items-end w-[48%]">
                <SelectInput
                  id="heightIn"
                  name="heightIn"
                  label="Height:"
                  select="In."
                  options={heightInIn}
                  className="w-full"
                  value={formData.heightIn}
                  onChange={handleChange}
                  error={formErrors.heightIn}
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%]">
              <SelectInput
                id="weight"
                name="weight"
                label="Weight:"
                options={weight}
                className="w-full"
                value={formData.weight}
                onChange={handleChange}
                error={formErrors.weight}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full md:w-[49%]">
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
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="bloodGroup"
              options={bloodGroupOpttions}
              label="Blood Group:"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="border-2 cursor-pointer"
              width="w-full"
              error={formErrors.bloodGroup}
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-cbenter items-center w-full">
            <MultipleHobbiesSelect
              label="Hobbies:"
              id="hobbies"
              options={hobbiesOptions}
              width="w-full md:w-full lg:w-full"
              value={formData.hobbiesInterest}
              onChange={handleHobbiesChange}
              error={formErrors.hobbiesInterest}
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

export default PersonalProfile;
