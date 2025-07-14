import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import ApplicationPage from "./Pages/ApplicationPage";
import Ghanapage from "./Pages/Ghanapage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PortalSteps1 from "./Pages/PortalSteps1";
import PortalSteps4 from "./Pages/PortalSteps4";
import PortalSteps5 from "./Pages/PortalSteps5";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondPortal";
import SignUpPage from "./Pages/SignUpPage";
import Step3 from "./Pages/Step3";
import StepsCompleted from "./Pages/StepsCompleted";
import Admin from "./Pages/Admin";
import Dashboard from "./component5/Dashboard";
import UserDashboard from "./UserDashboard/UserMain";

function App() {
  return (
    <Router>
      <Routes>
        {/* === Auth Routes === */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* === User Routes === */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/portalStep1" element={<PortalSteps1 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/steps-completed" element={<StepsCompleted />} />
        <Route path="/portalStep4" element={<PortalSteps4 />} />
        <Route path="/portalStep5" element={<PortalSteps5 />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/scholarshiplisting" element={<ScholarshipSecondPortal />} />
        <Route path="/ghanapage" element={<Ghanapage />} />

        {/* === Admin Routes === */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/application-management" element={<Dashboard />} />
        <Route path="/admin/program-setup" element={<Dashboard />} />
        <Route path="/admin/reviewer-assignment" element={<Dashboard />} />
        <Route path="/admin/communication" element={<Dashboard />} />
        <Route path="/admin/document-centre" element={<Dashboard />} />
        <Route path="/admin/reports" element={<Dashboard />} />
        <Route path="/admin/user-management" element={<Dashboard />} />
        <Route path="/admin/settings" element={<Dashboard />} />

        {/* === Catch-all: Redirect unknown routes to Signup === */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
