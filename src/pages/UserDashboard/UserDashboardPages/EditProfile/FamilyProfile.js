import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const FamilyProfile = (props) => {
  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="family">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Family Background
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="fathername"
              label="Father Name:"
              placeholder="Enter father name"
              className="font-semibold cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="mothername"
              label="Mother Name:"
              placeholder="Enter mother name"
              className="font-semibold cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="siblings"
              label="Number of Siblings:"
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="family type"
              label="Family Type:"
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-between items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="familyvalues"
              label="Family Values:"
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-start items-center w-full md:w-[240px] lg:w-[360px]"></div>
        </div>
        <div className="flex justify-start items-center my-5 w-full">
          <Button
            onButtonClick={props.onShowEditSuccess}
            text="Save"
            className="font-bold w-[130px] h-[50px]"
          />
        </div>
      </div>
    </EditProfileLayout>
  );
};
export default FamilyProfile;
