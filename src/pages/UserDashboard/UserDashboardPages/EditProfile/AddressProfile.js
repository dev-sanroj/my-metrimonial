import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const AddressProfile = () => {
  return (
    <EditProfileLayout editPage="address">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <Input
              id="city"
              label="City"
              placeholder="Enter city"
              className=" font-semibold"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="State"
              label="State"
              options={[
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
              ]}
              className=" font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="country"
              label="Country"
              options={[
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
              ]}
              className=" font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <Input
              id="pincode"
              label="Pincode"
              placeholder="Enter pincode"
              className=""
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-start items-center my-5 w-full">
          <Button text="Save" className="font-bold !px-16 !py-6 ml-7" />
        </div>
      </div>
    </EditProfileLayout>
  );
};

export default AddressProfile;
