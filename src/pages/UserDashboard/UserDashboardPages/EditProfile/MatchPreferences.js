import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const MatchPreferences = (props) => {
  return (
    <EditProfileLayout
      onShowSignUp={props.onShowSignUp}
      editPage="matchpreferences"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Lifestyle & Social Media
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="highestqualification"
              label="Highest Qualification"
              options={[]}
              className="font-semibold cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="occupation"
              label="Occupation"
              options={[]}
              className="font-semibold cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-cbenter items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="annualincome"
              label="Annual Income"
              options={[]}
              className="font-semibold cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-cbenter items-center w-full md:w-[240px] lg:w-[360px]"></div>
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

export default MatchPreferences;
