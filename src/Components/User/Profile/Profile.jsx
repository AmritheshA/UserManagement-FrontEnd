import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "../Home/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../../Config/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfilePic,removeProfilePic } from "../../../Redux/User/Actions/userProfileAction";
import axiosInstance from "../../../Config/Axios/axiosConfig";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const username = state.user.username;
  const email = state.user.email;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveImage = () => {
    console.log("Image removed");

    axiosInstance.get(`/user/remove-image?email=${email}`,{
      "Content-Type": "application/json",
    });

    dispatch(removeProfilePic())    
    handleCloseModal();
  };

  const handleUploadImage = async (file) => {
    const image = file.target.files[0];

    try {
      if (!image) {
        throw new Error("Please select an image.");
      }

      const storageRef = ref(storage, `/product-image/${image?.name}`);

      const snapshot = await uploadBytes(storageRef, image);

      const url = await getDownloadURL(storageRef);

      dispatch(updateProfilePic(url));

      axiosInstance.post(`/user/updatePic?email=${email}`, url, {
        "Content-Type": "application/json",
      });

    } catch (error) {
      console.error("Error uploading image to Firebase:", error);
    }
  };

  return (
    <>
      <Navbar flag={true} />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <img
          src={state.user.url}
          alt="User Profile Image"
          className="w-52 h-52 rounded-full mb-4 cursor-pointer"
          onClick={handleImageClick}
        />

        <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center">
          <h1 className="text-2xl font-bold mb-4">{username}</h1>

          <div className="mb-6">
            <p className="text-gray-700 font-bold">Email: {email}</p>
            <p className="text-gray-700">
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            currentImage={state.user.url}
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
