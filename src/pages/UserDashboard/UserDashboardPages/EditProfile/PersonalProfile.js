import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import { MdOutlineModeEdit } from "react-icons/md";

const PersonalProfile = () => {
  return (
    <EditProfileLayout editPage="personal">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Personal Profile
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center ">
            <label htmlFor="profile-pic">
              <span className="flex justify-center items-center outline-dashed outline-2 outline-[#9CA3AF] rounded-full w-[100px] h-[100px] cursor-pointer relative bg-[#FFC0CBaa]">
                <MdOutlineModeEdit className="text-[#FFFFFF] rounded-full w-[24px] h-[24px] p-1 bg-[#FF4061] absolute bottom-1 right-1" />
              </span>
            </label>
            <input id="profile-pic" type="file" className="hidden" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="firstname"
              type="text"
              label="First Name"
              disabled={true}
              placeholder="first name"
              className="font-semibold"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="lastname"
              type="text"
              label="Last Name"
              disabled={true}
              placeholder="last name"
              className="font-semibold"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center  w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="maritalstatus"
              type="text"
              label="Marital Status"
              disabled={true}
              placeholder="marital status"
              className="font-semibold"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center  w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="dateofbirth"
              type="date"
              label="Date Of Birth"
              placeholder="_ _/_ _/_ _ _ _"
              className="font-semibold"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-between items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="height"
              type="text"
              label="Height"
              placeholder="Ft._ _In._ _"
              className="font-semibold"
              width="w-[45%] md:w-[100px] lg:w-[140px]"
            />
            <Input
              id="weight"
              type="text"
              label="Weight"
              placeholder="_ _ _Kg"
              className="font-semibold"
              width="w-[45%] md:w-[100px] lg:w-[140px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              options={["o+", "o-", "ab+"]}
              label="Blood Group"
              className="border-2 cursor-pointer"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-start items-center my-5 w-full">
          <Button text="Save" className="font-bold w-[130px] h-[50px]" />
        </div>
      </div>
    </EditProfileLayout>
  );
};

export default PersonalProfile;
