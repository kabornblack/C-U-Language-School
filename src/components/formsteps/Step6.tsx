import React from "react";

function Step6() {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center font-sans font-medium">
      <h2 className="text-center text-2xl md:text-4xl text-blue-950 pb-10 font-bold">
        {`What's your name?`}
      </h2>

      <label className="inline-flex items-center">
        <input
          type="text"
          required
          placeholder="👤 First name"
          className="h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pl-5"
        />
      </label>

      <label className="inline-flex items-center">
        <input
          type="text"
          required
          placeholder="👤 Last name"
          className="h-10 w-72 md:w-[350px] text-white bg-blue-900 rounded-full pl-5"
        />
      </label>
    </div>
  );
}

export default Step6;
