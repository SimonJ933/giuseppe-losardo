import React from "react";
import ContactCards from "./ContactCards";

function Contacts() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="text-center mt-10 font-montserrat p-4">
        <h1 className="text-xl text-blue-600">CONTATTI</h1>
        <hr className="my-4 border-t border-gray-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mt-10">
        {ContactCards.map((method) => (
          <div key={method.id} className="w-full">
            <div
              className="flex flex-col p-6 rounded-xl bg-white 
                shadow-lg transition-transform transform hover:scale-105 
                shadow-[0_4px_20px_rgba(100,100,100,0.2)] hover:shadow-[0_4px_30px_rgba(100,100,100,0.3)]"
            >
              <img src={method.image} className="w-12 h-12 mx-auto" alt={`${method.title} Icon`} />
              <div className="mt-3 font-semibold text-lg text-center">{method.title}</div>
              <div className="text-sm font-light text-center">{method.detail}</div>
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#F4F5FA] px-4 py-2 rounded-full border border-[#F0F0F6] shadow-md mt-4 w-full">{method.buttonText}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
