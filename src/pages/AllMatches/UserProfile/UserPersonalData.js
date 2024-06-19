const UserPersonalData = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-[49%]">
      <div className="flex flex-col justify-center items-center md:items-start py-10 w-full">
        <p className="text-[#333333] font-bold mb-4 text-[20px]">
          Personal Information
        </p>
        <ul className="flex flex-wrap justify-between items-start mt-2 w-full">
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Date of Birth:
            </span>
            <span className="text-[#616161] font-normal text-[16px] ml-2 w-[60%]">
              11/10/2000
            </span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Sub-Community:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Reddy</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Height:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">5'6"</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Weight:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">56Kg</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Marital Status:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Unmerid</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Blood Group:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">O+</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Mother Tongue:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Hindi</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Religion:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Hindu</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Community:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Hindu</span>
          </li>
          <li className="flex justify-start items-start w-full md:w-[49%] my-2">
            <span className="font-medium text-[#555555] text-[16px] mx-2 w-[40%]">
              Gothra:
            </span>
            <span className="text-[#818181] ml-2 w-[60%]">Haswani</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserPersonalData;
