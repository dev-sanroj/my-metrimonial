const UserGalleryData = () => {
  const imgArc =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718176120~exp=1718179720~hmac=b7f319731820e439f10b6a56cef5152bee069537cf7935a6d17d5575ea36e3f8&w=996";
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[49%]">
      <li className="flex flex-col justify-center items-center md:items-start py-10 w-full">
        <p className="text-[#333333] font-bold mb-2 text-[20px]">
          Photo Gallery
        </p>
        <ul className="flex flex-wrap justify-between items-center my-2 w-full">
          <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[45%] lg:w-[22%] my-2 lg:my-0 h-[130px] overflow-hidden">
            <img src={imgArc} alt="albums" />
          </li>
          <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[45%] lg:w-[22%] my-2 lg:my-0 h-[130px] overflow-hidden">
            <img src={imgArc} alt="albums" />
          </li>

          <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[45%] lg:w-[22%] my-2 lg:my-0 h-[130px] overflow-hidden">
            <img src={imgArc} alt="albums" />
          </li>
          <li className="flex flex-col justify-around items-center border-[#CCCCCC] rounded-lg border-2 w-[45%] lg:w-[22%] my-2 lg:my-0 h-[130px] overflow-hidden">
            <img src={imgArc} alt="albums" />
          </li>
        </ul>
      </li>
    </div>
  );
};

export default UserGalleryData;
