import UpgradePlanCard from "./UpgradePlanCard";

const ViewAllPlans = (props) => {
  return (
    <div className="flex justify-center items-start p-2 md:p-4 bg-[#FFFFF4] shadow-[0_0_8px_rgba(0,0,0,0.1)] w-full rounded-lg mt-4">
      <div className="flex flex-col justify-start items-start w-full overflow-y-scroll min-h-[480px] max-h-[500px]">
        <ul className="flex flex-wrap justify-start items-center w-full">
          <UpgradePlanCard onShowPaymentLayout={props.onShowPaymentLayout} />
          <UpgradePlanCard onShowPaymentLayout={props.onShowPaymentLayout} />
          <UpgradePlanCard onShowPaymentLayout={props.onShowPaymentLayout} />
          <UpgradePlanCard onShowPaymentLayout={props.onShowPaymentLayout} />
          <UpgradePlanCard onShowPaymentLayout={props.onShowPaymentLayout} />
        </ul>
      </div>
    </div>
  );
};

export default ViewAllPlans;
