import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Manegment/AddUserModal";

const AdminNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddUser = () => {
    setIsModalOpen(true);
  };

  const onLogout = () => {
    console.log("Logout clicked");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (userData) => {
    // Handle adding user logic here
    console.log("User added:", userData);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-pink-700 p-4 text-white">
      <Link to="/">
        <h1 className="text-2xl ml-28 font-semibold">
          <span className="text-orange-500 text-3xl">L</span>o
          <span className="text-yellow-500 text-3xl">G</span>o
        </h1>
      </Link>
      <div className="flex items-center">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mr-4"
          onClick={onAddUser}
        >
          Add User
        </button>
        <Link to="/login">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        </Link>
      </div>

      {isModalOpen && (
        <Modal handleModalClose={closeModal} handleAddUser={handleAddUser} />
      )}
    </div>
  );
};

export default AdminNav;
