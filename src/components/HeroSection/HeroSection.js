import FindYourMatchForm from "./FindYourMatchForm";

const HeroSection = (x) => {
  return (
    // <section
    //   className={`relative flex justify-center items-center w-[100%] mt-4 h-[100vh] lg:h-[100vh] bg-[url('https://img.freepik.com/free-vector/abstract-luxury-beautiful-decorative-yellow-background_1055-6454.jpg?t=st=1718832305~exp=1718835905~hmac=7020a2b099f1cc80e5235812348d804df321c740ef605ff4a6fc7931248826c2&w=740')] bg-cover bg-no-repeat  bg-top`}
    // >
    <section
      className={`relative flex justify-center items-center w-[100%] mt-4 h-[100vh] lg:h-[100vh]`}
    >
      <span className="absolute z-0 left-0 top-0 bg-[rgba(0,0,0,0.2)] w-[100%] h-[100%]"></span>
      <div className="relative z-10 flex flex-col justify-center items-center w-[90%] lg:w-full">
        <div className="flex justify-center items-center mt-10 w-full">
          <h2 className="text-[#FFFFFF] font-shadow mt-10 md:mt-0 text-[24px] lg:text-[28px] font-semibold lg:font-black text-center">
            Forever Starts Here. Your Journey, Your Wedding Wonderland!
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <FindYourMatchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
