import Button from "../../../../components/UI/Button/Button";

const UpgradePlanCard = (props) => {
  const paymentLayoutBtn = () => {
    props.onShowPaymentLayout();
  };
  return (
    <li className="flex justify-between items-center w-full md:w-[45%] lg:w-[30%] h-[140px] bg-[#FFFFFF] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] m-1 md:m-3 p-2 md:p-3 lg:p-4">
      <div className="flex flex-col justify-around lg:justify-between items-center h-full">
        <p className="text-[#333333] font-extrabold text-[14px] md:text-[16px] lg:text-[18px]">
          Plan No
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6145/6145427.png"
          alt="membership-icon"
          className="w-[66px] lg:w-[80px]"
        />
      </div>
      <span className="w-[1px] bg-[#CCCCCC] h-[100px]"></span>
      <ul className="flex flex-col justify-center items-center">
        <li className="flex justify-center items-center">
          <span className="text-[#66451C] text-[14px] font-medium">
            Plan Name:
          </span>
          <span className="text-[#66451C] text-[14px] font-bold ml-2">
            Standard
          </span>
        </li>
        <li className="flex justify-center items-center">
          <span className="text-[#66451C] text-[14px] font-medium">
            Validity:
          </span>
          <span className="text-[#66451C] text-[14px] font-bold ml-2">
            6 Months
          </span>
        </li>
        <li className="flex justify-center items-center">
          <span className="text-[#66451C] text-[14px] font-medium">
            Valid till:
          </span>
          <span className="text-[#66451C] text-[14px] font-bold ml-2">
            24 June 2024
          </span>
        </li>
        <li className="flex justify-center items-center my-2">
          <Button
            onButtonClick={paymentLayoutBtn}
            text="UPGRADE NOW"
            className="rounded-none"
            bgBtn="bg-[#000000]"
          />
        </li>
      </ul>
    </li>
  );
};
export default UpgradePlanCard;
