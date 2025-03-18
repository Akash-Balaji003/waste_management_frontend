import React from "react";
import LeftPanel from "../components/LeftPanel"; // Import the LeftPanel component
import FileUpload from "../components/FileUpload"; // Import the MainContent component
import { useUserContext } from '../contexts/UserContext'; // Import the custom hook

const AdminAddUsers = () => {    
    const { userData } = useUserContext(); // Access global user data
    console.log("Component is rendering", userData);

    return (
        <div className="flex h-screen">
        {/* Left Panel */}
        <LeftPanel userData={userData} />

        {/* Main Content with custom button label */}
        <FileUpload
            submitLabel="Submit" // Custom label for submit button
            cancelLabel="Go Back"    // Custom label for cancel button
            fileLable="Upload Image" // Cancel function
        />
        </div>
    );
};

export default AdminAddUsers;
