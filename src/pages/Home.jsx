import React from "react";
import LeftPanel from "../components/LeftPanel"; // Import the LeftPanel component
import FileUpload from "../components/FileUpload"; // Import the MainContent component
import { useUserContext } from '../contexts/UserContext'; // Import the custom hook

const AdminAddUsers = () => {    
    const { userData } = useUserContext(); // Access global user data
    console.log("Component is rendering", userData);
    const handleSubmit = () => {
        console.log("Submitting form for adding users");
        // Add your submit functionality here
    };
    const handleCancel = () => {
        console.log("Submitting form for adding users");
        // Add your submit functionality here
    };

    const handleSubmitFile = async () => {
        if (selectedFiles.length === 0) {
          alert("Please select at least one file before submitting.");
          return;
        }
      
        const formData = new FormData();
        selectedFiles.forEach((file) => formData.append("file", file));
      
        try {
          const response = await fetch("http://localhost:8000/predict", {
            method: "POST",
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const result = await response.json();
          console.log("Prediction Result:", result);
        } catch (error) {
          console.error("Error submitting files:", error);
        }
      };

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
