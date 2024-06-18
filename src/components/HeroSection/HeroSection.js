import FindYourMatchForm from "./FindYourMatchForm";

const HeroSection = () => {
  return (
    <section
      className={`relative flex justify-center items-center w-[100%] mt-4 h-[100vh] lg:h-[100vh] bg-[url('https://img.freepik.com/free-photo/wedding-cake-decor-made-two-rocking-chairs_8353-1725.jpg?t=st=1717789907~exp=1717793507~hmac=c80447e60d9a345942c506e64953ac94f440bdf83c61d1aa429eb5a6c715d50a&w=900')] bg-cover bg-no-repeat  bg-top`}
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
