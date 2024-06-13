import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import SelectInput from "../../../components/UI/SelectInput/SelectInput";

const FamilyLifestyleForm = (props) => {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Input
            type="text"
            label="Father's Status"
            placeholder="Enter father's status"
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Mother's Status"
            placeholder="Enter mother's status"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <SelectInput
            id="dietrypreferences"
            name="dietrypreferences"
            label="Dietry Preferences"
            optionTitle="select dietry preference"
            options={["Veg", "Non-Veg"]}
          />
        </div>
        <div className="ml-2">
          <Input
            type="text"
            label="Family Location"
            placeholder="Enter family location"
          />
        </div>
      </div>
      <div className="flex justify-start items-center w-full">
        <div className="">
          <Input
            type="text"
            label="Hobbies & Interest"
            placeholder="Enter first name"
            className="w-[817px]"
          />
        </div>
      </div>
      <div className="flex justify-start items-center my-4 w-full">
        <div className="">
          <Input
            type="textarea"
            label="About"
            placeholder=""
            className="w-[817px] h-[150px]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button text="Next" className="font-black !px-20" />
      </div>
    </form>
  );
};

export default FamilyLifestyleForm;
