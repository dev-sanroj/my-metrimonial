import Button from "../../../../../components/UI/Button/Button";

const ProfileRequestCard = (props) => {
  return (
    <li className="flex justify-between items-start w-full bg-[#FFF] border-b-[1px] border-[#CCCCCC] shadow-[0_4px_8px_rgba(0,0,0,0)] my-3 py-2">
      <div className="flex justify-start items-start w-[80%]">
        <div className="flex justify-center items-center mr-2">
          <img
            className="h-[130px] rounded-lg"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R89340451&ga=GA1.1.1679917466.1715339411&semt=sph"
            alt="profilepic"
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-2 w-[50%]">
          <p className="text-[#616161] font-bold mb-1">Full Name</p>
          <ul className="flex justify-between items-center w-full my-1">
            <li className="flex justify-center items-center">
              <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
              <p className="text-[#616161] font-medium text-[14px]">
                City: <span className="font-light">Bhopal</span>
              </p>
            </li>
            <li className="flex justify-center items-center">
              <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
              <p className="text-[#616161] font-medium text-[14px]">
                Age: <span className="font-light">23</span>
              </p>
            </li>
            <li className="flex justify-center items-center">
              <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
              <p className="text-[#616161] font-medium text-[14px]">
                Height: <span className="font-light">5"4'</span>
              </p>
            </li>
            <li className="flex justify-center items-center">
              <span className="w-[10px] h-[10px] bg-[#FF4061] rounded-full mr-1"></span>
              <p className="text-[#616161] font-medium text-[14px]">
                Job: <span className="font-light">Developer</span>
              </p>
            </li>
          </ul>
          <p className="text-[#616161] font-medium text-[14px] my-1">
            Request on:{" "}
            <span className="font-light">10:30 AM, 18 August 2024</span>
          </p>
          <Button
            text="ViewProfile"
            className="!h-[32px] bg-transparent font-bold !border-[#808080] border-[2px] hover:text-[#FFFFFF] hover:border-transparent mt-2"
            colorBtn="text-[#616161]"
          />
        </div>
      </div>
      <div className="flex justify-between items-start w-[20%] mr-3">
        {props.AcceptHide ? (
          ""
        ) : (
          <Button
            text="accept"
            className="font-medium h-[30px] hover:border-[#FFFFFF] border-[2px]"
            bgBtn="!bg-[#75F94C]"
          />
        )}
        {props.RejectHide ? (
          ""
        ) : (
          <Button
            text="reject"
            className="bg-transparent h-[30px] font-medium !hover:bg-[#333333] border-[#FF4061] border-[2px]"
            colorBtn="text-[#FF4061] hover:text-[#FFFFFF]"
          />
        )}
      </div>
    </li>
  );
};
export default ProfileRequestCard;
