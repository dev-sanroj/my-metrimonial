import { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { AiOutlineLoading } from "react-icons/ai";

const dietaryPreferencesOptions = [
  "Vegetarian",
  "Non-Vegetarian",
  "Vegan",
  "Eggetarian",
  "Pescatarian",
  "Jain Vegetarian",
  "Lacto Vegetarian",
  "Ovo Vegetarian",
  "Lacto-Ovo Vegetarian",
  "Fruitarian",
  "Gluten-Free",
  "Ketogenic",
  "Paleo",
  "Raw Vegan",
  "Low Carb",
  "Low Fat",
  "Organic",
  "Halal",
  "Kosher",
  "Other",
];

const LifestyleSocial = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    dietaryPreferences: "",
    whatsapp: "",
    facebook: "",
    instagram: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    // Validate Dietary Preferences
    if (!formData.dietaryPreferences) {
      errors.dietaryPreferences = "Dietary preferences are required.";
      valid = false;
    }

    if (!formData.whatsapp) {
      errors.whatsapp = "WhatsApp number is required.";
      valid = false;
    } else if (!/^\+[1-9]\d{1,14}$/.test(formData.whatsapp)) {
      errors.whatsapp = "Please enter a valid WhatsApp number.";
      valid = false;
    }

    if (!formData.facebook) {
      errors.facebook = "Facebook ID is required.";
      valid = false;
    } else if (!/^[a-zA-Z0-9.]+$/.test(formData.facebook)) {
      errors.facebook = "Invalid Facebook ID format.";
      valid = false;
    }

    if (!formData.instagram) {
      errors.instagram = "Instagram ID is required.";
      valid = false;
    } else if (!/^[a-zA-Z0-9_.]+$/.test(formData.instagram)) {
      errors.instagram = "Invalid Instagram ID format.";
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
      editPage="lifestylesocial"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Lifestyle & Social Media
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="dietaryPreferences"
              label="Dietary Preferences:"
              options={dietaryPreferencesOptions}
              value={formData.dietaryPreferences}
              onChange={handleChange}
              className="font-semibold cursor-pointer"
              width="w-full"
              error={formErrors.dietaryPreferences}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="whatsapp"
              label="WhatsApp:"
              placeholder="Enter WhatsApp number"
              value={formData.whatsapp}
              onChange={handleChange}
              className="font-semibold"
              width="w-full"
              error={formErrors.whatsapp}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="facebook"
              label="Facebook ID:"
              placeholder="Enter Facebook ID"
              value={formData.facebook}
              onChange={handleChange}
              className="font-semibold"
              width="w-full"
              error={formErrors.facebook}
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="instagram"
              label="Instagram ID:"
              placeholder="Enter Instagram ID"
              value={formData.instagram}
              onChange={handleChange}
              className=""
              width="w-full"
              error={formErrors.instagram}
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

export default LifestyleSocial;
