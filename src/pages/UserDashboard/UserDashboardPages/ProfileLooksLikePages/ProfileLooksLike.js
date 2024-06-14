import Button from "../../../../components/UI/Button/Button";
import DashboardLayout from "../../DashboardLayout";
import AboutSection from "./AboutSection";
import BasicInfoSection from "./BasicInfoSection";
import PhotoGallerySection from "./PhotoGallerySection";
import ContactInfoSection from "./ContactInfoSection";
import PersonalInfoSection from "./PersonalInfoSection";
import EducationalBackgroundSection from "./EducationalBackgroundSection";
import FamilyInfoSection from "./FamilyInfoSection";
import HobbiesInterestSection from "./HobbiesInterestSection";
import SocialMediaSection from "./SocialMediaSection";

const ProfileLooksLike = (props) => {
  return (
    <DashboardLayout activePage="profilelookslike">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-start items-center w-full">
          <p className="font-extrabold text-[26px] text-[#FF4061]">User Name</p>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-3"></span>
        <div className="flex flex-col justify-center items-center w-full min-h-[540px] max-h-[540px]">
          <div className="flex justify-center items-center bg-[rd] h-[550px] w-full overflow-hidden bg-[red]">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996"
              alt="profile-pic"
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <Button
              text="Chat Now"
              className="w-[50%] rounded-none !bg-[#333333ff] py-6 font-bold"
            />
            <Button
              text="Match Now"
              className="w-[50%] rounded-none py-6 font-extrabold"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-[#FFC0CB] rounded-lg py-4 w-[95%] mb-20 bg-[#FFFFFF]">
        <div className="flex justify-center items-center w-[95%]">
          <ul className="flex flex-col justify-center items-start w-full pb-4">
            <AboutSection />
            <BasicInfoSection />
            <PhotoGallerySection />
            <ContactInfoSection />
            <PersonalInfoSection />
            <EducationalBackgroundSection />
            <FamilyInfoSection />
            <HobbiesInterestSection />
            <SocialMediaSection />
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileLooksLike;
