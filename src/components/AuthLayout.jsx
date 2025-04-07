import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#101010] text-white p-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-white/10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
