import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/UserSide/HomePage";
import LoginPage from "./Pages/UserSide/LoginPage";
import ProfilePage from "./Pages/UserSide/ProfilePage";
import SignupPage from "./Pages/UserSide/SignupPage";
import DashBoradPage from "./Pages/AdminSide/DashBoradPage";
import LoadingAnimation from "./Components/User/Loading../Loading";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.userReducer.user);
  const role = useSelector((state) => state.userReducer.user?.role);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route
          element={!isAuth && role == "USER" ? <HomePage /> : <LoginPage />}
          path="/login"
        />
        <Route
          element={role == "USER" ? <ProfilePage /> : <LoginPage />}
          path="/profile"
        />
        <Route
          element={!isAuth && role == "USER" ? <HomePage /> : <SignupPage />}
          path="/signup"
        />
        <Route
          element={
            isAuth && role == "ADMIN" ? <DashBoradPage /> : <LoginPage />
          }
          path="/admin/dashborad"
        />
        <Route element={<LoadingAnimation />} path="/loading" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
