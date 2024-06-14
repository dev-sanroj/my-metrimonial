import ProfileCard from "../../components/UI/ProfileCard/ProfileCard";

const AllProfiles = (props) => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center w-[90%]">
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
