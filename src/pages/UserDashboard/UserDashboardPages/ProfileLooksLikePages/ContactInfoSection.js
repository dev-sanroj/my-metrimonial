const ContactInfoSection = () => {
  return (
    <li className="flex flex-col justify-center items-start py-10 border-b-2 w-full">
      <p className="text-[#555555] font-bold text-[20px] mb-4">
        Contact Information
      </p>
      <ul className="flex justify-between items-start mt-2 w-full">
        <li className="flex justify-start items-center w-[30%]">
          <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
          <span className="font-bold text-[#818181] mx-2">Phone:</span>
          <span className="text-[#818181] ml-2">0000000000</span>
        </li>
        <li className="flex justify-start items-center w-[30%]">
          <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
          <span className="font-bold text-[#818181] mx-2">Email:</span>
          <span className="text-[#818181] ml-2">davis@gmail.com</span>
        </li>
        <li className="flex justify-start items-center w-[30%]">
          <span className="w-[45px] h-[45px] rounded-md border-2 mr-2"></span>
          <span className="font-bold text-[#818181] mx-2">Address:</span>
          <span className="text-[#818181] ml-2">
            G-20, Arera colony, Bhopal, Madhya Pradesh
          </span>
        </li>
      </ul>
    </li>
  );
};

export default ContactInfoSection;
