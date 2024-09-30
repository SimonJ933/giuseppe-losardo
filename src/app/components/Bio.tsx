import React from "react";

function Bio() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="text-center align-center mt-10 font-montserrat p-4">
        <h1 className="text-xl text-blue-600">CHI SONO</h1>
        <h2 className="text-2xl sm:text-2xl lg:text-3xl">Dott. Giuseppe Losardo</h2>
        <hr className="my-4 border-t border-gray-600" />
      </div>

      <div className="flex justify-center items-center p-4 max-w-4xl mx-auto ">
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full flex-col lg:flex-row">
          <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-r-none bg-clip-border shrink-0">
            <img src="/chisono.jpeg" className="object-cover w-full h-full" alt="Dott. Giuseppe Losardo" />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">FORMAZIONE</h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo earum quod, quam quia esse ullam vitae labore laborum ducimus inventore, nobis,
              recusandae cumque enim alias exercitationem. Quia nobis, debitis fugit eius sequi possimus vel at repellendus dolorum labore ab sint doloribus ad
              odit ex quasi beatae id aperiam ducimus molestiae et officiis modi voluptates consequatur! Dolorum, omnis quasi accusamus porro sint earum
              dignissimos, neque quidem aperiam odit deleniti molestiae harum laudantium nobis pariatur ex asperiores fugit, ab voluptates placeat vitae nisi
              voluptate? Praesentium, exercitationem. Amet, vitae dolores adipisci tempore reiciendis labore maiores numquam blanditiis. Error voluptatibus amet
              repellendus numquam. Expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
