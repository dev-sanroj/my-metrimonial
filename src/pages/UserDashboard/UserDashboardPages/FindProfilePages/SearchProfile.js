import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button/Button";
import DashboardLayout from "../../DashboardLayout";
import SelectInput from "../../../../components/UI/SelectInput/SelectInput";

const SearchProfile = (props) => {
  return (
    <DashboardLayout activePage="findprofile" onShowSignUp={props.onShowSignUp}>
      <div className="flex flex-col justify-start items-center w-full max-h-[540px] overflow-y-scroll py-4">
        <div className="flex flex-col justify-start items-start w-full border-2 border-[#FFC0CB] p-4 rounded-md md:py-10">
          <p className="text-[16px] font-semibold text-[#333333] mb-3">
            Serach By Profile Id:
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center w-full">
            <input
              type="text"
              placeholder="Enter profile id"
              className="p-2 text-[#FFFFFF] font-medium rounded-md bg-[#FFC0CB] placeholder:text-[#FFFFFF] h-[50px] focus:bg-[#FF4061aa] outline-none w-full md:w-[360px]"
            />
            <Link
              to="/profile-looks-like"
              className="flex justify-center items-center w-full mt-4 md:mt-0"
            >
              <Button
                text="Search Profile"
                className="md:ml-8 h-[50px] font-bold w-full md:w-auto"
              />
            </Link>
          </div>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-6"></span>
        <div className="flex flex-col justify-between items-start w-full border-2 border-[#FFC0CB] p-4 rounded-md md:py-10">
          <p className="text-[16px] font-semibold text-[#333333]">
            Find Your Match:
          </p>
          <div className="flex flex-wrap flex-col md:flex-row justify-between items-center w-full">
            <SelectInput
              id="imlookingfor"
              select="I'm looking for"
              options={["Bride", "Groom"]}
              className="bg-[#FFC0CBFF] focus:outline-none !outline-transparent border-none font-medium text-[#FFFFFF]"
              width="w-full md:w-[48%] lg:w-[24%] text-[#FFFFFF]"
            />
            <SelectInput
              id="age"
              select="Age"
              options={["18-25", "26-30", "31-35", "36-40", "41-45", "46+"]}
              className="bg-[#FFC0CBFF] focus:outline-none !outline-transparent border-none font-medium text-[#FFFFFF]"
              width="w-full md:w-[48%] lg:w-[24%] text-[#FFFFFF]"
            />
            <SelectInput
              id="religion"
              select="Religion"
              options={[
                "Hindu",
                "Muslim",
                "Christian",
                "Sikh",
                "Buddhist",
                "Jain",
                "Other",
              ]}
              className="bg-[#FFC0CBFF] focus:outline-none !outline-transparent border-none font-medium text-[#FFFFFF]"
              width="w-full md:w-[48%] lg:w-[24%] text-[#FFFFFF]"
            />
            <SelectInput
              id="location"
              select="Location"
              options={[
                "Delhi",
                "Mumbai",
                "Bangalore",
                "Chennai",
                "Kolkata",
                "Hyderabad",
                "Other",
              ]}
              className="bg-[#FFC0CBFF] focus:outline-none !outline-transparent border-none font-medium text-[#FFFFFF]"
              width="w-full md:w-[48%] lg:w-[24%] text-[#FFFFFF]"
            />
          </div>
          <div className="flex justify-center items-center w-full mt-8">
            <Link
              to="/findprofile"
              className="flex justify-center items-center w-full"
            >
              <Button
                text="Find Your Match"
                className="md:ml-8 h-[50px] w-full md:w-[200px] font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default SearchProfile;
