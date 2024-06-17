import Button from "../UI/Button/Button";
import SelectInput from "../UI/SelectInput/SelectInput";

const FindYourMatchForm = () => {
  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col justify-center items-center mt-10 w-full"
    >
      <div className="flex flex-col md:flex-col lg:flex-row justify-center min-h-[80px] w-full md:w-full lg:w-auto items-center mb-5 p-3 lg:p-3 border-2 border-[#FF4061] bg-[rgba(0,0,0,0.2)] rounded-lg">
        <div className="flex justify-center items-center mx-0 lg:mx-2 my-3 lg:my-0 w-full">
          <SelectInput
            name="lookingFor"
            select="I'm Looking For"
            options={["Bride", "Groom"]}
            className=" font-semibold bg-[#FFF9F0] text-[#FF4061] border-none"
            width="w-full lg:w-[170px]"
          />
        </div>
        <div className="flex justify-center items-center mx-0 lg:mx-2 my-3 lg:my-0 w-full">
          <SelectInput
            name="age"
            className=" font-semibold bg-[#FFF9F0] text-[#FF4061] lg:w-[170px] border-none"
            select="Age"
            options={["18-25", "26-30", "31-35", "36-40", "41-45", "46+"]}
          />
        </div>
        <div className="flex justify-center items-center mx-0 lg:mx-2 my-3 lg:my-0 w-full">
          <SelectInput
            name="religion"
            className=" font-semibold bg-[#FFF9F0] text-[#FF4061] lg:w-[170px] border-none"
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
          />
        </div>
        <div className="flex justify-center items-center mx-0 md:mx-0 lg:mx-2 my-3 lg:my-0 w-full">
          <SelectInput
            name="location"
            className="font-semibold bg-[#FFF9F0] text-[#FF4061] lg:w-[170px] border-none"
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
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-3 lg:mt-5 w-full">
        <Button
          text="Find Your Match"
          className="border-2 border-[#FFFFFF] font-extrabold h-[60px] text-[18px] md:text-[22px] w-[260px]"
          bgBtn="bg-[rgba(255,64,97,0.5)]"
        />
      </div>
    </form>
  );
};

export default FindYourMatchForm;
