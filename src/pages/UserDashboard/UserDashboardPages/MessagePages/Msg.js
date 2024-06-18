import classes from "./Msg.module.css";
const Msg = (props) => {
  return (
    <div
      className={`w-[45%] flex justify-${
        props.msgType === "send" ? "start" : "end"
      } items-center w-full px-3`}
    >
      <div
        className={`relative flex justify-center items-center ${
          props.msgType === "send" ? "bg-[#FFFFFF]" : "bg-[#FF4061]"
        } rounded-md min-h-[38px] min-w-[40px] shadow-[0_0_8px_rgba(0,0,0,0.1)] ${
          classes["custom-after"]
        } after:bg-inherit after:top-[20%] after:${
          props.msgType === "send" ? "left" : "right"
        }-0 after:m${props.msgType === "send" ? "l" : "r"}-[-5px]`}
      >
        <p
          className={`${
            props.msgType === "send" ? "text-[#34383B]" : "text-[#FFFFFF]"
          } p-2`}
        >
          {props.msg}
        </p>
      </div>
    </div>
  );
};

export default Msg;
