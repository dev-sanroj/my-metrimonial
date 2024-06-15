import { ImCross } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import Button from "../../../../components/UI/Button/Button";
import classes from "./chatbox.module.css";
const ChatBox = (props) => {
  return (
    <div
      className={`${classes["chat-box-animate"]} absolute right-auto md:right-5 flex flex-col justify-center items-center w-[95%] md:w-[420px] h-[480px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] bg-[#F3F6FA]`}
    >
      <div className="relative flex justify-start items-center w-full h-[18%] py-4 px-4 bg-[#FFFFFF] rounded-t-lg">
        <ImCross
          onClick={() => {
            props.hideChatBox();
          }}
          className="cursor-pointer text-[18px] absolute right-3 text-[#9B9EA3] hover:text-[#FF4061] transition"
        />
        <div className="flex flex-col justify-center items-start w-[70px] h-[70px] bg-[#F7F7F7] shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-full mr-2 overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1718094670~exp=1718098270~hmac=0ab37b6fc3332457054ff3c545ae790ef8730667444ee068a47f03b0ce45730d&w=996"
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center items-start ml-2">
          <p className="font-extrabold text-[#616161] my-1">Full Name</p>
          <span className="flex justify-center items-center bg-[#4CAF50] p-3 rounded-md text-[#FFFFFF] h-[20px]  my-1">
            Available online
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[5%] py-4 bg-[#FFE2EFaa]">
        <span className="text-[#555555] text-[18px] font-semibold text-center">
          Start a new chat!!! now
        </span>
      </div>
      <div className="flex justify-center items-center w-full h-[59%] py-4">
        <div className="flex justify-center items-center w-full">
          <span className="sticky rotate-45 z-0 w-[20px] h-[20px] shadow-[0_0_8px_rgba(0,0,0,0.1)]"></span>
          <p className="flex justify-start items-center font-semibold text-[#333] bg-[#FFF] h-[40px] min-w-[40px]">
            Hiii
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[18%] py-4 bg-[#D9DFE7] rounded-b-lg">
        <div className="flex justify-between items-center rounded-lg bg-[#FFFFFF] w-[90%] h-[50px]">
          <input
            type="text"
            placeholder="Type a message here.."
            className="h-full w-[80%] px-3 text-[#757575] focus:outline-none rounded-l-lg font-medium"
          />
          <Button
            text="SEND"
            className="font-bold h-full rounded-l-none text-[14px] md:text-[18px] w-[80px] md:w-auto"
          >
            <RiSendPlaneFill className="text-[20px] md:text-[30px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
