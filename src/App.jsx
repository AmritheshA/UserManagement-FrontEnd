import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/UserSide/HomePage"
import LoginPage from "./Pages/UserSide/LoginPage";
import ProfilePage from "./Pages/UserSide/ProfilePage";
import SignupPage from "./Pages/UserSide/SignupPage";
import DashBoradPage from "./Pages/AdminSide/DashBoradPage";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<DashBoradPage />} path="/admin/dashborad" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
