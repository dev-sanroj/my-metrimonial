import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onHideBackdrop}
      className="fixed cursor-pointer flex flex-col justify-center items-center top-0 w-[100%] h-[100vh] z-30 bg-[rgba(0,0,0,0.75)]"
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`w-[95%] md:w-[80%] lg:w-[60%] fixed top-10 flex justify-center items-center bg-[#FFFFFF] p-[1rem] rounded-lg shadow-[0_2px_8px_rgba(0, 0, 0, 0.25)] z-30 ${classes["modal"]}`}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideBackdrop={props.onHidePopup} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
