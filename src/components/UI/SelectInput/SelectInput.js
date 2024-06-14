const SelectInput = (props) => {
  return (
    <div
      className={`${
        props.flexDirection ? props.flexDirection : "flex-col"
      } flex justify-center items-start my-1 ${
        props.width ? props.width : "w-full h-[50px]"
      }`}
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
        <p
          className={`${props.messageClassName} flex justify-center items-center ml-8 text-[#75F94C] font-semibold text-[16px]`}
        >
          {props.message}
          {props.messageIcon}
        </p>
      </label>
      <select
        id={props.id}
        name={props.name}
        value=""
        onChange={() => {}}
        className={`${props.className} block ${
          props.width ? props.width : "w-full"
        } h-full px-2 py-2 border-[2px] bg-[#FFFFFF] border-[#858585] focus:outline-[#333333] rounded-md text-[#858585]`}
      >
        <option className={props.width} value="">
          {props.select ? props.select : "select"}
        </option>
        {props.options &&
          props.options.map((option, idx) => (
            <option key={idx} value="option" className={props.width}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
