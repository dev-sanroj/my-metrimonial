import Button from "../../../components/UI/Button/Button";
import UserEducationData from "./UserEducationData";
import UserHobbiesData from "./UserHobbiesData";
import UserFamilyData from "./UserFamilyData";
import UserPersonalData from "./UserPersonalData";
import UserContactData from "./UserContactData";
import UserGalleryData from "./UserGalleryData";
import UserAboutData from "./UserAboutData";
import UserProfilePictureData from "./UserProfilePictureData";
import Navbar from "../../../components/Navbar/Navbar";
import AboutFamily from "./AboutFamily";

const UserProfile = (props) => {
  const aboutText =
    "Here is how you can integrate this array into a form using HTML and JavaScript, using a dropdown menu for selection.using HTML and JavaScript, using a dropdown menu for selectionand JavaScript, using a dropdown menu for selection. using HTML and , using a dropdown menu for selectionand JavaScript, using a dropdown menu for selection. using HTML and JavaScript, using a dropdown menu for selection. Here is how you can integrate this array into a form using HTML and JavaScript, using a dropdown menu for selection.using HTML and JavaScript, using a dropdown menu for selectionand JavaScript, using a dropdown menu for selection. using HTML and , using a dropdown menu for selectionand JavaScript, using a dropdown menu for selection. using HTML and JavaScript, using a dropdown menu for selection";
  return (
    <>
      <Navbar onShowSignUp={props.onShowSignUp} />
      <section className="flex justify-center items-center w-full bg-[#FFFFF4] pb-32 pt-6 md:pt-6 lg:pt-10 mb-6 px-2 md:px-6 lg:px-10 mt-20">
        <div className="flex flex-col justify-center items-center w-full p-4 border-2 border-[#FFC0CB] rounded-lg">
          <div className="flex flex-col justify-center items-center w-full mb-10 bg-white">
            <p className="font-bold text-[#FF4061] text-[38px] lg:text-[52px] my-2 text-center">
              Profile
            </p>
            <p className="font-semibold text-[#818181] text-[16px] md:text-[18px] lg:text-[24px] my-2 text-center">
              Most Trusted and premium Matrimony Service in the World.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-start w-[98%]">
              <UserProfilePictureData />
              <UserAboutData />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start w-[98%] border-b-2">
              <UserContactData />
              <UserGalleryData />
            </div>
            <div className="flex flex-col justify-center items-center w-[98%] border-b-2">
              <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <UserFamilyData />
                <UserPersonalData />
              </div>
              <div className="flex justify-center items-center w-full pb-10">
                <AboutFamily aboutText={aboutText} />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start w-[98%]">
              <UserEducationData />
              <UserHobbiesData />
            </div>
            <div className="flex justify-center items-center w-[98%]">
              <Button
                text="Match Now"
                className="w-[80%] md:w-[50%] !h-[55px] font-bold"
                bgBtn="bg-[#333333]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
