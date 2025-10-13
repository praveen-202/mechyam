import React from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutImg from "../../assets/About.jpg";
import industriesImg from "../../assets/Industries.jpg";
import projectsImg from "../../assets/Projects.jpg";
import steelStructureImg from "../../assets/Steel Structure.jpg";
import mechanicalImg from "../../assets/Mechanical.jpg";
import rndImg from "../../assets/RnD.jpg";

import structuralImg from "../../assets/structural-steel-detailing.jpeg";
import steelDetailingImg from "../../assets/steel-detailing-services.webp";
import mechanicalServiceImg from "../../assets/Mechanical-Engineering-Services.jpeg";

const slides = [
  { image: steelStructureImg, title: "Steel Structure", link: "steel-structure" },
  { image: mechanicalImg, title: "Mechanical", link: "mechanical-industries" },
  { image: rndImg, title: "R&D", link: "research-development" },
  { image: projectsImg, title: "Projects", link: "projects" },
  { image: industriesImg, title: "Industries", link: "mechanical-industries" },
  { image: AboutImg, title: "About", link: "about" },
];

const services = [
  {
    title: "Structural Steel Detailing",
    subTitle: "Structural Engineering Services",
    description:
      "We provide precise structural steel detailing to ensure accurate fabrication and seamless construction management.",
    image: structuralImg,
    link: "#",
  },
  {
    title: "Steel Detailing Services",
    subTitle: "Structural Detailing Solutions",
    description:
      "Our steel detailing services offer comprehensive solutions for structural projects, ensuring high accuracy and quality.",
    image: steelDetailingImg,
    link: "#",
  },
  {
    title: "Mechanical Engineering",
    subTitle: "Mechanical Design & Analysis",
    description:
      "Our mechanical engineering solutions cover design, analysis, and optimization of machinery and systems for efficiency and reliability.",
    image: mechanicalServiceImg,
    link: "#",
  },
];

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div>
      {/* Carousel / Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
  <Slider {...sliderSettings}>
    {slides.map((slide, index) => (
      <div key={index} className="relative w-full h-screen">
        {/* Image fills entire screen */}
        <img
          src={slide.image}
          alt={slide.title}
          loading="eager"
          decoding="async"
          className="
            w-full
            h-screen
            object-cover
            transition-transform
            duration-700
            ease-in-out
            hover:scale-105
            brightness-90
            contrast-110
          "
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-end text-right pr-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {slide.title}
          </h1>
          <Link
            to={slide.link}
            smooth={true}
            duration={700}
            offset={-80}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium cursor-pointer transition"
          >
            Explore
          </Link>
        </div>
      </div>
    ))}
  </Slider>
</section>

      {/* Our Services Section */}
      <section id="our-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional engineering services tailored to meet your project requirements and ensure excellence in every phase.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  {service.subTitle && (
                    <h4 className="text-gray-600 font-medium mb-2">{service.subTitle}</h4>
                  )}
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mt-16"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
