const UserContactData = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[49%]">
      <div className="flex flex-col justify-center items-center md:items-start py-10 w-full">
        <p className="text-[#333333] font-bold mb-4 text-[20px]">
          Contact Information
        </p>
        <ul className="flex flex-col justify-center items-start mt-2 w-full ">
          <li className="flex justify-start items-center w-full my-2">
            <span className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] rounded-md border-2 mr-2"></span>
            <span className="font-bold text-[#818181] mx-2 text-[16px] md:text-[18px] lg:text-[20px]">
              Phone:
            </span>
            <span className="text-[#818181] ml-2 font-normal text-[16px] md:text-[18px] lg:text-[20px]">
              0000000000
            </span>
          </li>
          <li className="flex justify-start items-center w-full my-2">
            <span className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] rounded-md border-2 mr-2"></span>
            <span className="font-bold text-[#818181] mx-2 text-[16px] md:text-[18px] lg:text-[20px]">
              Email:
            </span>
            <span className="text-[#818181] ml-2 font-normal text-[16px] md:text-[18px] lg:text-[20px]">
              davis@gmail.com
            </span>
          </li>
          <li className="flex justify-start items-center w-full my-2">
            <span className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] rounded-md border-2 mr-2"></span>
            <span className="font-bold text-[#818181] mx-2 text-[16px] md:text-[18px] lg:text-[20px]">
              Address:
            </span>
            <span className="text-[#818181] ml-2 font-normal text-[16px] md:text-[18px] lg:text-[20px]">
              G-20, Arera colony
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserContactData;
