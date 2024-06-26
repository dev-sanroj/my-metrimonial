const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onButtonClick}
      className={`${props.className} flex justify-center items-center ${
        props.colorBtn ? props.colorBtn : "text-[#FFFFFF]"
      } ${props.disabled && "bg-[#ccc]"} ${
        props.bgBtn ? props.bgBtn : "bg-[#FF4061CC]"
      } rounded-md px-4 ${
        props.heightBtn ? props.heightBtn : "h-[45px]"
      } shadow-[0_0_8px_rgba(0,0,0,0.25)] ${
        !props.disabled && "hover:bg-[#FF4061]"
      } active:border-[#808080] border-2 border-[transparent]`}
    >
      <div className={`${props.children && "mr-1"}`}>{props.children}</div>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
