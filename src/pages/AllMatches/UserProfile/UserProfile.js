import { MdCastForEducation, MdOutlineLocationCity } from "react-icons/md";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/UI/Button/Button";
import { GiAges, GiBodyHeight } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const UserProfile = () => {
  const imgArc =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996";
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center w-full bg-[#FFFFF4] pb-32 pt-10 px-10 mt-20">
        <div className="flex flex-col justify-center items-center w-full p-4 border-2 border-[#FFC0CB] rounded-lg">
          <div className="flex flex-col justify-center items-center w-full mb-10 bg-white">
            <p className="font-bold text-[#FF4061] text-[36px] my-2">Profile</p>
            <p className="font-bold text-[#818181] text-[16px] my-2">
              Most Trusted and premium Matrimony Service in the World.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-between items-start w-[98%]">
              <div className="flex flex-col justify-center items-center w-[49%] ">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996"
                  alt="profile-pic"
                />
                <div className="flex justify-between items-center w-full">
                  <Button
                    text="Chat Now"
                    className="py-5 rounded-none w-[50%] bg-[#333333FF] font-bold"
                  />
                  <Button
                    text="Match Now"
                    className="py-5 rounded-none w-[50%] font-bold"
                  />
                </div>
              </div>
              <ul className="flex flex-col justify-start items-start w-[49%]">
                <li className="flex flex-col justify-start items-start w-full mb-4">
                  <p className="font-extrabold text-[#FF4061] text-[26px] mb-2">
                    User Name
                  </p>
                  <span className="bg-[#4CAF50] font-medium text-[#FFFFFF] rounded-md px-3 my-2">
                    Available
                  </span>
                </li>
                <li className="flex justify-center items-center w-full my-4">
                  <ul className="flex justify-between items-center w-full">
                    <li className="flex flex-col justify-center items-center w-[20%] h-[130px] border-2 rounded-lg">
                      <MdOutlineLocationCity
                        size={35}
                        className="text-[#616161]"
                      />
                      <span className="font-semibold text-[#818181] text-[18px] my-1">
                        City
                      </span>
                      <span className="font-bold text-[#FF4061] text-[18px]">
                        Bhopal
                      </span>
                    </li>
                    <li className="flex flex-col justify-center items-center w-[20%] h-[130px] border-2 rounded-lg">
                      <GiAges size={35} className="text-[#616161]" />
                      <span className="font-semibold text-[#818181] text-[18px] my-1">
                        Age
                      </span>
                      <span className="font-bold text-[#FF4061] text-[18px]">
                        28
                      </span>
                    </li>
                    <li className="flex flex-col justify-center items-center w-[20%] h-[130px] border-2 rounded-lg">
                      <GiBodyHeight size={35} className="text-[#616161]" />
                      <span className="font-semibold text-[#818181] text-[18px] my-1">
                        Height
                      </span>
                      <span className="font-bold text-[#FF4061] text-[18px]">
                        5'4"
                      </span>
                    </li>
                    <li className="flex flex-col justify-center items-center w-[20%] h-[130px] border-2 rounded-lg">
                      <MdCastForEducation
                        size={35}
                        className="text-[#616161]"
                      />
                      <span className="font-semibold text-[#818181] text-[18px] my-1">
                        Occupation
                      </span>
                      <span className="font-bold text-[#FF4061] text-[18px]">
                        Corporate
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="flex flex-col justify-center items-start w-full my-4">
                  <p className="text-[#555555] font-bold my-2">About</p>
                  <p className="text-[#818181] my-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </p>
                </li>
              </ul>
            </div>
            {/* Con-For */}
            <div className="flex justify-between items-start w-[98%] border-b-2">
              <div className="flex flex-col justify-center items-center w-[49%]">
                <div className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#333333] font-bold mb-4">
                    Contact Information
                  </p>
                  <ul className="flex flex-col justify-center items-start mt-2 w-full ">
                    <li className="flex justify-start items-center w-full my-2">
                      <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
                      <span className="font-bold text-[#818181] mx-2">
                        Phone:
                      </span>
                      <span className="text-[#818181] ml-2">0000000000</span>
                    </li>
                    <li className="flex justify-start items-center w-full my-2">
                      <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
                      <span className="font-bold text-[#818181] mx-2">
                        Email:
                      </span>
                      <span className="text-[#818181] ml-2">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-full my-2">
                      <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
                      <span className="font-bold text-[#818181] mx-2">
                        Address:
                      </span>
                      <span className="text-[#818181] ml-2">
                        G-20, Arera colony
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[49%]">
                <li className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#333333] font-bold mb-2">Photo Gallery</p>
                  <ul className="flex justify-between items-center my-2 w-full">
                    <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[130px] overflow-hidden">
                      <img src={imgArc} alt="albums" />
                    </li>
                    <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[130px] overflow-hidden">
                      <img src={imgArc} alt="albums" />
                    </li>

                    <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[130px] overflow-hidden">
                      <img src={imgArc} alt="albums" />
                    </li>
                    <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[130px] overflow-hidden">
                      <img src={imgArc} alt="albums" />
                    </li>
                  </ul>
                </li>
              </div>
            </div>
            {/* Fam-Per */}
            <div className="flex justify-between items-start w-[98%] border-b-2">
              <div className="flex flex-col justify-center items-center w-[49%]">
                <div className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#333333] font-bold mb-4">
                    Family Information
                  </p>
                  <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Father’s Status:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        0000000000
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Mother's Status:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        No of Siblings:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Family Type:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">City:</span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        City:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Family Values:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Country:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        State:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Pincode:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[49%]">
                <div className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#333333] font-bold  mb-4">
                    Personal Information
                  </p>
                  <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Date of Birth:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        0000000000
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Sub-Community:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Height:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Weight:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Marital Status:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Blood Group:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Mother Tongue:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Religion:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Community:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Edu-Hob */}
            <div className="flex justify-between items-start w-[98%]">
              <div className="flex flex-col justify-center items-center w-[49%]">
                <div className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#333333] font-bold mb-4">
                    Educational Background
                  </p>
                  <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Highest Qualification:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        0000000000
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        College Name:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Occupation:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Position:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Company Name:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        G-20, Arera colony
                      </span>
                    </li>
                    <li className="flex justify-start items-center w-[45%] my-2">
                      <span className="font-bold text-[#818181] mx-2 w-[40%]">
                        Salary-Income:
                      </span>
                      <span className="text-[#818181] ml-2 w-[60%]">
                        davis@gmail.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-10 w-[49%]">
                <div className="flex flex-col justify-center items-start w-full">
                  <p className="text-[#333333] font-bold  mb-4">
                    Hobbies & Interest
                  </p>
                  <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                    <li className="flex justify-center items-center w-[21%] my-4 border-2 p-3 rounded-md text-[#818181]">
                      hobbies 1
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-start py-10 w-full">
                  <p className="text-[#555555] font-bold text-[20px] ">
                    Social Media
                  </p>
                  <ul className="flex flex-wrap justify-between items-start mt-2 w-[40%]  ">
                    <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
                      <FaWhatsappSquare size={45} className="text-[#515151]" />
                    </li>
                    <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
                      <FaInstagramSquare size={45} className="text-[#515151]" />
                    </li>
                    <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
                      <FaFacebookSquare size={45} className="text-[#515151]" />
                    </li>
                    <li className="flex justify-center items-center w-[45px] h-[45px] my-4 border-2 rounded-md">
                      <FaXTwitter size={45} className="text-[#515151]" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfile;
