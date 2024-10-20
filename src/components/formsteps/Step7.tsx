import React from "react";

function Step7() {
  return (
    <div className="flex flex-col space-y-2  font-sans font-medium">
      <h2 className="text-center text-2xl md:text-4xl text-blue-950 pb-10 font-bold">
        {`What's your email?`}
      </h2>

      <label className="inline-flex items-center">
        <input
          type="email"
          required
          placeholder="✉️ Email"
          className="h-16 w-64 md:w-[550px] text-gray-700 border-gray-400 border-2 rounded pl-3"
        />
      </label>
    </div>
  );
}

export default Step7;
