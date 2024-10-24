import { Route, Routes } from "react-router-dom";
import CallbackPage from "./pages/callback-page";
import ProtectedPage from "./pages/protected-page";
import NotFoundPage from "./pages/not-found";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import { AuthenticationGuard } from "./components/auth-guard";
import OrganizationsDashboard from "./pages/organizations-dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route
          path="/protected"
          element={<AuthenticationGuard component={ProtectedPage} />}
        />
        <Route
          path="/organizations/:org_id"
          element={<AuthenticationGuard component={OrganizationsDashboard} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
