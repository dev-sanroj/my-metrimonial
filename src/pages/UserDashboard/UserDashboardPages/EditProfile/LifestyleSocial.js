import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const LifestyleSocial = (props) => {
  return (
    <EditProfileLayout
      onShowSignUp={props.onShowSignUp}
      editPage="lifestylesocial"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Lifestyle & Social Media
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              id="dietarypreferences"
              label="Dietary Preferences:"
              options={[
                "Vegetarian",
                "Non-Vegetarian",
                "Vegan",
                "Eggetarian",
                "Pescatarian",
                "Jain Vegetarian",
                "Lacto Vegetarian",
                "Ovo Vegetarian",
                "Lacto-Ovo Vegetarian",
                "Fruitarian",
                "Gluten-Free",
                "Ketogenic",
                "Paleo",
                "Raw Vegan",
                "Low Carb",
                "Low Fat",
                "Organic",
                "Halal",
                "Kosher",
                "Other",
              ]}
              className="font-semibold cursor-pointer"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="whatsapp"
              label="WhatsApp:"
              placeholder="Enter whatsapp number"
              className="font-semibold"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="facebook"
              label="Facebook Id:"
              placeholder="Enter facebook id"
              className="font-semibold"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="instagram"
              label="Instagram Id:"
              placeholder="Enter instagram id"
              className=""
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

export default LifestyleSocial;
