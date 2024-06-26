import Button from "../UI/Button/Button";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../../index.css";

const Footer = (props) => {
  return (
    <footer
      className={`flex justify-center items-center w-[100%] ${
        props.isLoggedIn ? "bg-[#FF8C9C]" : "bg-[#FF4061]"
      } pb-10 pt-36`}
    >
      <div className="flex flex-col justify-center items-center w-[90%]">
        <div className=" flex flex-col justify-center items-center bg-[#FFC0CB] w-full lg:w-[80%] rounded-lg shadow-md -mt-56 mb-4 py-4 px-2">
          {!props.isLoggedIn && (
            <>
              <p className="text-[20px] md:text-[38px] lg:text-[48px] font-black text-[#FF4061] text-center">
                Find your perfect Match now
              </p>
              <p className="font-normal lg:font-bold text-[#FFFFFF] w-full lg:w-[60%] text-center mt-2">
                lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
                fringilla.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <Button
                text="Sign Up"
                className="!bg-[#000000] font-normal lg:font-bold text-[16px] lg:text-[28px] flex justify-center items-center !px-10 mt-4"
              />
            </>
          )}
          {props.isLoggedIn && (
            <p className="text-[#FFFFFF] text-[18px] md:text-[20px] lg:text-[22px] font-medium py-5 text-center">
              Free support: +
              <span className="text-[17px] md:text-[19px] lg:text-[21px]">
                91 0000000000
              </span>{" "}
              | Email: info@example.com
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-[90%]">
          <ul className="flex flex-col md:flex-col gap-y-3 lg:flex-row justify-around items-start w-[100%]">
            <li className="flex flex-col justify-center items-center lg:items-start w-full md:w-full lg:w-[30%]">
              <p className="text-[20px] font-medium lg:font-bold text-[#FFFFFF] mb-2 text-center lg:text-left w-full">
                About Us
              </p>
              <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-[80%] lg:w-[70%]">
                Our matrimonial website helps you find the perfect match. We
                provide a secure and user-friendly platform for you to connect
                with potential life partners.
              </p>
            </li>
            <span className="w-[50%] h-[.8px] lg:w-[.8px] lg:h-[200px] bg-[#CCCCCCaa] self-center"></span>
            <li className="flex flex-col justify-center items-start w-full md:w-full lg:w-[30%]">
              <p className="text-[20px] font-medium lg:font-bold text-[#FFFFFF] mb-2 text-center lg:text-left w-full">
                Quick Links
              </p>
              <ul className="flex flex-col justify-center items-start w-full">
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">Cancellation Policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">About Us</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">Terms & Conditions</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">Refund Policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">Privacy policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-normal lg:font-medium text-[16px] mt-1 text-center lg:text-start w-full lg:w-[70%]">
                    <a href="/">Contact Us</a>
                  </p>
                </li>
              </ul>
            </li>
            <span className="w-[50%] h-[.8px] lg:w-[.8px] lg:h-[200px] bg-[#CCCCCCaa] self-center"></span>
            <li className="flex flex-col justify-center items-center lg:items-start w-full md:w-full lg:w-[30%]">
              <p className="text-[20px] font-medium lg:font-bold text-[#FFFFFF] mb-2 text-center lg:text-left w-full">
                Follow Us
              </p>
              <div className="flex justify-start items-center mt-2">
                <a href="/">
                  <FaInstagramSquare
                    className="text-[#FFFFFF] rounded-md mr-2"
                    size={28}
                  />
                </a>
                <a href="/">
                  <FaSquareXTwitter
                    className="text-[#FFFFFF] rounded-md mr-2"
                    size={28}
                  />
                </a>
                <a href="/">
                  <FaFacebookSquare
                    className="text-[#FFFFFF] rounded-md mr-2"
                    size={28}
                  />
                </a>
                <a href="/">
                  <FaLinkedin
                    className="text-[#FFFFFF] rounded-md mr-2"
                    size={28}
                  />
                </a>
              </div>
            </li>
          </ul>
          <span className="w-[50%] h-[.8px] lg:w-full lg:h-[.8px] bg-[#CCCCCCaa] self-center my-3"></span>
          <div className="flex flex-col justify-center items-center pt-8">
            <p className="text-center text-[#FFFFFF] my-2 text-[14px] font-normal">
              © 2024 Matrimonial Site. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
