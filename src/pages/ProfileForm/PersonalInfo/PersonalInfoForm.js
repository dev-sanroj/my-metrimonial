import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import SelectInput from "../../../components/UI/SelectInput/SelectInput";

const PersonalinfoForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-start">
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <SelectInput
            id="religion"
            label="Religion"
            name="religion"
            optionTitle="select religion"
            options={[
              "Hindu",
              "Muslim",
              "Christian",
              "Sikh",
              "Buddhist",
              "Jain",
              "Other",
            ]}
            required={true}
          />
        </div>
        <div className="ml-2">
          <Input type="text" label="Weight" placeholder="Enter weight" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-2">
          <Input type="text" label="Height" placeholder="Enter first name" />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Age"
            placeholder="Enter age"
            required={true}
          />
        </div>
      </div>
      <div className="flex justify-start items-center">
        <div className="flex flex-col justify-center items-start w-full my-1">
          <SelectInput
            id="marital"
            label="Marital Status"
            name="maritalstatus"
            optionTitle="select marital status"
            options={["single", "married", "widowed", "divorced"]}
            required={true}
          />
        </div>
      </div>

      <div className="flex justify-center w-full items-center mt-6">
        <Button text="Next" className="font-black !px-20" />
      </div>
    </form>
  );
};

export default PersonalinfoForm;
