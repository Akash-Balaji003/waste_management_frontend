import React from "react";
import LeftPanel from "../components/LeftPanel"; // Import the LeftPanel component
import Awareness from "../components/Awareness"; // Import the MainContent component
import { useUserContext } from '../contexts/UserContext'; // Import the custom hook

const AdminAddUsers = () => {    
    const { userData } = useUserContext(); // Access global user data
    console.log("Component is rendering", userData);

    return (
        <div className="flex h-screen">
          {/* Left Panel */}
          <LeftPanel userData={userData} />

          {/* Main Content with custom button label, wrapped with a scrollable container */}
          <div className="flex-1 overflow-y-auto">
              <Awareness/>
          </div>
        </div>
    );
};

export default AdminAddUsers;
