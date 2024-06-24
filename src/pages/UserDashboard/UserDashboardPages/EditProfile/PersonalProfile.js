import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";
import MultipleHobbiesSelect from "../../../../components/UI/SelectInput/MultipleHobbiesSelect";
import { MdOutlineModeEdit } from "react-icons/md";

const PersonalProfile = (props) => {
  const hobbiesOptions = [
    "Reading",
    "Writing",
    "Drawing/Painting",
    "Photography",
    "Music (Listening)",
    "Music (Playing Instrument)",
    "Singing",
    "Dancing",
    "Cooking",
    "Baking",
    "Gardening",
    "Traveling",
    "Hiking",
    "Camping",
    "Sports (Playing)",
    "Sports (Watching)",
    "Fitness/Exercise",
    "Yoga",
    "Meditation",
    "Volunteering",
    "Learning New Skills",
    "DIY Projects",
    "Watching Movies/TV Shows",
    "Gaming",
    "Collecting (Stamps, Coins, etc.)",
    "Fashion/Shopping",
    "Foodie/Culinary Exploration",
    "Pets/Animal Care",
    "Socializing/Networking",
    "Outdoor Activities",
    "Adventure Sports",
    "Art and Crafts",
    "Writing Poetry/Prose",
    "Fishing",
    "Cycling",
    "Photography",
    "Birdwatching",
    "Calligraphy",
    "Astrology",
    "Board Games/Card Games",
    "Reading Literature",
    "Cultural Events",
    "Languages",
    "Technology/Computer Science",
    "Entrepreneurship",
    "Financial Investments",
    "Philanthropy",
    "Spirituality",
    "Environmental Conservation",
    "Politics/Current Affairs",
    "History",
    "Science",
    "Health and Wellness",
    "Personal Development",
    "Other",
  ];
  return (
    <EditProfileLayout onShowSignUp={props.onShowSignUp} editPage="personal">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Personal Profile
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center ">
            <label htmlFor="profile-pic">
              <span className="flex justify-center items-center outline-dashed outline-2 outline-[#9CA3AF] rounded-full w-[100px] h-[100px] cursor-pointer relative bg-[#F4F4F4]">
                <MdOutlineModeEdit className="text-[#FFFFFF] rounded-full w-[24px] h-[24px] p-1 bg-[#FF4061] absolute bottom-1 right-1" />
              </span>
            </label>
            <input id="profile-pic" type="file" className="hidden" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="firstname"
              type="text"
              label="First Name:"
              disabled={true}
              placeholder="first name"
              className="font-semibold"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="lastname"
              type="text"
              label="Last Name:"
              disabled={true}
              placeholder="last name"
              className="font-semibold"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <Input
              id="maritalstatus"
              type="text"
              label="Marital Status:"
              disabled={true}
              placeholder="marital status"
              className="font-semibold"
              width="w-full"
            />
          </div>
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <div className="flex justify-center items-center w-[48%] md:w-[49%]">
              <Input
                id="dateofbirth"
                type="date"
                label="Date Of Birth:"
                placeholder=""
                className="font-semibold"
                width="w-full"
              />
            </div>
            <div className="flex justify-center items-center w-[48%] md:w-[49%]">
              <Input
                type="time"
                id="timeofbirth"
                label="Time Of Birth:"
                placeholder="HH : MM"
                className="font-semibold"
                width="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <Input
              id="placeofbirth"
              type="text"
              label="Place of Birth:"
              placeholder="Enter place of birth"
              className="font-semibold"
              width="w-full"
            />
          </div>
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <div className="flex justify-center items-center w-[48%]">
              <Input
                id="height"
                type="text"
                label="Height:"
                placeholder="Ft._ _In._ _"
                className="font-semibold"
                width="w-full"
              />
            </div>
            <div className="flex justify-center items-center w-[48%]">
              <Input
                id="weight"
                type="text"
                label="Weight:"
                placeholder="_ _ _Kg"
                className="font-semibold"
                width="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full md:w-[49%]">
            <SelectInput
              options={[
                "Manglik",
                "Non-Manglik",
                "Partial Manglik",
                "Don't Know",
              ]}
              label="Manglic Status:"
              className="border-2 cursor-pointer"
              width="w-full"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[49%]">
            <SelectInput
              options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
              label="Blood Group:"
              className="border-2 cursor-pointer"
              width="w-full"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-cbenter items-center w-full">
            <MultipleHobbiesSelect
              label="Hobbies:"
              id="hobbies"
              options={hobbiesOptions}
              width="w-full md:w-full lg:w-full"
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

export default PersonalProfile;
