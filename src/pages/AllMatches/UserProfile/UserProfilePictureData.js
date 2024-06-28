import Button from "../../../components/UI/Button/Button";

const UserProfilePictureData = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full  lg:w-[49%]">
      <img
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996"
        alt="profile-pic"
        className="object-cover"
      />
      <div className="flex justify-between items-center w-full">
        <Button
          text="Chat Now"
          className="py-8 rounded-none w-[50%] text-[16px] md:text-[18px] lg:text-[28px] font-extrabold"
          bgBtn="bg-[#333333]"
        />
        <Button
          text="Match Now"
          className="py-8 rounded-none w-[50%] text-[16px] md:text-[18px] lg:text-[28px] font-extrabold"
          bgBtn="bg-[#FFC0CB]"
        />
      </div>
    </div>
  );
};

export default UserProfilePictureData;
