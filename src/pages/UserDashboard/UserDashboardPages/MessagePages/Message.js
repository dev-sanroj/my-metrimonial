import { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import ChatBox from "./ChatBox";
import ChatListCard from "./ChatListCard";

const Message = () => {
  const [chatBoxVisible, setChatBoxVisible] = useState(true);
  const hideChatBox = () => {
    setChatBoxVisible(false);
  };
  const showChatBox = () => {
    setChatBoxVisible(true);
  };
  const src =
    "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1718094670~exp=1718098270~hmac=0ab37b6fc3332457054ff3c545ae790ef8730667444ee068a47f03b0ce45730d&w=996";
  return (
    <DashboardLayout activePage="message">
      <div className="flex justify-center items-center w-full">
        {chatBoxVisible && <ChatBox hideChatBox={hideChatBox} />}
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex justify-start items-center w-full">
            <p className="font-extrabold text-[26px] text-[#FF4061]">
              Chat List
            </p>
          </div>
          <span className="bg-[#CCCCCC] w-full h-[1px] my-3"></span>
          <ul className="flex flex-col justify-start items-center w-full h-[535px] overflow-y-scroll">
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
            <ChatListCard imageSrc={src} showChatBox={showChatBox} />
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Message;
