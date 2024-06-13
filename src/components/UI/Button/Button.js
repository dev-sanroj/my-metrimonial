const Button = (props) => {
  return (
    <button
      onClick={props.onButtonClick}
      className={`${props.className} flex justify-center items-center text-[#FFFFFF] bg-[#FF4061CC] rounded-md px-4 h-[45px] shadow-[0_0_8px_rgba(0,0,0,0.25)] hover:bg-[#FF4061] active:border-[#333333] border-4 border-[transparent]`}
    >
      <div className="mr-1">{props.children}</div>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
