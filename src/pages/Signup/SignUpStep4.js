import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import SelectInput from "../../components/UI/SelectInput/SelectInput";
import { AiOutlineLoading } from "react-icons/ai";
import MultipleHobbiesSelect from "../../components/UI/SelectInput/MultipleHobbiesSelect";

const cityOptions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
];

const stateOptions = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Telangana",
  "Gujarat",
  "Tamil Nadu",
  "West Bengal",
  "Gujarat",
  "Maharashtra",
  "Rajasthan",
];

const pincodeOptions = [
  "400001",
  "110001",
  "560001",
  "500001",
  "380001",
  "600001",
  "700001",
  "395001",
  "411001",
  "302001",
];

const hobbiesInterestOptions = [
  "Reading",
  "Traveling",
  "Cooking",
  "Sports",
  "Music",
  "Art",
  "Photography",
  "Gardening",
  "Writing",
  "Gaming",
];

const countryOptions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
];

const SignUpStep4 = ({ onPrev }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    city: "",
    state: "",
    country: "",
    pinCode: "",
    hobbiesInterest: [],
  });

  const [formErrors, setFormErrors] = useState({
    city: "",
    state: "",
    country: "",
    pinCode: "",
    hobbiesInterest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleHobbiesChange = (hobbies) => {
    setFormData({
      ...formData,
      hobbiesInterest: hobbies,
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {
      city: "",
      state: "",
      country: "",
      pinCode: "",
      hobbiesInterest: "",
    };

    if (formData.city === "") {
      errors.city = "City is required";
      valid = false;
    }
    if (formData.state === "") {
      errors.state = "State is required";
      valid = false;
    }
    if (formData.country === "") {
      errors.country = "Country is required";
      valid = false;
    }
    if (formData.pinCode === "") {
      errors.pinCode = "Pincode is required";
      valid = false;
    }
    if (formData.hobbiesInterest.length === 0) {
      errors.hobbiesInterest = "Hobbies interest is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleOnSubmit = async (event) => {
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
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto "
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center mr-2 w-[50%]">
          <SelectInput
            id="city"
            name="city"
            label="City:"
            options={cityOptions}
            className="w-full"
            value={formData.city}
            onChange={handleChange}
            error={formErrors.city}
          />
        </div>
        <div className="flex justify-center items-end ml-2 w-[50%]">
          <SelectInput
            id="state"
            name="state"
            label="State:"
            options={stateOptions}
            className="w-full"
            value={formData.state}
            onChange={handleChange}
            error={formErrors.state}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-end mr-2 w-[50%]">
          <SelectInput
            id="country"
            name="country"
            label="Country:"
            options={countryOptions}
            className="w-full"
            value={formData.country}
            onChange={handleChange}
            error={formErrors.country}
          />
        </div>
        <div className="flex justify-center items-center ml-2 w-[50%]">
          <Input
            id="pinCode"
            placeholder="Enter pincode"
            label="Pin-Code:"
            options={pincodeOptions}
            className="w-full"
            value={formData.pinCode}
            onChange={handleChange}
            error={formErrors.pinCode}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-end w-full">
          <MultipleHobbiesSelect
            label="Hobbies:"
            id="hobbies"
            options={hobbiesInterestOptions}
            width="w-full md:w-full lg:w-full"
            value={formData.hobbiesInterest}
            onChange={handleHobbiesChange}
            error={formErrors.hobbiesInterest}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <div className="flex justify-between items-center w-full">
          <Button
            text="Prev"
            onButtonClick={() => onPrev()}
            className="w-[48%] h-[50px] font-bold text-[24px]"
            bgBtn="bg-[#333333]"
          />
          <Button
            text={isLoading ? "Loading..." : "SignUp"}
            className="w-[48%] h-[50px] font-bold text-[24px]"
          >
            {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpStep4;
