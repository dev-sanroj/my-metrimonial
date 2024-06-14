import Button from "../../../../components/UI/Button/Button";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const PhotosMore = () => {
  return (
    <EditProfileLayout editPage="photosmore">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center w-[717px]">
            <SelectInput
              id="Imagesgallery"
              label="Images for Gallery"
              className="w-[717px] font-semibold cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-around items-center w-full my-2">
          <div className="flex flex-col justify-center items-start w-[717px]">
            <div className="flex justify-between items-center w-full">
              <label htmlFor="about" className="text-[#333333] font-medium">
                About More:
              </label>
              <span className="text-[14px] text-[#333333]">50-500 words</span>
            </div>
            <textarea
              id="about"
              placeholder="write abbout yourself"
              className="focus:outline-[#333333] text-[#858585] border-[2px] border-[#858585] px-3 py-2 w-[717px] rounded-md"
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

export default PhotosMore;
