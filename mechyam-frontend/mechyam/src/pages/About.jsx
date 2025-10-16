import React from "react";

import aboutus from "../assets/aboutus.jpg";
import aboutus02 from "../assets/aboutus02.svg";



const About = () => (
  <>
  <section className="w-full overflow-hidden">
    <div className="relative w-screen flex items-center justify-start -mx-4">
      <img
        src={aboutus}
        alt="Steel Structure Background"
        className="w-full"
        style={{
          height: "50vh",
          width: "100vw",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        className="absolute left-0 top-1/3 z-10 ml-8"
        style={{ maxWidth: "50vw" }}
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 text-left px-20 w-auto h-auto bg-gray-800 bg-opacity-50 rounded"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          About Us
        </h1>
      </div>
    </div>
  </section>

  {/* Two-column section: text (left) and image (right) */}
  <section className="w-full bg-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-5 rounded">
            About Us
          </h2>
          <p className="text-lg text-gray-800 mb-4">
          Mechyam Technical Services is a leading engineering services provider since 2004. We cover several areas of structural, mechanical and design services for a variety of industrial and commercial requirements.​​
          </p>
          <p className="text-lg text-gray-800 mb-4 ">
            With the state-of-the-art facility and skilled In-house staff, we support customers across the globe Mechyam offers cost effective, competitive and customized solutions to meet specific requirements of our clients. We engage in different model of outsourcing, whether it is On-site or Offshore model, it will help our client’s business grow and they can focus more on their core strength.
          </p>
          <p className="text-lg text-gray-800 mb-4">Our success is based on the commitment we give to our clients by continuous improvement in the quality of deliverables, consistency in work quality and updating our knowledge of the state-of-the-art technology even in the time of rising costs – competitive pricing structure.</p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={aboutus02}
            alt="Steel detailing"
            className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  

      
  </>
);
export default About;
