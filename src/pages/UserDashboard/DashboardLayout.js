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
import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";

const menuItems = [
  {
    to: "/dashboard",
    icon: MdSpaceDashboard,
    label: "Dashboard",
    page: "dashboard",
  },
  {
    to: "/searchprofile",
    icon: ImProfile,
    label: "Find Profile",
    page: "findprofile",
  },
  {
    to: "/membership",
    icon: MdOutlineCardMembership,
    label: "My Membership",
    page: "membership",
  },
  {
    to: "/edit-profile/personal",
    icon: BiSolidEdit,
    label: "Edit Profile",
    page: "editprofile",
  },
  {
    to: "/photo-album",
    icon: IoAlbums,
    label: "Photo Album",
    page: "photoalbum",
  },
  { to: "/message", icon: MdMessage, label: "Message", page: "message" },
  {
    to: "/horoscope",
    icon: SiPlanetscale,
    label: "Horoscope",
    page: "horoscope",
  },
  {
    to: "/profile-looks-like",
    icon: RiProfileFill,
    label: "How my profile looks to other",
    page: "profilelookslike",
  },
  { to: "/logout", icon: IoLogOut, label: "Logout", page: "logout" },
];

const DashboardLayout = ({ children, activePage, onShowSignUp }) => {
  const [isAsideExpandeded, setisAsideExpandeded] = useState(false);
  const [firstChild, secondChild] = React.Children.toArray(children);

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className="flex justify-center items-center w-full"
      >
        <li
          className={`flex ${
            isAsideExpandeded ? "lg:flex-row py-2" : "lg:flex-col py-2 lg:py-3"
          }
          justify-start items-center ${
            activePage === item.page
              ? "bg-[#FF4061] text-[#FFFFFF]"
              : "transparent"
          }
          hover:text-[#FFFFFF] hover:bg-[#FF4061aa] w-full px-2 transition`}
        >
          <div
            className={`flex justify-center items-center ${
              isAsideExpandeded ? "mr-2" : "mr-2 lg:mr-0"
            }`}
          >
            <item.icon size={24} />
          </div>
          <div
            className={`flex items-center font-bold ${
              isAsideExpandeded
                ? "text-[18px] ml-2"
                : "text-[18px] lg:text-[10px] ml-2 lg:ml-0 lg:font-medium lg:text-center lg:hidden"
            }`}
          >
            {item.label}
          </div>
        </li>
      </Link>
    ));
  };

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
            className={`hidden z-10 lg:static lg:flex flex-col justify-start items-center border-2 border-[#FFC0CB] rounded-lg pt-4 lg:min-h-[660px] lg:max-h-[660px] lg:pt-4 w-[100%] ${
              isAsideExpandeded ? "lg:w-[25%]" : "lg:w-[5%]"
            } bg-[#FFFFFF] lg:h-auto mb-2 lg:mt-0 dashboard-menu ${
              classes["dashboardtoggleranime"]
            }`}
          >
            <div
              className={`lg:flex items-center bg-[#FFFFFF] w-full mb-2 px-4 hidden ${
                isAsideExpandeded ? "justify-start" : "justify-center"
              }`}
            >
              <div
                onClick={() => setisAsideExpandeded(!isAsideExpandeded)}
                className="cursor-pointer flex justify-start font-bold items-center transition duration-75 active:text-[#2e2e2e] text-[#FF4061]"
              >
                <LuMenuSquare size={45} />
              </div>
            </div>
            <div
              className={`flex items-center md:w-[100%] lg:mt-3 ${
                isAsideExpandeded
                  ? "px-4 justify-start lg:justify-center lg:w-[100%]"
                  : "px-4 lg:px-0 justify-start lg:justify-center lg:w-[50px] lg:h-[50px] lg:rounded-full lg:p-2"
              }`}
            >
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R89340451&ga=GA1.1.1679917466.1715339411&semt=sph"
                alt="profilepic"
                className={`w-full md:w-[50%] ${
                  isAsideExpandeded
                    ? "rounded-lg lg:w-[80%]"
                    : "lg:h-[50px] lg:w-[50px] rounded-lg lg:rounded-full"
                }`}
              />
            </div>

            <ul
              className={`flex flex-col justify-center items-start py-4 w-full ${
                isAsideExpandeded ? "pl-4" : "pl-4 lg:pl-0"
              }`}
            >
              {renderMenuItems()}
            </ul>
          </div>
          <div
            className={`relative z-0 flex flex-col justify-start items-center border-2  border-[#FFC0CB] rounded-lg py-4 px-2 lg:p-4 w-full lg:min-h-[660px] lg:max-h-[660px] bg-[#FFFFFF] mt-2 lg:mt-0  ${
              isAsideExpandeded ? "lg:w-[72%]" : "lg:w-[92%]"
            }`}
          >
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
