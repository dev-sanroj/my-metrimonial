import Navbar from "../../components/Navbar/Navbar";
import classes from "./DashboardLayout.module.css";
import { MdOutlineCardMembership, MdSpaceDashboard } from "react-icons/md";
import { IoAlbums, IoLogOut } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiProfileFill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { SiPlanetscale } from "react-icons/si";
import { Link } from "react-router-dom";
import React from "react";
import { LuMenuSquare } from "react-icons/lu";

const DashboardLayout = ({ children, activePage, onShowSignUp }) => {
  const [firstChild, secondChild] = React.Children.toArray(children);
  return (
    <>
      <Navbar onShowSignUp={onShowSignUp} />
      <section className="flex justify-center items-center w-[100%] pt-4 lg:pt-10 pb-5 mt-20 bg-[#FFFFF4]">
        <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start w-[95%]">
          <div className="bg-[#FFFFFF] w-full lg:hidden mb-2">
            <label
              htmlFor="dashboard-toggler"
              className="flex justify-start font-bold items-center text-[#FF4061]"
            >
              <LuMenuSquare size={45} />
              Dashboard Menu
            </label>
          </div>
          <input
            type="checkbox"
            id="dashboard-toggler"
            className={`hidden ${classes["dashboard-toggler"]}`}
          />
          <div
            className={`hidden z-10 lg:static lg:flex flex-col justify-center items-center border-2 border-[#FFC0CB] rounded-lg pt-4 lg:pt-4 w-[100%] lg:w-[25%] bg-[#FFFFFF] lg:h-auto mb-2 lg:mt-0 dahboard-menu ${classes["dashboardtoggleranime"]}`}
          >
            <div className="flex justify-start items-center md:w-[100%] lg:w-[80%] px-4">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R89340451&ga=GA1.1.1679917466.1715339411&semt=sph"
                alt="profilepic"
                className="rounded-lg h-[180px] w-full md:w-[50%] lg:w-full"
              />
            </div>

            <ul className="flex flex-col justify-center items-start pl-4 py-4 w-full">
              <Link
                to="/dashboard"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "dashboard"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <MdSpaceDashboard className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Dashboard
                  </div>
                </li>
              </Link>
              <Link
                to="/find-profile"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "findprofile"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <ImProfile className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Find Profile
                  </div>
                </li>
              </Link>
              <Link
                to="/membership"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "membership"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <MdOutlineCardMembership className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    My Membership
                  </div>
                </li>
              </Link>
              <Link
                to="/edit-profile/personal"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "editprofile"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <BiSolidEdit className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Edit Profile
                  </div>
                </li>
              </Link>
              <Link
                to="/photo-album"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "photoalbum"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <IoAlbums className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Photo Album
                  </div>
                </li>
              </Link>
              <Link
                to="/message"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "message"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <MdMessage className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Message
                  </div>
                </li>
              </Link>
              <Link
                to="/horoscope"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "horoscope"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <SiPlanetscale className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    Horoscope
                  </div>
                </li>
              </Link>
              <Link
                to="/profile-looks-like"
                className="flex justify-center items-center w-full"
              >
                <li
                  className={`flex justify-start items-center ${
                    activePage === "profilelookslike"
                      ? "bg-[#FF4061] text-[#FFFFFF]"
                      : "transparent"
                  } hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition`}
                >
                  <div className="flex justify-center items-center mr-2">
                    <RiProfileFill className="" size={24} />
                  </div>
                  <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                    How my profile looks to other
                  </div>
                </li>
              </Link>
              <li className="flex justify-start items-center hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 py-2 transition">
                <div className="flex justify-center items-center mr-2">
                  <IoLogOut className="" size={24} />
                </div>
                <div className="flex justify-center items-center ml-2 text-[18px] font-bold">
                  Logout
                </div>
              </li>
            </ul>
          </div>
          <div className="relative z-0 flex flex-col justify-center items-center border-2 border-[#FFC0CB] rounded-lg py-4 px-2 lg:p-4 w-full lg:w-[72%] bg-[#FFFFFF] mt-2 lg:mt-0">
            {firstChild}
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center self-center w-full bg-[#FFFFF4] pb-32">
        {secondChild}
      </div>
    </>
  );
};

export default DashboardLayout;
