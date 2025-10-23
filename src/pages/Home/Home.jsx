import React from "react";
import { Link } from "react-router-dom";

// 🖼 Import the new hero image
import MechymaImage from "../../assets/mechyma.jpg";

// 🖼 Import other images for services
import structuralImg from "../../assets/structural-steel-detailing.jpeg";
import steelDetailingImg from "../../assets/steel-detailing-services.webp";
import mechanicalServiceImg from "../../assets/Mechanical-Engineering-Services.jpeg";
import chess from "../../assets/chess.jpg";

// ⚙️ Services section data
const services = [
  {
    title: "Structural Steel Detailing",
    subTitle: "Structural Engineering Services",
    description:
      "We provide precise structural steel detailing to ensure accurate fabrication and seamless construction management.",
    image: structuralImg,
    link: "/structural-engineering",
  },
  {
    title: "Steel Detailing Services",
    subTitle: "Structural Detailing Solutions",
    description:
      "Our steel detailing services offer comprehensive solutions for structural projects, ensuring high accuracy and quality.",
    image: steelDetailingImg,
    link: "/structuralsteeldetailingservices",
  },
  {
    title: "Mechanical Engineering",
    subTitle: "Mechanical Design & Analysis",
    description:
      "Our mechanical engineering solutions cover design, analysis, and optimization of machinery and systems for efficiency and reliability.",
    image: mechanicalServiceImg,
    link: "/mechanical",
  },
];

const Home = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      {/* ==============================
          🏠 HERO SECTION
      ============================== */}
      <section
        id="home"
        className="relative w-full h-[80vh] md:h-screen overflow-hidden"
      >
        <img
          src={MechymaImage}
          alt="MECHYAM"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover brightness-95 contrast-110"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            MECHYAM AI DESIGN SOLUTIONS
          </h1>
          <p className="text-white max-w-2xl text-lg md:text-xl mb-6">
            Engineering precision meets AI innovation
          </p>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ==============================
          ⚙️ OUR SERVICES
      ============================== */}
      <section id="our-services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-2xl  md:text-3xl mx-auto text-sm md:text-base">
              At MECHYAM AI DESIGN SOLUTIONS (MADS), we specialize in delivering
              precise, scalable, and forward-thinking engineering solutions. As
              a young company with a seasoned leadership team boasting over 15
              years of deep industry expertise, we blend agility with experience
              to solve real-world challenges across engineering design,
              structural integrity, and advanced data analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">
                  {service.title}
                </h3>
                {service.subTitle && (
                  <h4 className="text-gray-600 font-medium mb-2 text-sm md:text-base">
                    {service.subTitle}
                  </h4>
                )}
                <p className="text-gray-500 mb-4 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition text-sm md:text-base"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 mt-12 md:mt-16"></div>
        </div>
      </section>

      {/* ==============================
          🌟 OUR VISION & MISSION
      ============================== */}
      <section id="vision-mission" className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <img
              src={chess}
              alt="Vision & Mission"
              className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-white"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
              OUR VISION & MISSION
            </h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Vision</h3>
              <p className="text-lg leading-relaxed">
                To shape engineering solutions that rise from complexity with
                clarity—anchored in integrity, guided by purpose, and built to
                last. We aim to bring structure and insight to what was once
                unformed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="text-lg leading-relaxed">
                To serve as skilled stewards of design—transforming raw
                potential into systems of strength, precision, and meaning.
                Through thoughtful engineering and principled collaboration, we
                build with intention and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
     💡 WE OFFER SECTION (Enhanced)
============================== */}
<section id="we-offer" className="py-20 bg-gray-50 font-sans">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-wide">
      WE OFFER
    </h2>

    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {[
          "Onsite vibration, strain, and load data collection",
          "Modal testing and operational deflection shape (ODS) analysis",
          "Signal processing in time and frequency domains",
          "Statistical evaluation, anomaly detection, and data trend modelling",
          "Custom dashboards and visualization tools for reporting",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 group transition transform hover:-translate-y-1"
          >
            <div className="flex-shrink-0 mt-1 text-blue-600 group-hover:scale-110 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* ==============================
     ⚡ CAPABILITIES SECTION (Distinct from We Offer)
============================== */}
<section id="capabilities" className="py-20 bg-gradient-to-r from-blue-600 to-blue-900 font-sans">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
      CAPABILITIES
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        "Linear and nonlinear Finite Element Analysis (FEA)",
        "Static, dynamic, vibration, and fatigue assessments",
        "Modal analysis and load path validation",
        "Code-compliant design verification",
        "Reports aligned with international standards and design codes",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white/10 rounded-xl p-4 md:p-6 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="flex-shrink-0 mt-1 text-white">
            <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full font-bold text-white">
              {index + 1}
            </span>
          </div>
          <p className="text-white text-lg leading-relaxed font-medium">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ==============================
     🛠️ TOOLS WE USE SECTION
============================== */}
<section id="tools" className="py-20 bg-gray-100 font-sans">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-wide">
      TOOLS WE USE
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
      {[
        "SP3D",
        "SPPID",
        "SPI",
        "AutoCAD",
        "ANSYS",
        "REVIT",
        "Hyper Mesh",
        "NASTRAN",
        "CATIA Analysis",
      ].map((tool, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-white rounded-full shadow-md text-gray-800 font-semibold text-sm md:text-base hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          {tool}
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full bg-gray-100 py-5">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 px-20 md:px-10 ml-10">
      What Sets Us Apart <span className="text-indigo-600">🚀</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
      <div className="flex items-start gap-4">
        <span className="text-2xl">🧰</span>
        <div>
          <h3 className="text-xl font-semibold mb-1">Startup Agility, Industry Depth</h3>
          <p className="text-gray-700">We move fast, backed by decades of engineering knowledge.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-2xl">🔧</span>
        <div>
          <h3 className="text-xl font-semibold mb-1">Tool Chain Expertise</h3>
          <p className="text-gray-700">
            SP3D, BIM, Revit, SPPID, SPI, SolidWorks, NX, AutoCAD, ANSYS, AutoCAD, and more.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-2xl">🔍</span>
        <div>
          <h3 className="text-xl font-semibold mb-1">End-to-End Insight</h3>
          <p className="text-gray-700">From concept design and analysis to real-world measurement and feedback.</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-2xl">🤝</span>
        <div>
          <h3 className="text-xl font-semibold mb-1">Client-Centric Approach</h3>
          <p className="text-gray-700">Flexible, collaborative, and always outcome-focused.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
