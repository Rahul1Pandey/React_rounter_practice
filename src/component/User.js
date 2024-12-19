import React from "react";
const User = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
            RP
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Rahul Pandey
            </h1>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            Welcome to your user page! Here, you can manage your account
            details, view your activity, and customize your settings.
          </p>
        </div>
        <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
export default User;