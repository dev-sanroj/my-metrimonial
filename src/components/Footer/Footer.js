import Button from "../UI/Button/Button";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-[100%] bg-[#FF4061] pb-10 pt-28">
      <div className="relative flex flex-col justify-center items-center w-[90%]">
        <div className="absolute flex flex-col justify-center items-center bg-[#FFC0CB] w-[80%] rounded-lg shadow-md -top-[70%] py-4">
          <p className="text-[38px] font-black text-[#FF4061] w-[80%] text-center">
            Find your perfect Match now
          </p>
          <p className="font-bold text-[#FFFFFF] w-[60%] text-center mt-2">
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <Button
            text="Sign Up"
            className="!bg-[#000000] font-bold text-[24px] flex justify-center items-center !px-10 mt-4"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[90%]">
          <ul className="flex justify-around items-start w-[100%]">
            <li className="flex flex-col justify-center items-start w-[30%]">
              <p className="text-[20px] font-bold text-[#FFFFFF] mb-2">
                About Us
              </p>
              <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                Our matrimonial website helps you find the perfect match. We
                provide a secure and user-friendly platform for you to connect
                with potential life partners.
              </p>
            </li>
            <span className="w-[.8px] h-[200px] bg-[#CCCCCCaa]"></span>
            <li className="flex flex-col justify-center items-start w-[30%]">
              <p className="text-[20px] font-bold text-[#FFFFFF] mb-2">
                Quick Links
              </p>
              <ul className="flex flex-col justify-center items-start w-full">
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">Cancellation Policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">About Us</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">Terms & Conditions</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">Refund Policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">Privacy policy</a>
                  </p>
                </li>
                <li className="flex justify-start items-center w-full hover:underline transition">
                  <p className="text-[#EEEEEE] font-medium text-[16px] mt-1 text-start w-[70%]">
                    <a href="/">Contact Us</a>
                  </p>
                </li>
              </ul>
            </li>
            <span className="w-[.8px] h-[200px] bg-[#CCCCCCaa]"></span>
            <li className="flex flex-col justify-center items-start w-[30%]">
              <p className="text-[20px] font-bold text-[#FFFFFF] mb-2">
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
          <span className="w-[100%] h-[.8px] bg-[#CCCCCCaa] my-5"></span>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-medium text-[#FFFFFF] my-1 text-[16px]">
              Free support: +91 0000000000 | Email: info@example.com
            </p>
            <p className="text-center text-[#FFFFFF] my-2 text-[14px]">
              © 2024 Matrimonial Site. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
