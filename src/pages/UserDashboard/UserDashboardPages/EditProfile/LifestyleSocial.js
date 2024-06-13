import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";
import EditProfileLayout from "./EditProfileLayout";

const LifestyleSocial = () => {
  return (
    <EditProfileLayout editPage="lifestylesocial">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <SelectInput
              id="dietarypreferences"
              label="Dietary Preferences"
              optionTitle="Select dietary preferences"
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
              className="w-[360px] font-semibold cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center  w-[360px]">
            <Input
              id="whatsapp"
              label="WhatsApp"
              placeholder="Enter whatsapp number"
              className="w-[360px] font-semibold"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center  w-[360px]">
            <Input
              id="facebook"
              label="Facebook Id"
              placeholder="Enter facebook id"
              className="w-[360px] font-semibold"
            />
          </div>
          <div className="flex justify-center items-center w-[360px]">
            <Input
              id="instagram"
              label="Instagram Id"
              placeholder="Enter instagram id"
              className="w-[360px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex justify-center items-center w-[747px]">
            <SelectInput
              id="hobbieinterest"
              label="Hobbies & Interest"
              optionTitle="Select hobbies and interests"
              options={[
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
              ]}
              className="w-[747px] font-semibold cursor-pointer"
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

export default LifestyleSocial;
