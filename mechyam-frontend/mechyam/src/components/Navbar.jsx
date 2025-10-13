import React from "react";
import { Link } from "react-router-dom";
import ContactButton from "./ContactButton";
import EmailButton from "./EmailButton";
import CareerButton from "./CareerButton";

import logo from "../assets/Mechyam.jpg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-10 py-4 sticky top-0 z-50">
      {/* Left: Logo + Company Name */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src={logo} alt="Mechyam Logo" className="h-20 w-20" />
        </Link>
        <span className="text-2xl font-bold text-blue-900">Mechyam</span>
      </div>

      {/* Center Navigation Menu */}
      <ul className="flex space-x-8 text-gray-800 font-medium">
        {/* Steel Structure Dropdown */}
        <li className="relative group">
          <Link to="/steel-structure" className="hover:text-blue-600 transition">
            Structural Steel ▾
          </Link>

          <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link
                  to="/structural-engineering"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Structural Engineering Services
                </Link>
              </li>
              <li>
                <Link
                  to="/structuralsteeldetailingservices"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Structural Steel Detailing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/bridge-detailing"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bridge Detailing Services
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Mechanical Dropdown */}
        <li className="relative group">
          <Link to="/mechanical" className="hover:text-blue-600 transition">
            Mechanical ▾
          </Link>

          <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link
                  to="/product-design-development"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Product Design & Development
                </Link>
              </li>
              <li>
                <Link
                  to="/computer-aided-engineering"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Computer Aided Engineering (CAE)
                </Link>
              </li>
              <li>
                <Link
                  to="/embedded-design"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Embedded Design
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Industries Dropdown */}
        <li className="relative group">
          <Link to="/industries" className="hover:text-blue-600 transition">
            Industries ▾
          </Link>

          <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link
                  to="/contracting"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contracting
                </Link>
              </li>
              <li>
                <Link
                  to="/oil-gas"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link
                  to="/transportation"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Transportation / Rail Industry
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* ✅ NEW R&D Dropdown */}
        <li className="relative group">
         
            R&D ▾
          

          <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link
                  to="/structural-rnd"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Structural Detailing R&D
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanical-rnd"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mechanical Engineering R&D
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Projects */}
        <li>
          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative group">
          <Link to="/about" className="hover:text-blue-600 transition">
            About ▾
          </Link>

          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
            <ul className="py-2">
              <li>
                <Link
                  to="/company"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex space-x-3">
        <ContactButton />
        <EmailButton />
        <CareerButton />
      </div>
    </nav>
  );
};

export default Navbar;
