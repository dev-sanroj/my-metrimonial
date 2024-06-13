const AboutSection = () => {
  return (
    <li className="flex flex-col justify-center items-start py-10 border-b-2 w-full">
      <p className="text-[#555555] font-bold text-[20px] mb-2">About</p>
      <div className="flex justify-center items-center mt-2">
        <p className="text-[20px] font-medium text-[#818181]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text.
        </p>
      </div>
    </li>
  );
};

export default AboutSection;
