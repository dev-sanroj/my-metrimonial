import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const ProfileCard = (props) => {
  console.log(props.className);
  return (
    <div
      className={`${
        props.className ? props.className : " w-[260px]"
      } flex flex-col justify-between items-center rounded-lg bg-[#FFFFFF] my-4 shadow-[0_0_10px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg?t=st=1717536021~exp=1717539621~hmac=ef086f4f4d99a9c1041f76d87800c1f9c18d9e8234521e1c645cdeef39970238&w=996"
          alt="profile-pic"
          className="rounded-t-lg w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-2">
        <p className="flex text-[#333333] font-semibold text-[18px] mb-2">
          Full Name
          <span className="flex font-bold text-[#000000] ml-1">
            (<p className="flex text-[#FF4061]">28</p>yrs)
          </span>
        </p>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center h-[50px]">
            <p className="text-[rgba(51,51,51,0.7)] font-medium text-center my-1">
              City
            </p>
            <p className="text-[rgba(51,51,51,0.7)] font-medium text-center my-1">
              Religion
            </p>
          </div>
          <span className="w-[1px] py-[40px] bg-[rgba(204,204,204,0.5)]"></span>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[rgba(51,51,51,0.7)] font-medium text-center my-1">
              Occupation
            </p>
            <p className="text-[rgba(51,51,51,0.7)] font-medium text-center my-1">
              Education
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 bg-[#FFF9F0] w-full rounded-b-lg">
        <Link to="/all-matches/user-profile">
          <Button
            text="View Profile"
            className="font-semibold text-[#FF4061ff] hover:text-[#FFFFFFFF] text-[18px] bg-transparent rounded-xl !border-2 !px-10 !border-[#FF4061]"
          />
        </Link>
      </div>
    </div>
  );
};
export default ProfileCard;
