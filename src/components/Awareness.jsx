import React, { useState } from "react";
import { FiUpload } from "react-icons/fi"; // Upload Icon
import { IoClose } from "react-icons/io5"; // Close Icon
import Image from "../assets/WM_Image2.jpg"; // Your logo image import

const backendUrl = "http://43.207.203.38:8000/";

const Awareness = () => {


  return (
    <main className="flex-1 bg-gray-50 p-8">
        <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold">Garbage Segregator</h1>
            <img src={Image} alt="Logo" className="h-40" />
        </div>
        
        {/* Content */}
        <div className="flex flex-col h-5/6 items-center justify-center space-y-4">
            HI BRO 
        </div>
    </main>
  );
};

export default Awareness;
