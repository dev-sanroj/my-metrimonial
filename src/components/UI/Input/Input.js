const Input = (props) => {
  return (
    <div
      className={`${
        props.className
      } flex flex-col justify-center items-start my-1 ${
        props.width ? props.width : "w-full"
      }`}
    >
      <label
        htmlFor={props.id}
        className={`flex justify-center items-center text-[16px] font-medium text-[#333333] my-1 relative ${
          props.required
            ? "after:content-['*'] after:text-[#FF4061] after:text-[20px] after:absolute after:right-0 after:top-0"
            : "after:hidden"
        }`}
      >
        {props.label}
        <p
          className={`${props.messageClassName} flex justify-center items-center ml-8 text-[#75F94C] font-semibold text-[16px]`}
        >
          {props.message}
          {props.messageIcon}
        </p>
      </label>
      <div
        className={`${props.className} relative flex justify-between items-center w-full h-[50px]`}
      >
        <input
          type={props.type || "text"}
          disabled={props.disabled || false}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className={`w-full ${
            props.inputClassName
          } px-2 focus:outline-[#66B6FF] text-[#858585] ${
            props.disabled && "bg-[#f0f0f0]"
          } font-semibold border-[2px] border-[${
            props.error ? "#FF4061" : "#858585"
          }] ${
            props.width ? props.width : "w-full"
          } h-full rounded-md text-[16px]`}
          // className={`w-full ${
          //   props.className
          // } px-2 focus:outline-[#333333] text-[#858585] font-semibold border-[2px] border-[#858585] ${
          //   props.width ? props.width : "w-full"
          // } h-full rounded-md text-[16px]`}
        />
        {props.inputBtn && (
          <div
            className={`${props.inputBtnClassname} text-[#FF4061] font-semibold absolute right-2 cursor-pointer`}
            onClick={props.inputBtnHandler}
          >
            {props.inputBtn}
          </div>
        )}
      </div>
      {props.error && (
        <p className="text-[14px] text-[#FF4061] font-medium">{props.error}</p>
      )}
    </div>
  );
};
export default Input;
