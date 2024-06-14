import badge from "../../assets/images/Badge.png";
import icon from "../../logo.svg";

const WhyChooseUsSection = () => {
  return (
    <section className="flex justify-center items-center w-[100%] bg-[#FFF9F0] py-10">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <div className="relative flex justify-center items-center min-h-[300px] w-[100%]">
          <span className="absolute font-black text-[100px] lg:text-[140px] text-[#FFF0EA] z-10">
            Logo
          </span>
          <div className="relative flex flex-col justify-center items-center z-10">
            <img src={icon} alt="" className="opacity-[0.4]" />
            <p className="text-[#333333] font-bold text-[32px] lg:text-[52px] text-center">
              Why choose us
            </p>
            <p className="text-[#818181] font-semibold text-[18px] lg:text-[24px] mt-2 tracking-wider text-center">
              Most Trusted and premium Matrimony Service in the World.
            </p>
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row justify-around items-center min-h-[300px] w-[95%]">
          <li className="flex flex-col justify-center items-center bg-[#FFE8E5] rounded-lg my-4 w-[100%] lg:w-[30%] h-[265px] py-10 px-6 shadow-[0_0_8px_0px_rgba(0,0,0,0.1)]">
            <img src={badge} alt="" width={90} className="opacity-[40%] mb-2" />
            <p className="font-bold text-[#333333] text-[24px] my-1 text-center">
              Genuine profiles
            </p>
            <p className="font-normal text-[#333333] text-[16px] my-1 text-center">
              Contact genuine profiles with 100% verified mobile
            </p>
          </li>
          <li className="flex flex-col justify-center items-center bg-[#FFE8E5] rounded-lg my-4 w-[100%] lg:w-[30%] h-[265px] py-10 px-6 shadow-[0_0_8px_0px_rgba(0,0,0,0.1)]">
            <img src={badge} alt="" width={90} className="opacity-[40%] mb-2" />
            <p className="font-bold text-[#333333] text-[24px] my-1 text-center">
              Most trusted
            </p>
            <p className="font-normal text-[#333333] text-[16px] my-1 text-center">
              The most trusted wedding matrimony brand lorem
            </p>
          </li>
          <li className="flex flex-col justify-center items-center bg-[#FFE8E5] rounded-lg my-4 w-[100%] lg:w-[30%] h-[265px] py-10 px-6 shadow-[0_0_8px_0px_rgba(0,0,0,0.1)]">
            <img src={badge} alt="" width={90} className="opacity-[40%] mb-2" />
            <p className="font-bold text-[#333333] text-[24px] my-1 text-center">
              Secure and Confidential
            </p>
            <p className="font-normal text-[#333333] text-[16px] my-1 text-center">
              Lakhs of peoples have found their life partner
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
