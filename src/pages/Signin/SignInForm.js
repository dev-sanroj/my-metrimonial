import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const SignInForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex according to your phone number format
    return phoneRegex.test(phoneNumber);
  };

  const validateInputs = () => {
    let valid = true;

    if (isValidEmail(userName) || isValidPhoneNumber(userName)) {
      setUserNameError("");
    } else {
      setUserNameError("Please enter a valid email or phone number");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const onSignInHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!validateInputs()) {
      setIsLoading(false);
      return;
    }
    try {
      const data = {
        userName,
        password,
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
      onSubmit={onSignInHandler}
      className="flex flex-col justify-center items-start w-full mt-8 bg-[]"
    >
      <Input
        id="phoneNumber"
        placeholder="Enter Phone or email"
        label="Phone or Email id"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="w-[550px]"
        error={userNameError}
      />

      <Input
        id="password"
        type={isPasswordShow ? "text" : "password"}
        placeholder="Enter password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputBtn={
          isPasswordShow ? (
            <VscEye className="!text-[#858585] mr-2" />
          ) : (
            <VscEyeClosed className="!text-[#858585] mr-2" />
          )
        }
        className={`w-full ${passwordError ? "border-red-500" : ""}`}
        inputBtnHandler={() => setIsPasswordShow(!isPasswordShow)}
        error={passwordError}
      />

      <p
        onClick={props.onShowForgotPassword}
        className="text-[#66B6FF] ml-2 hover:underline cursor-pointer"
      >
        Forgot Password?
      </p>

      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <Button
          text={isLoading ? "Loading..." : "Sign In"}
          className="w-full h-[60px] font-bold text-[24px]"
          disabled={isLoading}
        >
          {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { VscEyeClosed, VscEye } from "react-icons/vsc";
// import Button from "../../components/UI/Button/Button";
// import Input from "../../components/UI/Input/Input";

// const SignInForm = (props) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [isPasswordShow, setIsPasswordShow] = useState(false);
//   const [apiError, setApiError] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       console.log("Success:", data);
//     } catch (error) {
//       // Handle error response
//       setApiError("Failed to sign in. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col justify-center items-start w-full mt-8"
//     >
//       <Input
//         id="mobile-number"
//         placeholder="Enter mobile or email"
//         label="Mobile Number or Email id"
//         className="w-[550px]"
//         {...register("identifier", { required: "This field is required" })}
//         error={errors.identifier && errors.identifier.message}
//       />

//       <Input
//         id="password"
//         type={isPasswordShow ? "text" : "password"}
//         placeholder="Enter password"
//         label="Password"
//         {...register("password", { required: "Password is required" })}
//         inputBtn={
//           isPasswordShow ? (
//             <VscEye className="!text-[#858585] mr-2" />
//           ) : (
//             <VscEyeClosed className="!text-[#858585] mr-2" />
//           )
//         }
//         inputBtnHandler={() => setIsPasswordShow(!isPasswordShow)}
//         error={errors.password && errors.password.message}
//       />

//       <p
//         onClick={props.onShowForgotPassword}
//         className="text-[#66B6FF] ml-2 hover:underline cursor-pointer"
//       >
//         Forgot Password?
//       </p>

//       {apiError && <p className="text-red-500">{apiError}</p>}

//       <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
//         <Button type="submit" className="w-full h-[60px] font-bold text-[24px]">
//           Sign In
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default SignInForm;
