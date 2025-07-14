import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import ApplicationPage from "./Pages/ApplicationPage.jsx";
import Ghanapage from "./Pages/Ghanapage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Temp from "./Pages/Temp.jsx";
import PortalSteps1 from "./Pages/PortalSteps1.jsx";
import PortalStep4 from "./Pages/PortalStep4.jsx";
import PortalStep5 from "./Pages/PortalStep5.jsx";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondportal.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import Step3 from "./Pages/Step3.jsx";
import StepsCompleted from "./Pages/StepsCompleted.jsx";
import Admin from "./Pages/Admin.jsx";
import Dashboard from "./component5/Dashboard.jsx"; // Make sure this file exists
import UserDashboard from "./UserDashboard/UserMain.jsx"; // Make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        {/* === Auth Routes === */}
        <Route path="/" element={<Temp />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* === User Routes === */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/portalStep1" element={<PortalSteps1 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/steps-completed" element={<StepsCompleted />} />
        <Route path="/portalStep4" element={<PortalStep4 />} />
        <Route path="/portalStep5" element={<PortalStep5 />} />
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
