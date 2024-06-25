import DashboardLayout from "../../DashboardLayout";
import PhotoAlbumCard from "./PhotoAlbumCard";

const PhotoAlbum = (props) => {
  const add =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1718088396~exp=1718091996~hmac=4e3fe0054a932580fda4eb485034690ba3ca47a8ccf838dfb748b52b1fca57cc&w=996";
  return (
    <DashboardLayout activePage="photoalbum" onShowSignUp={props.onShowSignUp}>
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-start items-center w-full">
          <p className="font-extrabold text-[26px] text-[#FF4061]">
            Photo Album
          </p>
        </div>
        <span className="bg-[#CCCCCC] w-full h-[1px] my-3"></span>
        <ul className="flex flex-wrap justify-start items-center w-full">
          <PhotoAlbumCard imageSrc={add} />
          <PhotoAlbumCard />
          <PhotoAlbumCard imageSrc={add} />
          <PhotoAlbumCard imageSrc={add} />
          <PhotoAlbumCard />
          <PhotoAlbumCard imageSrc={add} />
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default PhotoAlbum;
