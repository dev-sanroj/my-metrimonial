const PhotoGallerySection = () => {
  const imgArc =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996";
  return (
    <li className="flex flex-col justify-center items-start w-full py-10 border-b-2">
      <p className="text-[#555555] font-bold text-[20px] mb-2">Photo Gallery</p>
      <ul className="flex justify-between items-center my-2 w-full">
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px] overflow-hidden">
          <img src={imgArc} alt="albums" />
        </li>
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px] overflow-hidden">
          <img src={imgArc} alt="albums" />
        </li>

        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px] overflow-hidden">
          <img src={imgArc} alt="albums" />
        </li>
        <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[22%] h-[230px] overflow-hidden">
          <img src={imgArc} alt="albums" />
        </li>
      </ul>
    </li>
  );
};

export default PhotoGallerySection;
