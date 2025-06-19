import React, { useState } from "react";
import bgimg from "../../../public/images/bg.png";
import './SpeechBubbleButton.css';
import { ShoppingCart } from "lucide-react";
export default function OneDriveRealty() {

  const [isOpen, setIsOpen] = useState(false);

  // Add the missing toggleMenu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    // Row 1
    { text: "Agent 100% Commission", color: "bg-blue-500" },
    { text: "Why OneDrive Realty", color: "bg-blue-600" },
    { text: "Halal Funding", color: "bg-green-500" },
    { text: "Bull 2 Suit", color: "bg-red-500" },
    { text: "List Your Property", color: "bg-teal-500" },
    { text: "API-LEADS-DFXL", color: "bg-purple-500" },
    { text: "1031 Exchange", color: "bg-orange-500" },
    { text: "B/E BLOGS", color: "bg-red-600" },
    { text: "CAP-ROR-REO", color: "bg-indigo-500" },

    // Row 2
    { text: "Full Sponsorship", color: "bg-blue-400" },
    { text: "Plan 1", color: "bg-blue-700" },
    { text: "Residential", color: "bg-green-600" },
    { text: "Envelope Structures", color: "bg-teal-600" },
    { text: "Residential", color: "bg-blue-500" },
    { text: "Property Owners", color: "bg-purple-600" },
    { text: "Residential", color: "bg-green-500" },
    { text: "Emerging Markets", color: "bg-orange-600" },
    { text: "Capitalization Rate", color: "bg-red-500" },

    // Row 3
    { text: "Referral Fees", color: "bg-purple-400" },
    { text: "Plan 2", color: "bg-blue-800" },
    { text: "Multi-family", color: "bg-green-700" },
    { text: "Multi-family", color: "bg-teal-700" },
    { text: "Multi-Family", color: "bg-blue-600" },
    { text: "Multi-Family", color: "bg-purple-700" },
    { text: "Multi-Family", color: "bg-green-600" },
    { text: "Global", color: "bg-orange-700" },
    { text: "Rate Of Return Rate", color: "bg-red-600" },

    // Row 4
    { text: "Park Your License", color: "bg-yellow-600" },
    { text: "CYPS Patent", color: "bg-blue-900" },
    { text: "Commercial", color: "bg-green-800" },
    { text: "Residential", color: "bg-teal-800" },
    { text: "Commercial", color: "bg-blue-700" },
    { text: "Residential", color: "bg-purple-800" },
    { text: "Commercial", color: "bg-green-700" },
    { text: "National", color: "bg-orange-800" },
    { text: "Real Estate Owned", color: "bg-red-700" },

    // Row 5
    { text: "Marketing Fees", color: "bg-red-400" },
    { text: "Membership", color: "bg-blue-500" },
    { text: "Vacant Land", color: "bg-green-400" },
    { text: "Commercial", color: "bg-teal-500" },
    { text: "Vacant Lots", color: "bg-blue-400" },
    { text: "Commercial", color: "bg-purple-500" },
    { text: "Vacant Land", color: "bg-green-400" },
    { text: "Regional", color: "bg-orange-500" },
    { text: "Residential", color: "bg-red-400" },

    // Row 6
    { text: "CJA Training", color: "bg-green-500" },
    { text: "Partners", color: "bg-blue-600" },
    { text: "Dairy Farming", color: "bg-green-500" },
    { text: "Dairy Farming", color: "bg-teal-600" },
    { text: "Vacant Acreage", color: "bg-blue-500" },
    { text: "Business", color: "bg-purple-600" },
    { text: "Farming", color: "bg-green-500" },
    { text: "Residential", color: "bg-orange-600" },
    { text: "Multi-Famil", color: "bg-red-500" },

    // Row 7
    { text: "Broker Mentors", color: "bg-purple-500" },
    { text: "Our Listings", color: "bg-blue-700" },
    { text: "Agriculture Land", color: "bg-green-600" },
    { text: "Log Homes Kit", color: "bg-teal-700" },
    { text: "Business", color: "bg-blue-600" },
    { text: "Vcant lots", color: "bg-purple-700" },
    { text: "Vested Equity", color: "bg-green-600" },
    { text: "Commercial", color: "bg-orange-700" },
    { text: "Commercial", color: "bg-red-600" },

    // Row 8
    { text: "Build 2 Suite", color: "bg-red-500" },
    { text: "Search Four Listing", color: "bg-blue-800" },
    { text: "Development", color: "bg-green-700" },
    { text: "CYPS List 2 text", color: "bg-teal-800" },
    { text: "SMS-MMS BLAST", color: "bg-blue-700" },
    { text: "Vacant Acreage", color: "bg-purple-800" },
    { text: "REIT-TRADE", color: "bg-green-700" },
    { text: "Financing", color: "bg-orange-800" },
    { text: "Vacant Land", color: "bg-red-700" },
  ];

  return (
    <div className=" w-full relative"
    style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: "cover",          // makes the full image fit without cropping
      backgroundRepeat: "no-repeat",      // prevents tiling
      backgroundPosition: "center", 

         // centers the image
    }}
  >
  
    
    <div
  className="relative w-screen h-screen bg-no-repeat bg-center"

