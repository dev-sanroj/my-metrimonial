import Button from "../../../../components/UI/Button/Button";
import EditProfileLayout from "./EditProfileLayout";

const AboutMore = (props) => {
  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="aboutmore">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          About More
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center my-2 w-full">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="about"
                className="text-[#333333] font-medium mb-1"
              >
                About Yourself:
              </label>
              <span className="text-[14px] text-[#333333]">50-250 words</span>
            </div>
            <textarea
              id="about"
              placeholder="write about yourself"
              className="focus:outline-[#333333] text-[#858585] border-[2px] border-[#858585] text-[14px] lg:text-16px px-3 py-2 w-full rounded-md min-h-[120px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center my-2 w-full">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex justify-between items-center w-full">
              <label
                htmlFor="about"
                className="text-[#333333] font-medium mb-1"
              >
                About Your Family:
              </label>
              <span className="text-[14px] text-[#333333]">50-250 words</span>
            </div>
            <textarea
              id="about"
              placeholder="write about your family"
              className="focus:outline-[#333333] text-[#858585] border-[2px] border-[#858585] text-[14px] lg:text-16px px-3 py-2 w-full rounded-md min-h-[120px]"
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

export default AboutMore;
