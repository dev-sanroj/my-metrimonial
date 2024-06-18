import React, { useState } from "react";
import SelectInput from "../../components/UI/SelectInput/SelectInput";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const SignUpStep2 = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    maritalStatus: "",
    dateOfBirth: "",
    heightFt: "",
    heightIn: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="first-name"
            placeholder="Enter first name"
            label="First Name:"
            className="w-full"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <Input
            id="last-name"
            placeholder="Enter last name"
            label="Last Name:"
            className="w-full"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="maritalStatus"
            name="maritalStatus"
            label="Marital Status:"
            options={["Single", "Married", "Divorced", "Widowed"]}
            className="w-full"
            value={formData.maritalStatus}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-end w-full md:w-[48%]">
          <Input
            id="dateOfBirth"
            placeholder="MM/DD/YYYY"
            label="Date of Birth:"
            className="w-full"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-between items-end w-full md:w-[48%]">
          <div className="flex justify-between items-center w-[48%]">
            <SelectInput
              id="heightFt"
              name="heightFt"
              label="Height (Ft):"
              options={["4", "5", "6", "7"]}
              className="w-full"
              value={formData.heightFt}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-end w-[48%]">
            <SelectInput
              id="heightIn"
              name="heightIn"
              label="Height (In):"
              options={[
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
              ]}
              className="w-full"
              value={formData.heightIn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[48%]">
          <SelectInput
            id="weight"
            name="weight"
            label="Weight:"
            options={[
              "50 kg",
              "55 kg",
              "60 kg",
              "65 kg",
              "70 kg",
              "75 kg",
              "80 kg",
            ]}
            className="w-full"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
        <div className="flex justify-between items-center w-full">
          <Button
            text="Prev"
            onButtonClick={onPrev}
            className="w-[48%] h-[50px] font-bold text-[24px]"
            bgBtn="bg-[#333333] hover:bg-[#222222]"
          />
          <Button
            text="Next"
            className="w-[48%] h-[50px] font-bold text-[24px]"
          />
        </div>
      </div>
    </form>
  );
};

export default SignUpStep2;

// import SelectInput from ".././../components/UI/SelectInput/SelectInput";
// import Button from "../../components/UI/Button/Button";
// import Input from "../../components/UI/Input/Input";

// const SignUpStep2 = (props) => {
//   return (
//     <form className="flex flex-col justify-start items-start w-full lg:w-[70%] mt-8 h-[400px] md:h-auto overflow-y-scroll md:overflow-auto">
//       <div className="flex flex-col md:flex-row justify-between items-center w-full">
//         <div className="flex justify-center items-center w-full md:w-[48%]">
//           <Input
//             id="first-name"
//             placeholder="Enter first name"
//             label="First Name:"
//             className="w-full"
//           />
//         </div>
//         <div className="flex justify-center items-center w-full md:w-[48%]">
//           <Input
//             id="last-name"
//             placeholder="Enter last name"
//             label="Last Name:"
//             className="w-full"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between items-center w-full">
//         <div className="flex justify-center items-center w-full md:w-[48%]">
//           <SelectInput
//             id="maritalstatus"
//             name="maritalstatus"
//             label="Marital Status:"
//             options={[]}
//             className="w-full"
//           />
//         </div>
//         <div className="flex justify-center items-end w-full md:w-[48%]">
//           <Input
//             id="dateofbirth"
//             placeholder="_ _/_ _/_ _ _ _"
//             label="Date of Birth:"
//             className="w-full"
//           />
//           {/* <div className="flex justify-between items-center mr-2 w-[30%]">
//             <SelectInput
//               id="maritalstatus"
//               name="maritalstatus"
//               select="Date"
//               label="Date of Birth:"
//               options={[]}
//               className="w-full"
//             />
//           </div>
//           <div className="flex justify-between items-center mr-2 w-[30%]">
//             <SelectInput
//               id="maritalstatus"
//               name="maritalstatus"
//               select="Month"
//               options={[]}
//               className="w-full"
//             />
//           </div>
//           <div className="flex justify-between items-center mr-2 w-[30%]">
//             <SelectInput
//               id="maritalstatus"
//               name="maritalstatus"
//               select="Year"
//               options={[]}
//               className="w-full"
//             />
//           </div> */}
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between items-center w-full">
//         <div className="flex justify-between items-end w-full md:w-[48%]">
//           <div className="flex justify-between items-center w-[48%]">
//             <SelectInput
//               id="height"
//               name="height"
//               select="Select Ft._ _"
//               label="Height:"
//               options={[]}
//               className="w-full"
//             />
//           </div>
//           <div className="flex justify-between items-end w-[48%]">
//             <SelectInput
//               id="height"
//               name="height"
//               select="Select In._ _"
//               options={[]}
//               className="w-full"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center items-center w-full md:w-[48%]">
//           <SelectInput
//             id="weight"
//             name="weight"
//             label="Weight:"
//             options={[]}
//             className="w-full"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-start w-full mt-10 mb-2">
//         <Button className="w-full h-[60px] font-bold text-[24px]">
//           Sign Up
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default SignUpStep2;
