import EditProfileLayout from "./EditProfileLayout";
import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import Input from "../../../../components/UI/Input/Input";

const EducationProfile = (props) => {
  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="education">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Educational Background
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="qualificationtype"
              label="Qualification-Type:"
              options={[
                "High School",
                "High Secondary",
                "Diploma",
                "Bachelor's Degree",
                "Master's Degree",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="highestqualification"
              label="Highest Qualification:"
              options={[
                "High School",
                "Diploma",
                "Bachelor's Degree",
                "Master's Degree",
                "Doctorate (PhD)",
                "Post-Doctoral",
                "Associate Degree",
                "Professional Degree (e.g., MBBS, LLB)",
                "Trade School Certification",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="collegename"
              label="College Name:"
              placeholder="Enter college name"
              className="font-semibold"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="occupation"
              label="Occupation:"
              options={[
                "Accountant",
                "Actor/Actress",
                "Architect",
                "Artist",
                "Banker",
                "Business Analyst",
                "Business Owner",
                "Chartered Accountant",
                "Chef/Cook",
                "Civil Engineer",
                "Consultant",
                "Customer Service",
                "Data Scientist",
                "Designer",
                "Doctor",
                "Engineer",
                "Entrepreneur",
                "Farmer",
                "Government Employee",
                "Graphic Designer",
                "Healthcare Professional",
                "Human Resources",
                "IT Professional",
                "Journalist",
                "Lawyer",
                "Lecturer",
                "Manager",
                "Marketing Professional",
                "Mechanical Engineer",
                "Musician",
                "Nurse",
                "Pharmacist",
                "Photographer",
                "Pilot",
                "Professor",
                "Project Manager",
                "Public Relations",
                "Real Estate Agent",
                "Researcher",
                "Sales Professional",
                "Scientist",
                "Self-employed",
                "Software Developer",
                "Teacher",
                "Technician",
                "Therapist",
                "Translator",
                "Unemployed",
                "Veterinarian",
                "Writer",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="position"
              label="Position:"
              options={[
                "Intern",
                "Junior",
                "Mid-level",
                "Senior",
                "Lead",
                "Manager",
                "Director",
                "Vice President",
                "President",
                "Chief Officer (e.g., CFO, CTO, COO)",
                "Consultant",
                "Freelancer",
                "Contractor",
                "Assistant",
                "Specialist",
                "Coordinator",
                "Executive",
                "Supervisor",
                "Administrator",
                "Analyst",
                "Advisor",
                "Officer",
                "Owner",
                "Founder",
                "Partner",
                "Principal",
                "Professor",
                "Researcher",
                "Technician",
                "Engineer",
                "Designer",
                "Developer",
                "Programmer",
                "Technologist",
                "Scientist",
                "Healthcare Provider",
                "Educator",
                "Trainer",
                "Therapist",
                "Sales Representative",
                "Customer Service Representative",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="companyname"
              label="Company Name:"
              placeholder="Enter company name"
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="annualincome"
              label="Annual-Income:"
              options={[
                "₹1,00000 - ₹2,00000",
                "₹2,00000 - ₹3,00000",
                "₹3,00000 - ₹4,00000",
                "₹4,00000 - ₹5,00000",
                "₹5,00000 - ₹6,00000",
                "₹6,00000 - ₹7,00000",
                "₹7,00000 - ₹8,00000",
                "₹8,00000 - ₹9,00000",
                "₹9,00000 - ₹10,00000",
                "₹100,000+",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
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

export default EducationProfile;
