import { useState } from "react";
import contactUs from "../assets/contact-us.webp";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex items-center h-[75vh] justify-between w-[80vw] max-[930px]:flex-col max-[930px]:w-[100vw]">
      <div className="h-[70vh] w-[50vw] flex items-center justify-center max-[930px]:w-full">
        <img src={contactUs} alt="Contact us" className="drop-shadow-xl" />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 border-2 border-slate-500 p-8 rounded-lg h-[100vh]">
        <h1 className="text-2xl font-bold">Contact us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center">
          <input type="text" placeholder="Name" className="w-[20rem] p-2 border-2 border-black rounded-md max-[550px]:w-auto" required />
          <input type="email" placeholder="Email" className="w-[20rem] p-2 border-2 border-black rounded-md max-[550px]:w-auto" required />
          <textarea placeholder="Type your Message here..." className="w-[20rem] p-2 border-2 border-black rounded-md max-[550px]:w-auto" required></textarea>
          <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white w-[10rem] p-2 rounded-md shadow-md max-[550px]:w-auto">Submit</button>
          {message && (
            <span>Thanks for contacting FlavorFusion, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;