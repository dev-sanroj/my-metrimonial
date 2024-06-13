import ProfileCard from "./ProfileCard";

const AllProfiles = (props) => {
  console.log("all: ", props.className);
  return (
    <div className="flex flex-wrap justify-between items-center w-[90%]">
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
      <ProfileCard className={props.className} />
    </div>
  );
};
export default AllProfiles;
