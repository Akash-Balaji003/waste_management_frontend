import React from "react";
import { useNavigate } from 'react-router-dom';

const LeftPanel = ({ userData }) => {

  const navigate = useNavigate();

  return (
    <aside className="bg-blue-900 text-white w-1/7 p-6 flex flex-col justify-between h-screen">
      <div>
        <h2 className="text-xl font-bold mb-1">Welcome</h2>
        <p className="text-lg mb-8">{userData?.username}</p>
        <nav className="space-y-4">
          <a className="block hover:underline" onClick={() => navigate("/home")}>
            Home
          </a>
          <a className="block hover:underline" onClick={() => navigate("/classification")}>
            File Upload
          </a>
        </nav>
      </div>

      {/* Logout link as a button */}
        <a 
        className="block bg-red-600 text-white py-2 px-4 rounded-md text-center hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-95 mt-auto"
        onClick={() => navigate("/")}
        >
        Logout
        </a>


    </aside>
  );
};

export default LeftPanel;
