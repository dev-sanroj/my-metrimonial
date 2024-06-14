import Button from "../../../../../components/UI/Button/Button";

const ProfileRequestCard = (props) => {
  return (
    <li className="flex flex-col md:flex-row lg:flex-row justify-between items-start w-full bg-[#FFF] border-b-[1px] border-[#CCCCCC] shadow-[0_4px_8px_rgba(0,0,0,0)] my-3 py-2">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center md:justify-start items-center md:items-start w-full md:w-[80%] ">
        <div className="flex justify-center items-center mr-2 w-[35%]">
          <img
            className="w-[100%] rounded-lg"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R89340451&ga=GA1.1.1679917466.1715339411&semt=sph"
            alt="profilepic"
          />
        </div>
        <div className="flex flex-col md:justify-start items-center md:items-start ml-2 w-[100%] md:w-[50%] py-2 md:py-0">
          <p className="text-[#616161] font-bold mb-1">Full Name</p>
          <ul className="flex justify-center items-center w-full my-1 ">
            <li className="flex flex-col justify-start items-center md:items-start w-full">
              <div className="flex justify-center items-center">
                <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
                <p className="text-[#616161] font-medium text-[14px]">City:</p>
              </div>
              <span className="text-[#616161] font-light">Bhopal</span>
            </li>
            <li className="flex flex-col justify-start items-center md:items-start w-full">
              <div className="flex justify-center items-center">
                <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
                <p className="text-[#616161] font-medium text-[14px]">Age:</p>
              </div>
              <span className="text-[#616161] font-light">23</span>
            </li>
            <li className="flex flex-col justify-start items-center md:items-start w-full">
              <div className="flex justify-center items-center">
                <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
                <p className="text-[#616161] font-medium text-[14px]">
                  Height:
                </p>
              </div>
              <span className="text-[#616161] font-light">5"4'</span>
            </li>
            <li className="flex flex-col justify-start items-center md:items-start w-full">
              <div className="flex justify-center items-center">
                <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
                <p className="text-[#616161] font-medium text-[14px]">Job:</p>
              </div>
              <span className="text-[#616161] font-light">Developer</span>
            </li>
          </ul>
          <p className="text-[#616161] font-medium text-[14px] my-1">
            Request on:{" "}
            <span className="font-light">10:30 AM, 18 August 2024</span>
          </p>
          <Button
            text="ViewProfile"
            className="!h-[32px] !w-[70%] bg-transparent font-bold !border-[#808080] border-[2px] hover:text-[#FFFFFF] hover:border-transparent mt-2"
            colorBtn="text-[#616161]"
          />
        </div>
      </div>
      <div className="flex flex-row md:flex-col lg:flex-row justify-around md:justify-between items-start w-full md:w-[20%] lg:mr-3 py-2 md:py-0">
        {props.AcceptHide ? (
          ""
        ) : (
          <Button
            text="accept"
            className="font-medium !h-[35px] !w-[80px] hover:border-[#FFFFFF] border-[2px] md:mb-2 lg:mt-0s"
            bgBtn="!bg-[#75F94C]"
          />
        )}
        {props.RejectHide ? (
          ""
        ) : (
          <Button
            text="reject"
            className="bg-transparent !h-[35px] !w-[80px] font-medium !hover:bg-[#333333] border-[#FF4061] border-[2px] md:mt-2 lg:mt-0"
            colorBtn="text-[#FF4061] hover:text-[#FFFFFF]"
          />
        )}
      </div>
    </li>
  );
};
export default ProfileRequestCard;
