import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-50 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-950 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gradient-to-r from-blue-950 text-blue-700">
          Please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
