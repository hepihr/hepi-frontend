import React from "react";
import { Route, Routes } from "react-router-dom";
import ApplicationsDashboard from "../layouts/applications-dashboard/ApplicationsDashboard";
import Dashboard from "./dashboard/Dashboard";
import Document from "./dashboard/documents/Document";
import Employee from "./dashboard/employees/Employee";
import TimeOff from "./dashboard/timeoff/TimeOff";
import TimeOffCalendar from "./dashboard/timeoff/TimeOffCalendar";
import TimeOffHistory from "./dashboard/timeoff/TimeOffHistory";
import TimeOffRequest from "./dashboard/timeoff/TimeOffRequest";
import PageNotFound from "./PageNotFound";
import Setting from "./settings/Setting";

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ApplicationsDashboard applicationsHeader={""} />}
      >
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/documents" element={<Document />} />
        <Route path="/dashboard/employees" element={<Employee />} />
        <Route path="/dashboard/timeoff" element={<TimeOff />} />
        <Route
          path="/dashboard/timeoff/calendar"
          element={<TimeOffCalendar />}
        />
        <Route path="/dashboard/timeoff/history" element={<TimeOffHistory />} />
        <Route path="/dashboard/timeoff/request" element={<TimeOffRequest />} />
        <Route path="/dashboard/settings" element={<Setting />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
