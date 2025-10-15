import React from "react";

const Footer = () => {
  const services = {
    "STRUCTURAL STEEL": [
      "Structural Engineering Services",
      "Structural Steel Detailing Services", 
      "Bridge Detailing Services"
    ],
    "MECHANICAL": [
      "Product Design & Development",
      "Computer Aided Engineering (CAE) Service",
      "Value Analysis & Value Engineering (VAVE)",
      "Engineering Documentation & Standardization",
      "CAD Data Migration Services",
      "Special Purpose Machine Design",
      "Electrical Engineering Services",
      "Embedded Design",
      "Technical Publication Services",
      "Engineering Consulting Services",
      "Marine Engineering",
      "Industrial Internet Of Things (IIOT)",
      "Manufacturing Services",
      "CAD Design Automation"
    ],
    "INDUSTRIES": [
      "Contracting",
      "Transportation/Rail Industry",
      "Oil & Gas",
      "Energy",
      "Industrial",
      "Aviation",
      "Semiconductor",
      "Consumer Electronics",
      "Food Processing Equipment",
      "Construction & Material Handling",
      "Automotive",
      "Packaging"
    ],
    "GENERAL": ["Home", "About", "Projects", "Contact", "News & Events"],
    "CAREERS": []
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-4">
            {/* Company Logo/Name */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white">LDCSS</h1>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
              
              {/* Global Headquarters */}
              <div className="mb-6">
                <p className="font-semibold text-gray-300 mb-2">GLOBAL HEADQUARTER</p>
                <p className="text-gray-400 mb-1">Mechyam Technical Services Inc.</p>
                <p className="text-gray-400 mb-1">1875 Big Timber Road Suite:</p>
                <p className="text-gray-400 mb-1">A (East Entrance), Elgin, IL 60123.</p>
                <p className="text-gray-400 mb-1">Tel. (630)539-8200 Extn.5204</p>
                <p className="text-gray-400 mb-1">Fax. (630)582-3700</p>
                <p className="text-gray-400 mb-4">E-mail: sales@mechyam.com</p>
              </div>

              {/* Corporate Office India */}
              <div className="mb-6">
                <p className="font-semibold text-gray-300 mb-2">CORPORATE OFFICE (INDIA)</p>
                <p className="text-gray-400 mb-1">Mechyam Technical Services Pvt. Ltd.</p>
                <p className="text-gray-400 mb-1">#8-2-700/A, 3rd Floor, Shiv Shakthi Towers,</p>
                <p className="text-gray-400 mb-1">Road No.12, Banjara Hills, Hyderabad – 500034</p>
                <p className="text-gray-400 mb-1">Tel. (630)539-8200 Extn.5204</p>
                <p className="text-gray-400 mb-1">Fax. (630)582-3700</p>
                <p className="text-gray-400 mb-4">E-mail: sales@mechyam.com</p>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-gray-300 mb-2">SOCIAL</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-300">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    {items.length === 0 && (
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                        >
                          View Opportunities
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright 2024 Mechyam Technical Services Pvt. Ltd | All Rights Reserved
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">TERMS OF USE</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;