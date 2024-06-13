// import DashboardPage from "./UserDashboardPages/DashboardPage/DashboardPage";
// import FindProfile from "./UserDashboardPages/FindProfilePages/FindProfile";
import Membership from "./UserDashboardPages/MembershipPages/Membership";

const Dashboard = (props) => {
  return (
    <>
      {/* <DashboardPage /> */}
      {/* <FindProfile /> */}
      <Membership onShowPaymentLayout={props.onShowPaymentLayout} />
    </>
  );
};

export default Dashboard;
