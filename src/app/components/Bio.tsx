import React from "react";

function Bio() {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      <div className="text-center align-center mt-10 font-montserrat p-4">
        <h1 className="text-xl text-blue-600">CHI SONO</h1>
        <h2 className="text-2xl sm:text-2xl lg:text-3xl">Dott. Giuseppe Losardo</h2>

        <hr className="my-4 border-t border-gray-600" />
      </div>

      <div className="flex flex-col sm:flex-row p-4 justify-center items-center max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
        <img src="/chisono.jpeg" className="rounded-xl w-full sm:w-1/2 h-auto object-cover" alt="Dott. Giuseppe Losardo" />

        <h2 className="text-justify p-5 text-sm sm:text-base lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo earum quod, quam quia esse ullam vitae labore laborum ducimus inventore, nobis,
          recusandae cumque enim alias exercitationem. Quia nobis, debitis fugit eius sequi possimus vel at repellendus dolorum labore ab sint doloribus ad odit
          ex quasi beatae id aperiam ducimus molestiae et officiis modi voluptates consequatur! Dolorum, omnis quasi accusamus porro sint earum dignissimos,
          neque quidem aperiam odit deleniti molestiae harum laudantium nobis pariatur ex asperiores fugit, ab voluptates placeat vitae nisi voluptate?
          Praesentium, exercitationem. Amet, vitae dolores adipisci tempore reiciendis labore maiores numquam blanditiis. Error voluptatibus amet repellendus
          numquam. Expedita.
        </h2>
      </div>
    </div>
  );
}

export default Bio;
