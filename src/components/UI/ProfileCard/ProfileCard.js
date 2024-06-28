import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProfileCard = (props) => {
  return (
    <div
      className={`${
        props.className ? props.className : "w-full md:w-[48%] lg:w-[30%]"
      } flex flex-col justify-between items-center rounded-lg bg-[#FFFFF4] my-4 md:my-10 shadow-[0_0_10px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex justify-center items-center w-full h-[200px] lg:h-[160px] relative">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R89340451&ga=GA1.1.1679917466.1715339411&semt=sph"
          alt="profile-pic"
          className="rounded-t-lg w-full h-full object-cover absolute"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-2 mt-6 bg-[#FFFFFf]">
        <div className="flex text-[#707070] font-semibold text-[18px] md:text-[20px] lg:text-[22px] mb-2">
          Full Name
          <span className="flex font-bold text-[#333333] ml-1">
            (
            <p className="flex justify-center items-end text-[#FF4061] text-[20px]">
              28
            </p>
            <span className="text-[16px] mt-2">yrs</span>)
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-start h-[50px]">
            <p className="text-[#707070] text-[16px] md:text-[16px] lg:text-[18px] font-medium text-center my-1">
              City
            </p>
            <p className="text-[#707070] text-[16px] md:text-[16px] lg:text-[18px] font-medium text-center my-1">
              Religion
            </p>
          </div>
          <span className="w-[1px] h-[50px] bg-[#999999]"></span>
          <div className="flex flex-col justify-center items-start">
            <p className="text-[#707070] text-[16px] md:text-[16px] lg:text-[18px] font-medium text-center my-1">
              Occupation
            </p>
            <p className="text-[#707070] text-[16px] md:text-[16px] lg:text-[18px] font-medium text-center my-1">
              Education
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 bg-[#FFF9F0] w-full rounded-b-lg">
        <Link to="/view-profile">
          <Button
            text="View Profile"
            className="font-semibold !w-[195px] !h-[35px] hover:text-[#FFFFFF] text-[18px] rounded-xl !border-2 !px-8 !border-[#FF4061]"
            bgBtn="bg-transparent"
            colorBtn="text-[#FF4061]"
          />
        </Link>
      </div>
    </div>
  );
};
export default ProfileCard;
