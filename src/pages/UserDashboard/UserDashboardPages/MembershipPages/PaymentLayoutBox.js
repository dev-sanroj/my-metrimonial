import { IoCloseSharp } from "react-icons/io5";
import Modal from "../../../../components/UI/Modal/Modal";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";

const PaymentLayoutBox = (props) => {
  return (
    <Modal>
      <div className="flex flex-col justify-center items-center relative py-5 border p-4">
        <div className="flex justify-end items-center px-2 w-full">
          <IoCloseSharp
            onClick={props.onHidePaymentLayout}
            className="active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer "
            size={28}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="flex flex-col justify-center items-center min-w-[500px]">
            <div className="flex flex-col justify-center items-center w-[90%]">
              <div className="flex justify-between items-center">
                <Input label="Card number" />
                <ul className=""></ul>
              </div>
              <Button text="Pay $_ _ ._ _" className="font-bold !w-full" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentLayoutBox;
