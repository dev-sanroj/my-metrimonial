import Button from "../../../../components/UI/Button/Button";

const UpgradePlanCard = (props) => {
  const paymentLayoutBtn = () => {
    props.onShowPaymentLayout();
  };
  return (
    <li className="flex justify-between items-center w-[30%] bg-[#FFFFFF] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] my-3 mx-3 p-4">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#333333] font-extrabold text-[14px] md:text-[16px]">
          Plan No
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6145/6145427.png"
          alt="membership-icon"
          className="w-[66px] mt-3"
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
            className="rounded-none bg-[#000000]"
          />
        </li>
      </ul>
    </li>
  );
};
export default UpgradePlanCard;
