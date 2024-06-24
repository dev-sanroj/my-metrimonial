import { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const AddressProfile = (props) => {
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

  const onSaveHandler = () => {
    console.log("presentAddress: ", presentAddress);
    console.log("familyAddress: ", familyAddress);
    props.onShowEditSuccess();
  };

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

  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="address">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <SectionTitle title="Present Address">
          <AddressFields
            address={presentAddress}
            stateOptions={stateOptions}
            countryOptions={countryOptions}
            onAddressChange={handlePresentAddressChange}
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
          />
        </SectionTitle>
        <div className="flex justify-start items-center my-5 w-full">
          <Button
            onButtonClick={onSaveHandler}
            text="Save"
            className="font-bold w-[130px] h-[50px]"
          />
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
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <Input
            id="city"
            label="City:"
            placeholder="Enter city"
            className=" font-semibold"
            width="w-full"
            value={address.city}
            onChange={(e) => {
              onAddressChange({ field: "city", value: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <SelectInput
            id="state"
            label="State:"
            options={stateOptions}
            className=" font-semibold cursor-pointer"
            width="w-full"
            value={address.state}
            onChange={(e) => {
              onAddressChange({ field: "state", value: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <SelectInput
            id="country"
            label="Country:"
            options={countryOptions}
            className=" font-semibold cursor-pointer"
            width="w-full"
            value={address.country}
            onChange={(e) => {
              onAddressChange({ field: "country", value: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[49%]">
          <Input
            id="pincode"
            label="Pincode:"
            placeholder="Enter pincode"
            className=""
            width="w-full"
            value={address.pincode}
            onChange={(e) => {
              onAddressChange({ field: "pincode", value: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressProfile;
