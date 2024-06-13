import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import SelectInput from "../../../components/UI/SelectInput/SelectInput";

const ProfessionalDetailsForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <SelectInput
            id="texthighestqualificaton"
            name="texthighestqualificaton"
            label="Highest Qualificaton"
            optionTitle="select highest qualificaton"
            options={["MCA", "BCA", "BA", "MBA"]}
            required={true}
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="College Name"
            placeholder="Enter collegename"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="Occupation"
            placeholder="Enter first name"
            required={true}
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Position"
            placeholder="Enter your position"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="Company Name"
            placeholder="Enter companyname"
          />
        </div>
        <div className="ml-2">
          <SelectInput
            id="salarytype"
            name="salarytype"
            label="Salary Type"
            optionTitle="select salary type"
          />
        </div>
      </div>
      <div className="flex justify-start items-center w-full">
        <div className="">
          <SelectInput
            id="salaryincome"
            name="salaryincome"
            label="Salary Income"
            optionTitle="select salary income"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button text="Next" className="font-black !px-20" />
      </div>
    </form>
  );
};

export default ProfessionalDetailsForm;
