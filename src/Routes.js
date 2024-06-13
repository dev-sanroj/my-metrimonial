import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllMatches from "./pages/AllMatches/AllMatches";
import DashboardPage from "./pages/UserDashboard/UserDashboardPages/DashboardPage/DashboardPage";
import FindProfile from "./pages/UserDashboard/UserDashboardPages/FindProfilePages/FindProfile";
import Membership from "./pages/UserDashboard/UserDashboardPages/MembershipPages/Membership";
import PersonalProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/PersonalProfile";
import ReligiousProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/ReligiousProfile";
import FamilyProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/FamilyProfile";
import EducationProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/EducationProfile";
import AddressProfile from "./pages/UserDashboard/UserDashboardPages/EditProfile/AddressProfile";
import LifestyleSocial from "./pages/UserDashboard/UserDashboardPages/EditProfile/LifestyleSocial";
import PhotosMore from "./pages/UserDashboard/UserDashboardPages/EditProfile/PhotosMore";
import PhotoAlbum from "./pages/UserDashboard/UserDashboardPages/PhotoAlbumPages/PhotoAlbum";
import Message from "./pages/UserDashboard/UserDashboardPages/MessagePages/Message";
import Horoscope from "./pages/UserDashboard/UserDashboardPages/HoroscopePage/Horoscope";
import ProfileLooksLike from "./pages/UserDashboard/UserDashboardPages/ProfileLooksLikePages/ProfileLooksLike";
import UserProfile from "./pages/AllMatches/UserProfile/UserProfile";
import LatestRequest from "./pages/UserDashboard/UserDashboardPages/DashboardPage/LatestRequest/LatestRequest";

const AppRoutes = ({ onShowBasicInfo, onShowSignUp, onShowPaymentLayout }) => {
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
      <Route path="/all-matches/user-profile" element={<UserProfile />} />

      <Route
        path="/dashboard"
        element={<DashboardPage onShowPaymentLayout={onShowPaymentLayout} />}
      />
      <Route path="/dashboard/latest-request" element={<LatestRequest />} />

      <Route path="/find-profile" element={<FindProfile />} />

      <Route path="/membership" element={<Membership />} />

      <Route path="/edit-profile" element={<PersonalProfile />} />
      <Route path="/edit-profile/personal" element={<PersonalProfile />} />
      <Route path="/edit-profile/religious" element={<ReligiousProfile />} />
      <Route path="/edit-profile/family" element={<FamilyProfile />} />
      <Route path="/edit-profile/education" element={<EducationProfile />} />
      <Route path="/edit-profile/address" element={<AddressProfile />} />
      <Route
        path="/edit-profile/lifestylesocial"
        element={<LifestyleSocial />}
      />
      <Route path="/edit-profile/photosmore" element={<PhotosMore />} />

      <Route path="/photo-album" element={<PhotoAlbum />} />

      <Route path="/message" element={<Message />} />
      <Route path="/horoscope" element={<Horoscope />} />
      <Route path="/horoscope" element={<Horoscope />} />
      <Route path="//profile-looks-like" element={<ProfileLooksLike />} />
    </Routes>
  );
};

export default AppRoutes;
