import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/39338569-bf0f-4fba-947c-bbca56417565"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700 text-teal-400">
            Contact
          </p>
          <p className="text-teal-400 py-4">
            {
              "// Submit the form below or shoot me an email - hoangtrung14027@gmail.com"
            }
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-white flex px-4 py-3 mx-auto my-8 items-center border-2 hover:bg-pink-700 hover:border-pink-700 duration-300 ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
