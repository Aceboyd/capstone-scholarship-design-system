import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import Dashboard from "./component5/Dashboard.jsx";
import Admin from "./Pages/Admin.jsx";
import ApplicationPage from "./Pages/ApplicationPage.jsx";
import Ghanapage from "./Pages/Ghanapage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import PortalStep4 from "./Pages/PortalStep4.jsx";
import PortalStep5 from "./Pages/PortalStep5.jsx";
import Scholarship from "./Pages/Scholarship.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import Step3 from "./Pages/Step3.jsx";
import Step1 from "./Pages/Steps1.jsx";
import StepsCompleted from "./Pages/StepsCompleted.jsx";
import Temp from "./Pages/Temp1.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Temp />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* User Routes */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/application" element={<ApplicationPage />} />
      <Route path="/step-1" element={<Step1 />} />
      <Route path="/step-3" element={<Step3 />} />
      <Route path="/steps-completed" element={<StepsCompleted />} />
      <Route path="/portal-step-4" element={<PortalStep4 />} />
      <Route path="/portal-step-5" element={<PortalStep5 />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/scholarship" element={<Scholarship />} />
      <Route path="/ghanapage" element={<Ghanapage />} />
      {/* Admin Routes */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/application-management" element={<Dashboard />} />
      <Route path="/admin/program-setup" element={<Dashboard />} />
      <Route path="/admin/reviewer-assignment" element={<Dashboard />} />
      <Route path="/admin/communication" element={<Dashboard />} />
      <Route path="/admin/document-centre" element={<Dashboard />} />
      <Route path="/admin/reports" element={<Dashboard />} />
      <Route path="/admin/user-management" element={<Dashboard />} />
      <Route path="/admin/settings" element={<Dashboard />} />
      {/* Catch-all: Redirect unknown routes to Signup */}
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
