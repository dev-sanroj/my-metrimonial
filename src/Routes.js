import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllMatches from "./pages/AllMatches/AllMatches";
import DashboardPage from "./pages/UserDashboard/UserDashboardPages/DashboardPage/DashboardPage";
import Membership from "./pages/UserDashboard/UserDashboardPages/MembershipPages/Membership";
import PersonalProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/PersonalProfile";
import ReligiousProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/ReligiousProfile";
import FamilyProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/FamilyProfile";
import EducationProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/EducationProfile";
import AddressProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/AddressProfile";
import LifestyleSocial from "./pages/UserDashboard/UserDashboardPages/EditProfile/LifestyleSocial";
import PhotoAlbum from "./pages/UserDashboard/UserDashboardPages/PhotoAlbumPages/PhotoAlbum";
import Message from "./pages/UserDashboard/UserDashboardPages/MessagePages/Message";
import Horoscope from "./pages/UserDashboard/UserDashboardPages/HoroscopePage/Horoscope";
// import ProfileLooksLike from "./pages/UserDashboard/UserDashboardPages/ProfileLooksLikePages/ProfileLooksLike";
import UserProfile from "./pages/AllMatches/UserProfile/UserProfile";
import LatestRequest from "./pages/UserDashboard/UserDashboardPages/DashboardPage/LatestRequest/LatestRequest";
import AboutMore from "./pages/UserDashboard/UserDashboardPages/EditProfile/AboutMore";
import MatchPreferences from "./pages/UserDashboard/UserDashboardPages/EditProfile/MatchPreferences";
import SearchProfile from "./pages/UserDashboard/UserDashboardPages/FindProfilePages/SearchProfile";
import FindProfile from "./pages/UserDashboard/UserDashboardPages/FindProfilePages/FindProfile";

const AppRoutes = ({
  onShowBasicInfo,
  onShowSignUp,
  onShowPaymentLayout,
  onShowEditSuccess,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home onShowBasicInfo={onShowBasicInfo} onShowSignUp={onShowSignUp} />
        }
      />

      <Route
        path="/all-matches"
        element={
          <AllMatches
            onShowBasicInfo={onShowBasicInfo}
            onShowSignUp={onShowSignUp}
          />
        }
      />
      {/* <Route path="/user-profile" element={<UserProfile />} /> */}

      <Route
        path="/dashboard"
        element={
          <DashboardPage
            onShowSignUp={onShowSignUp}
            onShowPaymentLayout={onShowPaymentLayout}
          />
        }
      />
      <Route path="/dashboard/latest-request" element={<LatestRequest />} />

      <Route
        path="/searchprofile"
        element={<SearchProfile onShowSignUp={onShowSignUp} />}
      />
      <Route
        path="/findprofile"
        element={<FindProfile onShowSignUp={onShowSignUp} />}
      />

      <Route
        path="/membership"
        element={<Membership onShowSignUp={onShowSignUp} />}
      />

      <Route
        path="/edit-profile"
        element={<PersonalProfile onShowEditSuccess={onShowEditSuccess} />}
      />
      <Route
        path="/edit-profile/personal"
        element={
          <PersonalProfile
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/religious"
        element={
          <ReligiousProfile
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/family"
        element={
          <FamilyProfile
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/education"
        element={
          <EducationProfile
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/address"
        element={
          <AddressProfile
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/lifestylesocial"
        element={
          <LifestyleSocial
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/aboutmore"
        element={
          <AboutMore
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />
      <Route
        path="/edit-profile/matchpreferences"
        element={
          <MatchPreferences
            onShowSignUp={onShowSignUp}
            onShowEditSuccess={onShowEditSuccess}
          />
        }
      />

      <Route
        path="/photo-album"
        element={<PhotoAlbum onShowSignUp={onShowSignUp} />}
      />

      <Route
        path="/message"
        element={<Message onShowSignUp={onShowSignUp} />}
      />
      <Route
        path="/horoscope"
        element={<Horoscope onShowSignUp={onShowSignUp} />}
      />
      <Route
        path="/horoscope"
        element={<Horoscope onShowSignUp={onShowSignUp} />}
      />
      <Route
        path="/profile-looks-like"
        element={<UserProfile onShowSignUp={onShowSignUp} />}
      />
      {/* <Route path="//profile-looks-like" element={<ProfileLooksLike />} /> */}
    </Routes>
  );
};

export default AppRoutes;
