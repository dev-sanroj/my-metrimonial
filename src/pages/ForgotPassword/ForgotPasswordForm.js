import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const ForgotPasswordForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  const validateInputs = () => {
    let valid = true;

    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit Phone number.");
      valid = false;
    } else {
      setPhoneNumberError("");
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

    if (newPassword.length < 8) {
      setNewPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else {
      setNewPasswordError("");
    }

    return valid;
  };

  const handleOtpSend = () => {
    setOtpSent(true);
    setOtpVerified(false);
    setOtpError(""); // Clear OTP error when sending a new OTP
    alert("OTP sent to your phone number!");
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

  const handleOnPasswordReset = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // console.log("line87:", otpError);
    if (!validateInputs()) {
      setIsLoading(false);
      // console.log("line90:", otpError);
      return;
    }

    try {
      const data = {
        phoneNumber,
        newPassword,
      };
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleOnPasswordReset}
      className="flex flex-col justify-center items-start w-full mt-8"
    >
      <Input
        id="phoneNumber"
        placeholder="Enter phone number"
        label="Phone Number "
        message={otpVerified ? "Verified" : ""}
        messageIcon={
          otpVerified && <FaCheckCircle className="ml-1 text-[#75F94C]" />
        }
        className="w-[550px]"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        error={phoneNumberError}
      />

      <div className="flex justify-start items-center mt-4 mb-2">
        <input
          type="text"
          minLength="4"
          maxLength="4"
          placeholder="_ _ _ _"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className={`flex justify-center items-center ${
            otpError ? "border-red-500" : "border-[#858585]"
          } text-[#858585] text-[20px] w-[90px] h-[50px] rounded-md border-2 border-[#858585] px-5 focus:outline-[#333333]`}
        />

        <Button
          text="OK"
          onButtonClick={handleOtpVerify}
          className="ml-2 rounded-xl font-bold"
          disabled={otpVerified && phoneNumberError}
        />
        <Button
          text="Resend"
          onButtonClick={handleOtpSend}
          className="bg-[#858585] text-[#333] ml-2 rounded-xl font-bold"
          disabled={otpVerified}
        />
      </div>
      {otpError && (
        <p className="text-[14px] text-[#FF4061] font-medium h-[24px]">
          {otpError}
        </p>
      )}

      <Input
        id="newPassword"
        placeholder="Enter new password"
        label="New Password"
        className="w-[550px]"
        value={newPassword}
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
        error={newPasswordError}
      />

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button
          text={isLoading ? "Loading..." : "Done"}
          className="w-full h-[60px] font-bold text-[24px]"
          disabled={isLoading || !otpVerified}
        >
          {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
