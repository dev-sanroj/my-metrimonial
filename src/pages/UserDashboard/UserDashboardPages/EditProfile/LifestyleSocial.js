import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import MultipleHobbiesSelect from "../../../../components/UI/SelectInput/MultipleHobbiesSelect";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const LifestyleSocial = (props) => {
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
    <EditProfileLayout
      onShowSignUp={props.onShowSignUp}
      editPage="lifestylesocial"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start items-center w-full font-bold text-[18px] text-[#FF4061]">
          Lifestyle & Social Media
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <SelectInput
              id="dietarypreferences"
              label="Dietary Preferences"
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
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="whatsapp"
              label="WhatsApp"
              placeholder="Enter whatsapp number"
              className="font-semibold"
              width="w-full md:w-[240px] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
          <div className="flex justify-cbenter items-center w-full md:w-[240px] lg:w-[360px]">
            <Input
              id="facebook"
              label="Facebook Id"
              placeholder="Enter facebook id"
              className="font-semibold"
              width="w-full md:w-[50%] lg:w-[360px]"
            />
          </div>
          <div className="flex justify-cbenter items-center w-full md:w-[50%] lg:w-[360px]">
            <Input
              id="instagram"
              label="Instagram Id"
              placeholder="Enter instagram id"
              className=""
              width="w-full md:w-[50%] lg:w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-cbenter items-center w-full">
            <MultipleHobbiesSelect
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

export default LifestyleSocial;
