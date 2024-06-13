import logo from "../../logo.svg";
import Button from "../UI/Button/Button";
import UserIcon from "./UserIcon.svg";
import { FaUserGear } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header
      className={`${props.className} fixed flex justify-center items-center top-0 left-0 w-[100%] z-20 bg-[#FFFFFF] h-[6rem] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]`}
    >
      <nav className="container mx-auto flex justify-between items-center px-10">
        {/* <!-- Logo --> */}
        <Link to="/" className="text-white text-lg font-semibold">
          <img src={logo} alt="logo" width={50} />
        </Link>

        {/* <!-- Sign-in Button --> */}
        <div className="flex justify-center items-center">
          <Button
            onButtonClick={props.onShowSignUp}
            text="Sign Up"
            className="!text-[24px] !font-bold mr-2"
          />
          <div className="relative flex justify-center items-center ml-2 group">
            <Button
              text="User Name"
              className="!bg-[#FFFFFF] !text-[24px] !font-bold !text-[#FF4061] border-2 border-[#FF4061] px-2"
            >
              <img src={UserIcon} width={30} alt="user-icon" />
            </Button>
            <div className="absolute right-auto top-[100%] w-[90%] text-white bg-[rgba(255,255,255,0.7)] rounded-b-lg hidden group-hover:flex transition border-b-4 border-[#FFFFFF]">
              <ul className="flex flex-col justify-center items-start w-full pt-8 pb-2">
                <Link to="/all-matches" className="w-full flex">
                  <li
                    onClick={props.onShowBasicInfo}
                    className="flex justify-start items-start hover:bg-[#FF4061aa] bg-[#f4f4f4] text-[#333333] hover:text-[#FFFFFF] cursor-pointer w-full px-2 py-3"
                  >
                    <FaUserGear size={26} />
                    <p className="ml-2">All Matches</p>
                  </li>
                </Link>
                <Link to="/dashboard" className="w-full flex">
                  <li
                    onClick={props.onShowBasicInfo}
                    className="flex justify-start items-start hover:bg-[#FF4061aa] bg-[#f4f4f4] text-[#333333] hover:text-[#FFFFFF] cursor-pointer w-full px-2 py-3"
                  >
                    <FaUserGear size={26} />
                    <p className="ml-2">Profile</p>
                  </li>
                </Link>
                <li className="flex justify-start items-start hover:bg-[#FF4061aa] bg-[#f4f4f4] text-[#333333] hover:text-[#FFFFFF] cursor-pointer w-full px-2 py-3">
                  <BiLogOutCircle size={26} />
                  <p className="ml-2">Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
