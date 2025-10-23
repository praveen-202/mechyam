import React from "react";
import aboutus from "../assets/aboutus.jpg";
import aboutus02 from "../assets/aboutus02.svg";

const About = () => (
  <>
    {/* Header Section */}
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
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 text-left px-8 py-3 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          >
            About Us
          </h1>
        </div>
      </div>
    </section>

    {/* Two-column Section: Text + Image */}
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-wrap md:flex-nowrap items-start gap-12">
          
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-left space-y-5">
            <h2 className="text-2xl font-bold mb-4 bg-gray-200 px-5 py-3 rounded-md inline-block">
              About Us
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed">
              At <span className="font-semibold">MECHYAM AI DESIGN SOLUTIONS (MADS)</span>, we bring structure to
              complexity — engineering systems that rise with clarity,
              resilience, and purpose.
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              Founded in 2025, <span className="font-semibold">MECHYAM</span> is a lean and agile firm powered by a
              leadership team with over 15 years of industry experience in
              mechanical design, structural analysis, and data-driven engineering. While we are young as a company, our roots run deep —
              built on integrity, technical mastery, and a shared belief that
              great design begins with understanding, not assumptions.
            </p>

            <div className="text-lg text-gray-800 leading-relaxed space-y-2">
              <div className="block font-semibold mb-1 text-color-red-900 bg-gray-200 px-3 py-2 rounded">
                Our name reflects our philosophy:
              </div>
              <div>
                <span className="block font-semibold mb-1 text-color-blue-900">“Mech”</span>
                <span>- for the mechanical core of what we do.</span>
              </div>
              <div>
                <span className="block font-semibold mb-1 text-color-blue-900">“Yam”</span>
                <span>- for the sea — symbolizing the depth, uncertainty, and potential of the engineering challenges we take on.</span>
              </div>
            </div>

            <p className="text-lg text-gray-800 leading-relaxed">
              From concept development and CAD modelling to structural
              validation and AI-powered measurement analysis, we partner with
              clients to build systems that last — solutions that are as
              thoughtful as they are robust.
            </p>

            <p className="text-lg text-gray-800 font-semibold leading-relaxed">
              We don’t just engineer products. <br />
              We engineer confidence.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <img
              src={aboutus02}
              alt="About Illustration"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
            />
            
            {/* Text below image */}
            <div className="mt-6 text-lg text-gray-800 leading-relaxed px-1 md:px-2 space-y-4">
              <p className="text-justify">
                Our designs balance innovation with practicality — ensuring that
                every model we create aligns with real-world performance, cost,
                and manufacturability.
              </p>
              <p className="text-justify">
                Through collaboration and precision, MECHYAM continues to
                redefine engineering excellence for modern industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
