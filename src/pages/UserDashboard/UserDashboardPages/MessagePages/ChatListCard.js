const ChatListCard = (props) => {
  return (
    <li
      onClick={() => {
        props.showChatBox();
      }}
      className="flex justify-between items-center border-b-[1px] border-[#CCCCCC] w-full px-4 py-2 my-2 cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center rounded-full mr-3 w-[90px] h-[90px] md:w-[110px] md:h-[110px] overflow-hidden bg-[#f7f7f7] shadow-[0_0_8px_rgba(0,0,0,0.1)]">
          <img src={props.imageSrc} alt="picprofile" />
        </div>
        <div className="flex flex-col justify-center items-start text-[#333333] ml-3">
          <p className="font-bold text-[14px] md:text-[18px]">Full Name</p>
          <p className="text-[14px]">Hi, how are you?</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:w-[40%]">
        <span className="flex justify-center items-center my-1 text-[14px] text-[#333333] font-medium">
          9:00
        </span>
        <span className="flex justify-center items-center bg-[#4CAF50] w-[30px] h-[30px] rounded-full text-[#FFFFFF] font-bold my-1">
          9
        </span>
      </div>
    </li>
  );
};

export default ChatListCard;
