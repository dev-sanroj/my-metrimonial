import { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { AiOutlineLoading } from "react-icons/ai";

const stateOptions = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const countryOptions = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "Russia",
];
const AddressProfile = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [presentAddress, setPresentAddress] = useState({
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [familyAddress, setFamilyAddress] = useState({
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [sameAsAbove, setSameAsAbove] = useState(false);

  const handlePresentAddressChange = ({ field, value }) => {
    setPresentAddress((prevState) => ({ ...prevState, [field]: value }));
  };
  const handleFamilyAddressChange = ({ field, value }) => {
    setFamilyAddress((prevState) => ({ ...prevState, [field]: value }));
  };
  const handleSameAsAboveChange = (e) => {
    setSameAsAbove(e.target.checked);
    e.target.checked && setFamilyAddress(presentAddress);
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};

    const validateAddress = (address, prefix) => {
      if (!address.city) {
        errors[`${prefix}City`] = "City is required.";
        valid = false;
      } else if (!/^[a-zA-Z ]+$/.test(address.city)) {
        errors[`${prefix}City`] =
          "City should contain only letters and spaces.";
        valid = false;
      }

      if (!address.state) {
        errors[`${prefix}State`] = "State is required.";
        valid = false;
      }

      if (!address.country) {
        errors[`${prefix}Country`] = "Country is required.";
        valid = false;
      }

      if (!address.pincode) {
        errors[`${prefix}Pincode`] = "Pincode is required.";
        valid = false;
      } else if (!/^\d{6}$/.test(address.pincode)) {
        errors[`${prefix}Pincode`] = "Pincode should be a 6-digit number.";
        valid = false;
      }
    };

    validateAddress(presentAddress, "present");

    if (!sameAsAbove) {
      validateAddress(familyAddress, "family");
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
      console.log("presentAddress: ", presentAddress);
      console.log("familyAddress: ", familyAddress);
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
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="address">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <SectionTitle title="Present Address">
          <AddressFields
            address={presentAddress}
            stateOptions={stateOptions}
            countryOptions={countryOptions}
            onAddressChange={handlePresentAddressChange}
            errors={formErrors}
            prefix="present"
          />
        </SectionTitle>
        <SectionTitle title="Family Address">
          <div className="flex justify-start items-center w-full">
            <input
              type="checkbox"
              id="sameasabove"
              className="cursor-pointer"
              checked={sameAsAbove}
              onChange={handleSameAsAboveChange}
            />
            <label
              htmlFor="sameasabove"
              className="cursor-pointer font-medium text-[14px] ml-1 text-[#858585]"
            >
              Same as above
            </label>
          </div>
          <AddressFields
            address={familyAddress}
            stateOptions={stateOptions}
            countryOptions={countryOptions}
            onAddressChange={handleFamilyAddressChange}
            errors={formErrors}
            prefix="family"
          />
        </SectionTitle>
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

const SectionTitle = ({ title, children }) => (
  <div className="flex flex-col justify-center items-center w-full h-full font-bold text-[18px] text-[#FF4061]">
    <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
      {title}
    </div>
    {children}
  </div>
);

const AddressFields = ({
  address,
  stateOptions,
  countryOptions,
  onAddressChange,
  errors,
  prefix,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <Input
            id={`${prefix}City`}
            label="City:"
            placeholder="Enter city"
            className="font-semibold"
            width="w-full"
            value={address.city}
            onChange={(e) => {
              onAddressChange({ field: "city", value: e.target.value });
            }}
            error={errors[`${prefix}City`]}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <SelectInput
            id={`${prefix}State`}
            label="State:"
            options={stateOptions}
            className="font-semibold cursor-pointer"
            width="w-full"
            value={address.state}
            onChange={(e) => {
              onAddressChange({ field: "state", value: e.target.value });
            }}
            error={errors[`${prefix}State`]}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-full">
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <SelectInput
            id={`${prefix}Country`}
            label="Country:"
            options={countryOptions}
            className="font-semibold cursor-pointer"
            width="w-full"
            value={address.country}
            onChange={(e) => {
              onAddressChange({ field: "country", value: e.target.value });
            }}
            error={errors[`${prefix}Country`]}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <Input
            id={`${prefix}Pincode`}
            label="Pincode:"
            placeholder="Enter pincode"
            className=""
            width="w-full"
            value={address.pincode}
            onChange={(e) => {
              onAddressChange({ field: "pincode", value: e.target.value });
            }}
            error={errors[`${prefix}Pincode`]}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressProfile;
