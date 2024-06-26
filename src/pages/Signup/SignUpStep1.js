import { FaCheckCircle } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { AiOutlineLoading } from "react-icons/ai";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useState } from "react";

const SignUpStep1 = ({ onNext }) => {
  console.log(
    "///////////////////////////////////////////////////////////////////////"
  );
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    let valid = true;

    if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError("Please enter a valid 10-digit mobile number.");
      valid = false;
    } else {
      setMobileNumberError("");
    }

    if (otpSent && !otpVerified) {
      if (otp.length !== 4) {
        setOtpError("Please enter a valid 4-digit OTP.");
        valid = false;
      } else {
        setOtpError("Incorrect OTP. Please try again.");
        valid = false;
      }
    }

    // if (!otpSent && !otpVerified) {
    //   setOtpError("Please send OTP first.");
    //   valid = false;
    // }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleOtpSend = () => {
    setOtpSent(true);
    setOtpVerified(false);
    setOtpError(""); // Clear OTP error when sending a new OTP
    alert("OTP sent to your mobile number!");
  };

  const handleOtpVerify = () => {
    if (otp === "1234") {
      setOtpVerified(true);
      setOtpError("");
      alert("OTP verified successfully!");
    } else {
      setOtpVerified(false);
      setOtpError("Incorrect OTP. Please try again.");
    }
  };

  const handleOnNext = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log("line87:", otpError);
    if (!validateInputs()) {
      setIsLoading(false);
      console.log("line90:", otpError);
      return;
    }

    try {
      const data = {
        mobileNumber,
        otp,
        email,
        password,
      };
      console.log(data);
      // Post data to API
      onNext(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("line112:", otpError);
  return (
    <form
      onSubmit={handleOnNext}
      className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="mobile-number"
            placeholder="Enter mobile no"
            label="Mobile Number:"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            message={otpVerified ? "Verified" : ""}
            messageIcon={
              otpVerified && <FaCheckCircle className="ml-1 text-[#75F94C]" />
            }
            className={`w-full ${mobileNumberError ? "border-red-500" : ""}`}
            error={mobileNumberError}
          />
        </div>
        <div className="flex justify-between items-end w-full md:w-[48%]">
          <div className="flex flex-col justify-center items-start w-full">
            <label className="text-[#333333] font-medium my-1">OTP:</label>
            <div className="flex justify-between items-center w-full">
              <input
                id="otp"
                type="text"
                placeholder="_ _ _ _"
                maxLength={4}
                minLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className={`px-3 focus:outline-[#333333] border-2 ${
                  otpError ? "border-red-500" : "border-[#858585]"
                } rounded-lg h-[50px] w-[80px] text-[20px]`}
              />
              <Button
                text="OK"
                onButtonClick={handleOtpVerify}
                className="rounded-xl font-bold px-4 h-[50px]"
                disabled={otpVerified}
              />
              <Button
                text="Resend"
                onButtonClick={handleOtpSend}
                className="bg-[#858585] text-[#333] rounded-xl font-bold h-[50px]"
                disabled={otpVerified}
              />
            </div>
            {otpError && (
              <p className="text-[14px] text-[#FF4061] font-medium h-[24px]">
                {otpError}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start w-full mt-4">
        <Input
          id="email"
          placeholder="Enter email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full ${emailError ? "border-red-500" : ""}`}
          error={emailError}
        />
      </div>
      <div className="flex justify-between items-center w-full mt-4">
        <Input
          id="password"
          type={isPasswordShow ? "text" : "password"}
          placeholder="Enter password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full ${passwordError ? "border-red-500" : ""}`}
          inputBtn={
            isPasswordShow ? (
              <VscEye className="!text-[#858585] mr-2" />
            ) : (
              <VscEyeClosed className="!text-[#858585] mr-2" />
            )
          }
          inputBtnHandler={() => setIsPasswordShow(!isPasswordShow)}
          error={passwordError}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button
          text={isLoading ? "Loading..." : "Next"}
          className="flex justify-center items-center w-full h-[50px] font-bold text-[24px]"
          disabled={isLoading || !otpVerified}
        >
          {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
        </Button>
      </div>
    </form>
  );
};

export default SignUpStep1;
