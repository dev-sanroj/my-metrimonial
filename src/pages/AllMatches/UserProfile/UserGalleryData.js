import { useState } from "react";
import Modal from "../../../components/UI/Modal/Modal";
import { IoCloseSharp } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./UserGalleryData.module.css";

const UserGalleryData = () => {
  const imgSrc1 =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996";
  const imgSrc2 =
    "https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?t=st=1719086801~exp=1719090401~hmac=9bea6b35ed0e8d50ecc5ce25ad7db94bc00ebd07fe777b3ad0055c16c4721e92&w=996";
  const imgSrc3 =
    "https://img.freepik.com/free-photo/portrait-asian-teen-boy-with-glasses_23-2149132872.jpg?t=st=1719126196~exp=1719129796~hmac=9ddc924145d9e2d593096989fef76227d3f758e3932a32db9aef1e05c7329c97&w=996";
  const imgSrc4 =
    "https://img.freepik.com/free-photo/indoor-portrait-pleased-handsome-ordinary-european-man-with-moustache-beard-smiling-broadly-feeling-confident-happy-while-making-arrangement-wedding-gray-wall_176420-22384.jpg?t=st=1719086994~exp=1719090594~hmac=f5eba3907b595604c300c0b74604dcbe7e1e4d2604e99c853546996da1fba130&w=996";
  const images = [imgSrc1, imgSrc2, imgSrc3, imgSrc4];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = (idx) => {
    setCurrentImageIndex(idx);
    setIsPopupOpen(true);
  };
  const hideImagePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[49%]">
      <li className="flex flex-col justify-center items-center py-10 w-full">
        <p className="text-[#333333] font-bold mb-2 text-[20px]">
          Photo Gallery
        </p>
        <ul className="flex flex-wrap justify-between items-center my-2 w-full">
          {images.map((image, idx) => (
            <li
              key={idx}
              className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[45%] lg:w-[22%] my-2 lg:my-0 h-[130px] lg:h-[120px] overflow-hidden cursor-pointer relative"
              onClick={() => {
                handleImageClick(idx);
              }}
            >
              <img
                src={image}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover inset-0 absolute"
              />
            </li>
          ))}
        </ul>
      </li>
      {isPopupOpen && (
        <Modal onHidePopup={hideImagePopup}>
          <div className="flex flex-col justify-center items-center relative py-3 md:p-4 w-full lg:min-w-full">
            <div className="flex justify-center items-center w-full">
              <IoCloseSharp
                onClick={hideImagePopup}
                className="absolute active:text-[#333333] text-[#333333] hover:text-[#FF4061] cursor-pointer -right-1 -top-1 md:right-2 md:top-2"
                size={28}
              />
            </div>
            <div className="relative flex flex-col justify-center items-center min:w-[60%] min:h-[60%] mt-8">
              <Carousel
                selectedItem={currentImageIndex}
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
              >
                {images.map((src, index) => (
                  <div key={index} className={classes["watermark-container"]}>
                    <img src={src} alt={`Slide ${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserGalleryData;
