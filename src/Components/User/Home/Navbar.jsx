import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../../Redux/User/Actions/userLoginAction";

function Navbar({ flag = false }) {
  const role = useSelector((state) => state.userReducer.user.role);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-300">
        <div className="pl-10">
          <Link to="/">
            <h1 className="text-xl font-semibold">
              <span className="text-orange-500 text-2xl">L</span>o
              <span className="text-yellow-500 text-2xl">G</span>o
            </h1>
          </Link>
        </div>
        <div>
          {flag ? (
            <Link to="/login">
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                LogOut
              </button>
            </Link>
          ) : role !== null ? (
            <div className="flex justify-between w-[180px] mr-4">
              <Link to="/profile">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Profile
                </button>
              </Link>
              <Link to="/login">
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
                  LogOut
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
