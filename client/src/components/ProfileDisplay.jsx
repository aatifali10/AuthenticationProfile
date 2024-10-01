import React, { useState, useEffect } from "react";

const ProfileDisplay = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    // Get username and profile image from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedProfileImage = localStorage.getItem("profileImage");
    setUsername(storedUsername);
    setProfileImage(storedProfileImage);
  }, []);

  if (!username || !profileImage) {
    return <p>No profile data available. Please log in.</p>;
  }

  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow-md">
      <img
        className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
        src={`http://localhost:5000/${profileImage}`}
        alt={`${username}'s profile`}
      />
      <div>
        <h2 className="text-lg font-bold">{username}</h2>
        <p className="text-gray-600">Welcome back!</p>
      </div>
    </div>
  );
};

export default ProfileDisplay;
