import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const FamilyProfile = (props) => {
  return (
    <EditProfileLayout editPage="family">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center w-[360px]">
            <SelectInput
              id="fathersstatus"
              label="Father's Status"
              options={[
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
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="mothersstatus"
              label="Mother's Status"
              options={[
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
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="siblings"
              label="Number of Siblings"
              options={[
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
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="family type"
              label="Family Type"
              options={[
                "Nuclear Family",
                "Joint Family",
                "Extended Family",
                "Single-parent Family",
                "Blended Family",
                "Childless Family",
                "Stepfamily",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-between items-center w-[360px]">
            <SelectInput
              id="familyvalues"
              label="Family Values"
              options={[
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
              ]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-start items-center w-[360px]">
            <SelectInput
              id="familyaddress"
              label="Family Address"
              options={["Use my Address", "Different Address"]}
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <Input
              id="city"
              label="City"
              placeholder="Enter city"
              className="font-semibold"
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
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center w-[360px]">
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
              className="font-semibold cursor-pointer"
              width="w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-[360px]">
            <Input
              id="pincode"
              label="Pincode"
              placeholder="Enter pincode"
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
export default FamilyProfile;
