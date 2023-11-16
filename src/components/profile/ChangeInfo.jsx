import React, { useState } from "react";

const ChangeInfo = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Change Info</h2>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <label className="text-gray-400">Name</label>
          <input
            value={firstName}
            className="font-semibold  px-4 py-2 border border-slate-100 rounded-md"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-gray-400">Last Name</label>
          <input
            value={lastName}
            className="font-semibold  px-4 py-2 border border-slate-100 rounded-md"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-gray-400">Profile picture</label>
          <input
            value={profilePicture}
            className="font-semibold"
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <button className="self-start px-4 py-1 outline-none bg-red-700 text-white rounded-md cursor-pointer">
          Update
        </button>
      </form>
    </div>
  );
};

export default ChangeInfo;
