import leafBgPic from "../../assets/images/svgviewer-png-output.png";
import icon from "../../logo.svg";
import HIWCard from "./HIWCard";

const HowItsWorkSection = () => {
  const description =
    "hello Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.";

  return (
    <section className="flex justify-center items-center w-[100%] pt-10 pb-24 bg-[#FFFFF4]">
      <div className="flex flex-col justify-center items-center w-[80%] mb-20">
        <div className="relative flex justify-center items-center min-h-[300px] w-[100%]">
          <img
            src={leafBgPic}
            width={500}
            alt="bg-pic"
            className="absolute font-black text-[140px] text-[#FFF0EA] z-10"
          />
          <div className="relative flex flex-col justify-center items-center z-10 -translate-y-16">
            <img src={icon} alt="" className="opacity-[0.4]" />
            <p className="text-[#333333] font-extrabold text-[40px] ">
              How It's Work
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex flex-col justify-center items-start">
            <HIWCard
              img={leafBgPic}
              title="Register"
              description={description}
              classNameDesc="text-left"
              className="flex-row"
            />
            <HIWCard
              img={leafBgPic}
              title="Find your Match"
              description={description}
              classNameTitle="text-right"
              classNameDesc="text-right"
              className="flex-row-reverse"
            />
            <HIWCard
              img={leafBgPic}
              title="Send Interest"
              description={description}
              classNameDesc="text-left"
              className="flex-row"
            />
            <HIWCard
              img={leafBgPic}
              title="Get Profile Information"
              description={description}
              classNameTitle="text-right"
              classNameDesc="text-right"
              className="flex-row-reverse"
            />
            <HIWCard
              img={leafBgPic}
              title="Start Meetups"
              description={description}
              classNameDesc="text-left"
              className="flex-row"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItsWorkSection;
