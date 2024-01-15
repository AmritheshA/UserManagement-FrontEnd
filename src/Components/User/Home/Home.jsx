import React, { useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [logined, setLogined] = useState(true);
  return (
    <div>
      <Navbar logined={logined} />
      
      <div className="flex justify-center items-center bg-[url('https://w0.peakpx.com/wallpaper/764/285/HD-wallpaper-abstract-lines-dark-lines-simple-background-abstract-dark-black-dribbble-oled.jpg')] bg-cover w-screen h-[92vh]">
        <h1 className="text-white text-5xl">Hello Amrithesh !...</h1>
      </div>
    </div>
  );
}

export default Home;
