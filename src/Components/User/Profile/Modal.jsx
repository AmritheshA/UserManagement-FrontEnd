import React from "react";

function Modal({currentImage,handleCloseModal,handleRemoveImage,handleUploadImage}) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseModal();
        }
      }}
    >
      <div className="bg-white p-4 rounded shadow-md text-center flex flex-col items-center">
        {currentImage && (
          <img
            src={currentImage}
            alt="Preview"
            className="w-1/2 h-auto rounded-full mb-2"
          />
        )}
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleRemoveImage}
          >
            Remove
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUploadImage}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
