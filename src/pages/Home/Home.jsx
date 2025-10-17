import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // ✅ Changed from react-scroll to react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🖼 Importing all images used in the page
import AboutImg from "../../assets/carousel-images/AboutUs.jpg";
import industriesImg from "../../assets/carousel-images/Industries.jpg";
import projectsImg from "../../assets/carousel-images/projects.jpg";
import steelStructureImg from "../../assets/carousel-images/steelstructure.jpg";
import mechanicalImg from "../../assets/carousel-images/Mechanical.jpg";
import rndImg from "../../assets/carousel-images/RnD.jpg";
import structuralImg from "../../assets/structural-steel-detailing.jpeg";
import steelDetailingImg from "../../assets/steel-detailing-services.webp";
import mechanicalServiceImg from "../../assets/Mechanical-Engineering-Services.jpeg";
import chess from "../../assets/chess.jpg";

// 🎞️ Carousel slides data
const slides = [
  { image: steelStructureImg, title: "Structural Steel", link: "/steel-structure" },
  { image: mechanicalImg, title: "Mechanical", link: "/mechanical" },
  { image: rndImg, title: "R&D", link: "/research-development" },
  { image: projectsImg, title: "Projects", link: "/projects" },
  { image: industriesImg, title: "Industries", link: "/industries" },
  { image: AboutImg, title: "About Us", link: "/about" },
];

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
  // 🧭 Slick carousel configuration
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ==============================
          🏠 HERO SECTION / IMAGE SLIDER
          ============================== */}
      <section id="home" className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[80vh] md:h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                loading="eager"
                decoding="async"
                className="
                  w-full
                  h-[80vh] md:h-screen
                  object-cover
                  brightness-90
                  contrast-110
                  transition-transform duration-700 ease-in-out
                  hover:scale-105
                "
              />

              {/* 📝 Overlay Text + Explore Button */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-end text-right pr-6 md:pr-12">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                {/* ✅ Updated Explore Button (uses react-router-dom Link) */}
                <Link
                  to={slide.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-medium cursor-pointer transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ==============================
          ⚙️ OUR SERVICES SECTION
          ============================== */}
      <section id="our-services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We offer a wide range of professional engineering services tailored
              to meet your project requirements and ensure excellence in every phase.
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
          🌟 OUR VISION & MISSION SECTION
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
                To deliver high-quality engineering solutions within the time schedule every time, 
                by exceeding customer expectations through an organizational culture that encourages 
                continuous improvement and results in repeat business.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="text-lg leading-relaxed">
                To evolve as a market leader by sustained delivery of world-class engineering services, 
                with an emphasis on high-quality and ethical standards, fortifying world-wide corporate alliances, 
                for progressive growth to leverage value to all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
