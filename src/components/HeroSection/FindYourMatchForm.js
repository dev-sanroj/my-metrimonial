import { useState } from "react";
import Button from "../UI/Button/Button";

const FindYourMatchForm = () => {
  const [findUourMatchFormData, setFindUourMatchFormData] = useState({
    lookingFor: "",
    age: "",
    religion: "",
    location: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFindUourMatchFormData({ ...findUourMatchFormData, [name]: value });
    console.log(value);
  };

  const findUourMatchFormHandler = (e) => {
    e.preventDefault();
    console.log(findUourMatchFormData);
  };

  return (
    <form
      onSubmit={findUourMatchFormHandler}
      className="flex flex-col justify-center items-center mt-10"
    >
      <div className="flex justify-center h-[80px] w-[650px] items-center mb-5 p-5 border-2 border-[#FF4061] bg-[rgba(0,0,0,0.2)] rounded-lg">
        <div className="mx-2">
          <select
            name="lookingFor"
            value={findUourMatchFormData.lookingFor}
            onChange={handleOnChange}
            className="block h-[50px] font-semibold px-4 py-2 border rounded bg-[#FFF9F0] text-[#FF4061]"
          >
            <option value="">I'm looking for</option>
            <option value="bride">Bride</option>
            <option value="groom">Groom</option>
          </select>
        </div>
        <div className="mx-2">
          <select
            name="age"
            value={findUourMatchFormData.age}
            onChange={handleOnChange}
            className="block h-[50px] font-semibold px-4 py-2 border rounded bg-[#FFF9F0] text-[#FF4061]"
          >
            <option value="">Age</option>
            <option value="18-25">18-25</option>
            <option value="26-30">26-30</option>
            <option value="31-35">31-35</option>
            <option value="36-40">36-40</option>
            <option value="41-45">41-45</option>
            <option value="46+">46+</option>
          </select>
        </div>
        <div className="mx-2">
          <select
            name="religion"
            value={findUourMatchFormData.religion}
            onChange={handleOnChange}
            className="block h-[50px] font-semibold px-4 py-2 border rounded bg-[#FFF9F0] text-[#FF4061]"
          >
            <option value="">Religion</option>
            <option value="">Select Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="buddhist">Buddhist</option>
            <option value="jain">Jain</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mx-2">
          <select
            name="location"
            onChange={handleOnChange}
            className="block h-[50px] font-semibold px-4 py-2 border rounded bg-[#FFF9F0] text-[#FF4061]"
          >
            <option value="">Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button
          text="Find Your Match"
          className="border-2 border-[#FFFFFF] font-extrabold !bg-[rgba(255,64,97,0.5)] px-16 py-6"
        />
      </div>
    </form>
  );
};

export default FindYourMatchForm;