>
<div className="absolute top-0 right-0 flex justify-end mr-4 text-white text-lg md:text-2xl font-bold img">
<img className="w-[50%] h-[50%]" src="/images/watermark.png" alt="" /></div>
        {/* Header */}
        <header className="absolute top-30 left-0 right-0 z-20 flex justify-end items-center p-4 ">
  {/* Arabic Text - Right Side */}
  <ShoppingCart className="h-10 w-10 text-white mr-7" />
  {/* Hamburger Button - Left Side */}
  <button
    onClick={toggleMenu}
    className="p-2 bg-[#2B61DF] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50"
  >
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={`block w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-1' : ''
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-white my-1 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-1' : ''
        }`}
      />
    </div>
  </button>

  {/* Menu Overlay */}
  <div
    className={`fixed top-50 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
  >
   
    {/* Menu Container with Custom Dimensions and Border */}
    <div className="h-106 w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-lg border-4 border-black shadow-2xl overflow-hidden">
      {/* Menu Content */}
      <div className="w-full p-6 h-full overflow-y-auto">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3 mb-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`${item.color} text-white px-4 py-3 rounded-full text-sm font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap`}
              onClick={() => console.log(`Clicked: ${item.text}`)}
            >
              {item.text}
            </button>
          ))}
        </div>
 

        {/* Close Button */}
        <div className="flex justify-center">
          <button
            onClick={toggleMenu}
            className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
        <div className="speech-bubble absolute top-70 left-50 transform -translate-x-1/2 -translate-y-16 rounded-[50%] bg-[#3E1979]  after:border-t-[18px] after:border-t-[#3E1979]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Why One Drive Realty</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute top-70 right-[-90px] transform -translate-x-1/2 -translate-y-16 rounded-[50%] bg-[#B54B73]  after:border-t-[18px] after:border-t-[#B54B73]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">CAP-ROR-REO</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute  top-85 right-20 rounded-[50%] bg-[#670E10] after:border-t-[18px] after:border-t-[#670E10]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium  ">
            <div className="text-center">
              <div className="font-bold">R/E BLOGS</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute top-120 right-40 rounded-[50%] bg-[#CA2C92]  after:border-t-[18px] after:border-t-[#CA2C92]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium ">
            <div className="text-center">
              <div className="font-bold">1031 Exchange</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute top-155 right-80 rounded-[50%] bg-[#E73895] after:border-t-[18px] after:border-t-[#E73895]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium  ">
            <div className="text-center">
              <div className="font-bold">API-LEADS-DFLX</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute top-90 left-35  rounded-[50%] bg-[#7852A9]  after:border-t-[18px] after:border-t-[#7852A9]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium ">
            <div className="text-center">
              <div className="font-bold">Halal Funding</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute  top-130 left-60 transform -translate-x-4 -translate-y-1/2 rounded-[50%] bg-[#D6991C]  after:border-t-[18px] after:border-t-[#D6991C] ">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Build 2 Suit</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute top-155 left-90 rounded-[50%] bg-[#9B1C31] after:border-t-[18px] after:border-t-[#9B1C31]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">List Your Property</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute bottom-40 left-155 rounded-[50%] bg-[#6A4928] after:border-t-[18px] after:border-t-[#6A4928]" >
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Agent 100% Commission</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Red Dot */}
      <div className="absolute bottom-20 md:bottom-20 left-1/2 transform -translate-x-1/2 w-10 h-10  bg-red-500 rounded-full border-2 border-[#00FF00] "></div>
      <style jsx>{`
        .arabic-text {
          font-family: "Amiri", "Noto Naskh Arabic", serif;
          direction: rtl;
          text-align: right;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .arabic-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}