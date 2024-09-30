import React from "react";

function Contacts() {
  const contactMethods = [
    {
      id: 1,
      title: "WHATSAPP",
      image: "whatsapp.png",
      detail: "333",
      buttonText: "CHIAMA PER INFORMAZIONI",
      link: "https://wa.me/+393271782206",
    },
    {
      id: 2,
      title: "EMAIL",
      image: "email.png",
      detail: "info@example.com",
      buttonText: "SCRIVIMI PER INFORMAZIONI",
      link: "mailto:simone.grillo93@hotmail.it",
    },
    {
      id: 3,
      title: "INDIRIZZO",
      image: "maps.png",
      detail: "VIA BANANE",
      buttonText: "GUARDA SU MAPS",
      link: "https://www.google.it/maps/place/Centro+Di+Accoglienza+Terra+Promessa/@37.4964755,14.0388074,871m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1310c1e05bd1b51b:0x7018d1bc65f286ad!8m2!3d37.4964755!4d14.0413823!16s%2Fg%2F1v38742q?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
    },

    {
      id: 4,
      title: "LINKEDIN",
      image: "linkedin.png",
      buttonText: "VISITA IL MIO PROFILO",
      detail: "VUOI SAPERE PIU' DI ME?",
      link: "https://www.linkedin.com/in/giuseppe-losardo-04090381",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="text-center mt-10 font-montserrat p-4">
        <h1 className="text-xl text-blue-600">CONTATTI</h1>
        <hr className="my-4 border-t border-gray-600" />
      </div>

      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8 justify-center items-center mt-10">
        {contactMethods.map((method) => (
          <div key={method.id} className="w-full md:w-96">
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
