import React from "react";
import heroImg from "../../assets/hero.png";
import steelDetailingImg from "../../assets/StructuralSteelImages/structural-steel-detailing.jpeg";
import brige from "../../assets/bridge.jpg";
import bridge01 from "../../assets/bridge01.jpg";

const EngineeringDesign = () => (
  <>
    <section className="w-full overflow-hidden">
      <div className="relative w-screen flex items-center justify-start -mx-4">
        <img
          src={brige}
          alt="Steel Structure Background"
          className="w-full"
          style={{ height: '50vh', width: '100vw', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute left-0 top-1/3 z-10 ml-8" style={{ maxWidth: '50vw' }}>
          <h1
            className="text-5xl md:text-6xl lg:text-l font-extrabold text-white mb-2 text-left px-10 w-auto h-auto bg-opacity-50 bg-gray-800 rounded px-3 py-2"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            Engineering Design
          </h1>
        </div>
      </div>
    </section>

    {/* Two-column section: text (left) and image (right) */}
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 px-3 py-2 rounded">
              Engineering Design
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              We bring ideas to life with intelligent design rooted in practical engineering. Whether you're launching a new product or improving an existing system, our design team leverages cutting-edge tools and proven processes to create solutions that are functional, manufacturable, and future-ready.
            </p>
            

            {/* New bullet points */}
            <ul className="list-disc list-inside text-lg text-gray-800 mt-4 space-y-2">
              <li>Mechanical and structural component design</li>
              <li>3D CAD modelling using tools like SolidWorks, NX, and AutoCAD</li>
              <li>Plant and building layouts using SP3D, Revit, and BIM workflows</li>
              <li>Design optimization for performance, cost-efficiency, and scalability</li>
              <li>Detailed drawing packages, tolerancing, and manufacturing readiness</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={bridge01}
              alt="Steel detailing"
              className="w-full h-auto max-h-96 object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default EngineeringDesign;
