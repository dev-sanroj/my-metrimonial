import Button from "../../../../components/UI/Button/Button";

const PhotoAlbumCard = (props) => {
  return (
    <li
      className="flex flex-col justify-center items-center rounded-lg w-[250px] mx-4 my-6
    "
    >
      <div
        className={`relative flex justify-center items-center min-w-[250px] min-h-[200px] max-w-[250px] max-h-[200px] overflow-hidden rounded-t-xl ${
          props.imageSrc ? "" : "bg-[#F7F7F7] border-2"
        } border-dashed border-[#CCCCCC]`}
      >
        {!props.imageSrc && (
          <span className="absolute flex justify-center items-center w-full h-full">
            <Button text="+Add" className="bg-[#333333] font-bold w-[45%]" />
          </span>
        )}
        <img
          src={props.imageSrc}
          alt=""
          className="rounded-t-xl h-[200px] w-[250px]"
        />
      </div>
      {props.imageSrc && (
        <div className="flex justify-between items-center w-full">
          <Button
            text="Change"
            className="!bg-[#333333] font-bold w-[45%] rounded-bl-xl rounded-br-3xl rounded-t-none"
          />
          <Button
            text="Remove"
            className="font-bold w-[45%] rounded-bl-3xl rounded-br-xl rounded-t-none"
          />
        </div>
      )}
    </li>
  );
};

export default PhotoAlbumCard;
