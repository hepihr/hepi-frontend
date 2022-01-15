import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard/admin/DashboardAdmin";
import DashboardAdminDocument from "./pages/dashboard/admin/DashboardAdminDocument";
import DashboardAdminEmployee from "./pages/dashboard/admin/DashboardAdminEmployee";
import DashboardAdminSetting from "./pages/dashboard/admin/DashboardAdminSetting";
import DashboardAdminSettingPosition from "./pages/dashboard/admin/DashboardAdminSettingPosition";
import DashboardAdminSettingTimeOff from "./pages/dashboard/admin/DashboardAdminSettingTimeOff";
import DashboardUser from "./pages/dashboard/user/DashboardUser";
import DashboardUserCalendar from "./pages/dashboard/user/DashboardUserCalendar";
import DashboardUserHistory from "./pages/dashboard/user/DashboardUserHistory";
import DashboardUserRequest from "./pages/dashboard/user/DashboardUserRequest";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route
        path="/dashboard/admin/document"
        element={<DashboardAdminDocument />}
      />
      <Route
        path="/dashboard/admin/employee"
        element={<DashboardAdminEmployee />}
      />
      <Route
        path="/dashboard/admin/setting"
        element={<DashboardAdminSetting />}
      />
      <Route
        path="/dashboard/admin/setting/position"
        element={<DashboardAdminSettingPosition />}
      />
      <Route
        path="/dashboard/admin/setting/timeoff"
        element={<DashboardAdminSettingTimeOff />}
      />

      <Route path="/dashboard/user" element={<DashboardUser />} />
      <Route
        path="/dashboard/user/calendar"
        element={<DashboardUserCalendar />}
      />
      <Route
        path="/dashboard/user/history"
        element={<DashboardUserHistory />}
      />
      <Route
        path="/dashboard/user/request"
        element={<DashboardUserRequest />}
      />

      <Route element={<Login />} />
    </Routes>
  );
};

export default Router;
