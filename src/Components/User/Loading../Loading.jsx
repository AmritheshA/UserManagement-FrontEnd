import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoadingAnimation = () => {
  const navigator = useNavigate();

  const role = useSelector(state => state.userReducer?.user?.role);

  const loaderVariants = {
    animation: {
      rotate: [0, 520],
      transition: {
        duration: 1,
        loop: Infinity,
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      (role === "USER" ? navigator("/"): navigator("/admin/dashborad"))
    }, 1500);

    return () => clearTimeout(timeout);
  }, [navigator]);

  return (
    <div
      className="loader-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animation"
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #3498db",
          borderRadius: "50%",
          borderTop: "5px solid #e74c3c",
          animation: "spin 1s linear infinite",
        }}
      ></motion.div>
    </div>
  );
};

export default LoadingAnimation;
