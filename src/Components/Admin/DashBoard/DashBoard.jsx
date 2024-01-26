import React, { useEffect, useState } from "react";
import Navbar from "./AdminNav";
import { fetchAllUsers } from "../../../Redux/Admin/Actions/fetchUserAction";
import { deleteUser } from "../../../Redux/Admin/Actions/deleteUserAction";
import Modal from "../Manegment/EditUserModal"
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminReducer.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser,setSelectedUser] = useState([]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const deleteTheUser = (userId) => {
    const toDeleteUser = users.filter((user) => user.id === userId);
    dispatch(deleteUser(users, toDeleteUser[0]));
  };

  const editUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
  
    if (userToEdit) {
      const { email, username } = userToEdit;
      setSelectedUser({ username, email });
      setIsModalOpen(true);
    }

  };
  

  const handleModalClose = () =>{
    setIsModalOpen(false);
  }

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Dashboard</h2>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded mb-4"
          />

          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.email} className="border-b">
                  <td className="py-2 px-2">{user.username}</td>
                  <td className="py-2 px-2">{user.email}</td>
                  <td className="py-2 px-2">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded transition hover:bg-red-600"
                      onClick={() => deleteTheUser(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-700 text-white py-1 ml-5 px-3 rounded transition hover:bg-blue-500"
                      onClick={() => editUser(user.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <Modal handleModalClose={handleModalClose} userDetails={selectedUser}  />
      )}
    </>
  );
};

export default Dashboard;
