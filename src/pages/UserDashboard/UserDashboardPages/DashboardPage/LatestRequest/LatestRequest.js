import { Link } from "react-router-dom";
import Button from "../../../../../components/UI/Button/Button";
import DashboardLayout from "../../../DashboardLayout";
import AcceptRequest from "./AcceptRequest";
import DenayRequest from "./DenayRequest";
import NewRequest from "./NewRequest";
import { useState } from "react";

const LatestRequest = () => {
  const [activeRequest, setActiveRequest] = useState("new-request");
  return (
    <DashboardLayout activePage="dashboard">
      <div className="flex flex-col justify-center items-start w-full">
        <span className="w-full mb-2">
          <Link to="/dashboard">
            <Button text="Back" className="bg-[#333333FF] px-5" />
          </Link>
        </span>
        <div className="flex justify-start items-center w-full">
          <ul className="flex justify-between items-center w-[50%]">
            <li
              onClick={() => {
                setActiveRequest("new-request");
              }}
              className={`flex justify-center items-center font-medium text-[18px] text-[${
                activeRequest === "new-request" ? "#FF4061" : "#555555"
              }] cursor-pointer hover:text-[#FF4061] transition`}
            >
              New Request
            </li>
            <li
              onClick={() => {
                setActiveRequest("accept-request");
              }}
              className={`flex justify-center items-center font-medium text-[18px] text-[${
                activeRequest === "accept-request" ? "#FF4061" : "#555555"
              }] cursor-pointer hover:text-[#FF4061] transition`}
            >
              Accept Request
            </li>
            <li
              onClick={() => {
                setActiveRequest("denay-request");
              }}
              className={`flex justify-center items-center font-medium text-[18px] text-[${
                activeRequest === "denay-request" ? "#FF4061" : "#555555"
              }] cursor-pointer hover:text-[#FF4061] transition`}
            >
              Denay Request
            </li>
          </ul>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-2"></span>
        <ul className="flex flex-col justify-start items-center w-full mt-4 min-h-[540px] max-h-[540px] overflow-y-scroll">
          {activeRequest === "new-request" && <NewRequest />}
          {activeRequest === "accept-request" && <AcceptRequest />}
          {activeRequest === "denay-request" && <DenayRequest />}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default LatestRequest;
