import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Change Password</h2>
      <form className="flex flex-col gap-4">
        <div className="min-w-[20rem] w-full flex items-center justify-between gap-3">
          <label className="text-gray-400">Current password</label>
          <input
            value={currentPassword}
            className="font-semibold  px-4 py-2 border border-slate-100 rounded-md"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="min-w-[20rem] w-full flex items-center justify-between gap-3">
          <label className="text-gray-400">New password</label>
          <input
            value={newPassword}
            className="font-semibold  px-4 py-2 border border-slate-100 rounded-md"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="min-w-[20rem] w-full flex items-center justify-between gap-3">
          <label className="text-gray-400">Confirm password</label>
          <input
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            className="font-semibold  px-4 py-2 border border-slate-100 rounded-md"
          />
        </div>
        <button className="self-start px-4 py-1 outline-none bg-red-700 text-white rounded-md cursor-pointer">Update</button>
      </form>
    </div>
  );
};

export default ChangePassword;
