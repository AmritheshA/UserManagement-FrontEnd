import React from "react";
import { Link } from "react-router-dom";

function Navbar({ logined, flag = false }) {
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
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                LogOut
              </button>
            </Link>
          ) : logined ? (
            <Link to="/profile">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Profile
              </button>
            </Link>
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
