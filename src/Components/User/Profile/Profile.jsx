import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "../Home/Navbar";

function Profile() {
  const userDetails = {
    name: "Amrithesh",
    email: "amrithesh@example.com",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logined,setLogined] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = () => {
    setCurrentImage(
      "https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"
    ); // Replace with your actual image URL
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveImage = () => {
    console.log("Image removed");
    handleCloseModal();
  };

  const handleUploadImage = () => {
    console.log("Image uploaded");
    handleCloseModal();
  };

  return (
    <>
    <Navbar logined={logined} flag={true}/>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"
          alt="Profile"
          className="w-52 h-52 rounded-full mb-4 cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center">
          <h1 className="text-2xl font-bold mb-4">{userDetails.name}</h1>

          <div className="mb-6">
            <p className="text-gray-700 font-bold">
              Email: {userDetails.email}
            </p>
            <p className="text-gray-700">
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            currentImage={currentImage}
            handleCloseModal={handleCloseModal}
            handleRemoveImage={handleRemoveImage}
            handleUploadImage={handleUploadImage}
          />
        )}
      </div>
    </>
  );
}

export default Profile;
