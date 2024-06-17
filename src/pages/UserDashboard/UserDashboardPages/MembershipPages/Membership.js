import { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import MyPlans from "./MyPlans";
import ViewAllPlans from "./ViewAllPlans";

const Membership = (props) => {
  const [showPlans, setShowPlans] = useState("myplans");

  return (
    <DashboardLayout activePage="membership" onShowSignUp={props.onShowSignUp}>
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-start items-center w-full">
          <ul className="flex justify-between items-center w-full md:w-[50%]">
            <li
              className="flex justify-center items-center cursor-pointer transition"
              onClick={() => setShowPlans("myplans")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6145/6145427.png"
                alt="membership-icon"
                className="w-[36px] md:w-[46px] lg:w-[56px]"
              />
              <span
                className={`font-extrabold text-[16px] md:text-[18px] lg:text-[20px] hover:underline ml-2 active:text-[#FF4061] ${
                  showPlans === "myplans" ? "text-[#FF4061]" : "text-[#333333]"
                }`}
              >
                My Plans
              </span>
            </li>
            <li
              className="flex justify-center items-center cursor-pointer transition"
              onClick={() => setShowPlans("viewallplans")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6145/6145427.png"
                alt="membership-icon"
                className="w-[36px] md:w-[46px] lg:w-[56px]"
              />
              <span
                className={`font-extrabold text-[16px] md:text-[18px] lg:text-[20px] hover:underline ml-2 active:text-[#FF4061] ${
                  showPlans === "viewallplans"
                    ? "text-[#FF4061]"
                    : "text-[#333333]"
                }`}
              >
                View All Plans
              </span>
            </li>
          </ul>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-3"></span>
        {showPlans === "myplans" ? (
          <MyPlans />
        ) : (
          <ViewAllPlans onShowPaymentLayout={props.onShowPaymentLayout} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Membership;
