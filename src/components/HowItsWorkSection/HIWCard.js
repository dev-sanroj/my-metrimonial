const HIWCard = (props) => {
  return (
    <li className={`${props.className} flex justify-between items-center`}>
      <div className="flex justify-center items-center w-[40%]">
        <img src={props.img} alt="" />
      </div>
      <div className="flex flex-col justify-start items-center w-[20%] self-start ">
        <div className="flex justify-center items-center my-1 w-[40px] h-[40px] rounded-full bg-[rgb(51,51,51,0.3)] shadow-[0_0_8px_rgba(0,0,0,0.2)] relative z-10 after:w-[75%] after:h-[75%] after:absolute after:bg-[#FFC0CB] after:rounded-full after:shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
        <span className="w-[1px] rounded-full h-[300px] bg-[rgb(51,51,51,0.3)] my-1"></span>
      </div>
      <div className="flex flex-col justify-center items-center w-[40%]">
        <p
          className={`${props.classNameTitle} text-[#333333] font-bold text-[28px] my-1 text-left w-[70%]`}
        >
          {props.title}
        </p>
        <p
          className={`${props.classNameDesc} text-[#333333] text-[18px] w-[70%] my-1`}
        >
          {props.description}
        </p>
      </div>
    </li>
  );
};

export default HIWCard;
