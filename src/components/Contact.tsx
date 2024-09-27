import React from "react";

function Contact() {
  return (
    <div className="flex flex-col h-auto w-full bg-blue-900">
      <div className="text-white text-center p-20 pb-2 space-y-3">
        <h1 className="text-4xl font-bold ">Contact Us</h1>
        <p>
          Is there anything you need help or clarification with? We would love
          to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-sm md:max-w-lg lg:max-w-2xl mx-auto bg-blue-900 p-8 pb-16">
        {/* First Row: Prefix, First Name, Last Name */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Prefix */}
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0  py-2">
            <label
              className="block tracking-wide text-white text-xs font-bold mb-2 "
              htmlFor="prefix"
            >
              Prefix
            </label>
            <select
              id="prefix"
              className="appearance-none block w-full cursor-pointer bg-gray-200 text-black border border-gray-200 rounded font-medium text-sm py-1 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
              <option>Dr.</option>
            </select>
          </div>

          {/* First Name */}
          <div className="w-full md:w-2.5/6 px-3 mb-6 md:mb-0  py-3">
            <label
              className="block tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name <span className="text-white">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border-gray-200 rounded font-medium text-sm py-1 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
              id="first-name"
              type="text"
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-2.5/6 px-3">
            <label
              className="block tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name <span className="text-white">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border-gray-200 rounded font-medium text-sm py-1 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              required
            />
          </div>
        </div>

        {/* Second Row: Phone Number, Email */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded font-medium text-sm py-1 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="tel"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-white">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded font-medium text-sm py-1 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              required
            />
          </div>
        </div>

        {/* Third Row: Text Area */}
        <div className="mb-6">
          <label
            className="block tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded font-medium text-sm py-2 px-3 leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Fourth Row: Checkbox */}
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              required
            />
            <span className="ml-2 text-white text-sm">
              I would like to receive further information and special offers by
              email. I can withdraw my consent at any time by sending an email
              to us.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="hover:bg-blue-600 bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
