const SelectInput = (props) => {
  return (
    <div
      className={`${
        props.flexDirection ? props.flexDirection : "flex-col"
      } flex justify-center items-start my-1 md:my-2 ${
        props.width ? props.width : "w-full"
      } `}
    >
      <label
        htmlFor={props.id}
        className={`flex justify-center items-center ${
          props.textLabel ? props.textLabel : "text-[16px]"
        } font-medium ${
          props.colorLabel ? props.colorLabel : "text-[#333333]"
        } my-1 after:content-['*'] after:text-[#FF4061] after:text-[20px] relative after:absolute after:right-0 after:top-0 ${
          props.required ? "" : "after:hidden"
        }`}
      >
        {props.label}
        {props.message && (
          <p
            className={`${props.messageClassName} flex justify-center items-center ml-8 text-[#75F94C] font-semibold text-[16px]`}
          >
            {props.message}
            {props.messageIcon}
          </p>
        )}
      </label>
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`${
          props.className
        } block w-full h-[50px] px-2 py-2 border-[2px] bg-[#FFFFFF] border-[${
          props.error ? "#FF4061" : "#858585"
        }] focus:outline-[#66B6FF] focus:outline-border-[#66B6FF] rounded-md text-[#858585] text-[16px]`}
      >
        <option className={`${props.width} text-[#858585]`} value="">
          {props.select ? props.select : "Select"}
        </option>
        {props.options &&
          props.options.map((option, idx) => (
            <option
              key={idx}
              value={option}
              className={`${props.width} text-[#858585]`}
            >
              {option}
            </option>
          ))}
      </select>
      {props.error && (
        <p className="text-[14px] text-[#FF4061] font-medium">{props.error}</p>
      )}
    </div>
  );
};

export default SelectInput;
