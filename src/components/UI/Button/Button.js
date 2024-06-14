const Button = (props) => {
  return (
    <button
      onClick={props.onButtonClick}
      className={`${props.className} flex justify-center items-center ${
        props.colorBtn ? props.colorBtn : "text-[#FFFFFF]"
      } ${
        props.bgBtn ? props.bgBtn : "bg-[#FF4061CC]"
      } rounded-md px-4 h-[45px] shadow-[0_0_8px_rgba(0,0,0,0.25)] hover:bg-[#FF4061] active:border-[#808080] border-2 border-[transparent]`}
    >
      <div className={`${props.children && "mr-1"}`}>{props.children}</div>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
