import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import Personalinfo from "./pages/ProfileForm/PersonalInfo/PersonalInfo";
// import BasicInfo from "./pages/ProfileForm/BasicInfo/BasicInfo";
// import SocialMedia from "./pages/ProfileForm/SocialMediaForm/SocialMedia";
// import ProfessionalDetails from "./pages/ProfileForm/ProfessionalDetailsForm/ProfessionalDetails";
// import FamilyLifestyle from "./pages/ProfileForm/FamilyLifestyleForm/FamilyLifestyle";
import ProfileCompleteStatus from "./pages/ProfileForm/ProfileCompleteStatus/ProfileCompleteStatus";
// import PaymentLayoutBox from "./pages/UserDashboard/UserDashboardPages/MembershipPages/PaymentLayoutBox";
import Footer from "./components/Footer/Footer";
import EditSuccess from "./pages/UserDashboard/UserDashboardPages/EditProfile/EditSuccess";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const showModal = (modal) => setActiveModal(modal);
  const hideModal = () => setActiveModal(null);

  return (
    <Router>
      {activeModal === "signup" && (
        <Signup
          onShowSignIn={() => showModal("signin")}
          onHideSignup={hideModal}
        />
      )}
      {activeModal === "signin" && (
        <Signin
          onShowSignUp={() => showModal("signup")}
          onHideSignin={hideModal}
          onShowForgotPassword={() => showModal("forgotPassword")}
        />
      )}
      {activeModal === "forgotPassword" && (
        <ForgotPassword onHideForgotPassword={hideModal} />
      )}
      {/* {activeModal === "basicinfo" && (
          <BasicInfo
            onShowBasicInfo={() => showModal("basicinfo")}
            onHideBasicInfo={hideModal}
            onShowPersonalInfo={() => showModal("personalinfo")}
            onShowFamilyLifestyle={() => showModal("familylifestyle")}
            onShowProfessionalDetails={() => showModal("professionaldetails")}
            onShowSocialMedia={() => showModal("socialmedia")}
            />
            )}
        {activeModal === "personalinfo" && (
          <Personalinfo
            onShowBasicInfo={() => showModal("basicinfo")}
            onHidePersonalInfo={hideModal}
            onShowPersonalInfo={() => showModal("personalinfo")}
            onShowFamilyLifestyle={() => showModal("familylifestyle")}
            onShowProfessionalDetails={() => showModal("professionaldetails")}
            onShowSocialMedia={() => showModal("socialmedia")}
          />
        )}
        {activeModal === "familylifestyle" && (
          <FamilyLifestyle
            onShowBasicInfo={() => showModal("basicinfo")}
            onHideFamilyLifestyle={hideModal}
            onShowPersonalInfo={() => showModal("personalinfo")}
            onShowFamilyLifestyle={() => showModal("familylifestyle")}
            onShowProfessionalDetails={() => showModal("professionaldetails")}
            onShowSocialMedia={() => showModal("socialmedia")}
          />
        )}
        {activeModal === "professionaldetails" && (
          <ProfessionalDetails
            onShowBasicInfo={() => showModal("basicinfo")}
            onHideProfessionalDetails={hideModal}
            onShowPersonalInfo={() => showModal("personalinfo")}
            onShowFamilyLifestyle={() => showModal("familylifestyle")}
            onShowProfessionalDetails={() => showModal("professionaldetails")}
            onShowSocialMedia={() => showModal("socialmedia")}
          />
        )}
        {activeModal === "socialmedia" && (
          <SocialMedia
            onShowBasicInfo={() => showModal("basicinfo")}
            onHideSocialMedia={hideModal}
            onShowPersonalInfo={() => showModal("personalinfo")}
            onShowFamilyLifestyle={() => showModal("familylifestyle")}
            onShowProfessionalDetails={() => showModal("professionaldetails")}
            onShowSocialMedia={() => showModal("socialmedia")}
            onShowProfileCompleteStatus={() =>
              showModal("profilecompletestatus")
            }
          />
        )} */}

      {activeModal === "profilecompletestatus" && (
        <ProfileCompleteStatus onHideProfileCompleteStatus={hideModal} />
      )}

      {/* {activeModal === "paymentlayout" && (
        <PaymentLayoutBox onHidePaymentLayout={hideModal} />
      )} */}
      {activeModal === "editsuccess" && (
        <EditSuccess onHideEditSuccess={hideModal} />
      )}

      <Routes
        onShowBasicInfo={() => showModal("basicinfo")}
        onShowSignUp={() => showModal("signup")}
        onShowEditSuccess={() => showModal("editsuccess")}
      />
      <Footer />
    </Router>
  );
}

export default App;
