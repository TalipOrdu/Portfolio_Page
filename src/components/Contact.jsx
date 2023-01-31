import {React} from "react";

const Contact = () => {

    
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white h-full"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold p-2 pb-4 ml-12 md:mt-28">Contact</p>
          <p className="py-4 px-4 ml-12">
            Fill the Form your ideas important for me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d9660bf7-9696-422c-9fc3-0db72fbca5ed"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input 
              required
              type="text"
              name="name"
              placeholder="your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 focus:border-purple-600"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="your e-mail"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4  focus:border-purple-600"
            />
            <textarea
              required
              name="message"
              rows="10"
              placeholder="write your message here"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  focus:border-purple-600"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
