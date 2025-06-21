import React, { useState } from "react";
import bgimg from "../../../public/images/bg.png";
import "./SpeechBubbleButton.css";
import { ShoppingCart } from "lucide-react";
import Footer from "../components/footer";

export default function OneDriveRealty() {
  const [isOpen, setIsOpen] = useState(false);

  // Add the missing toggleMenu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    // Row 1
    { text: "Agent 100% Commission", color: "#6A3AB7" },
    { text: "Why OneDrive Realty", color: "#6A3AB7" },
    { text: "Halal Funding", color: "#6A3AB7" },
    { text: "Bull 2 Suit", color: "#6A3AB7" },
    { text: "List Your Property", color: "#6A3AB7" },
    { text: "API-LEADS-DFXL", color: "#6A3AB7" },
    { text: "1031 Exchange", color: "#6A3AB7" },
    { text: "B/E BLOGS", color: "#6A3AB7" },
    { text: "CAP-ROR-REO", color: "#6A3AB7" },

    // Row 2
    { text: "Full Sponsorship", color: "#3E1979" },
    { text: "Plan 1", color: "#3E1979" },
    { text: "Residential", color: "#3E1979" },
    { text: "Envelope Structures", color: "#3E1979" },
    { text: "Residential", color: "#3E1979" },
    { text: "Property Owners", color: "#3E1979" },
    { text: "Residential", color: "#3E1979" },
    { text: "Emerging Markets", color: "#3E1979" },
    { text: "Capitalization Rate", color: "#3E1979" },

    // Row 3
    { text: "Referral Fees", color: "#7852A9" },
    { text: "Plan 2", color: "#7852A9" },
    { text: "Multi-family", color: "#7852A9" },
    { text: "Multi-family", color: "#7852A9" },
    { text: "Multi-Family", color: "#7852A9" },
    { text: "Multi-Family", color: "#7852A9" },
    { text: "Multi-Family", color: "#7852A9" },
    { text: "Global", color: "#7852A9" },
    { text: "Rate Of Return Rate", color: "#7852A9" },

    // Row 4
    { text: "Park Your License", color: "#EA3855" },
    { text: "CYPS Patent", color: "#EA3855" },
    { text: "Commercial", color: "#EA3855" },
    { text: "Residential", color: "#EA3855" },
    { text: "Commercial", color: "#EA3855" },
    { text: "Residential", color: "#EA3855" },
    { text: "Commercial", color: "#EA3855" },
    { text: "National", color: "#EA3855" },
    { text: "Real Estate Owned", color: "#EA3855" },

    // Row 5
    { text: "Marketing Fees", color: "#9B1C31" },
    { text: "Membership", color: "#9B1C31" },
    { text: "Vacant Land", color: "#9B1C31" },
    { text: "Commercial", color: "#9B1C31" },
    { text: "Vacant Lots", color: "#9B1C31" },
    { text: "Commercial", color: "#9B1C31" },
    { text: "Vacant Land", color: "#9B1C31" },
    { text: "Regional", color: "#9B1C31" },
    { text: "Residential", color: "#9B1C31" },

    // Row 6
    { text: "CJA Training", color: "#E73895" },
    { text: "Partners", color: "#E73895" },
    { text: "Dairy Farming", color: "#E73895" },
    { text: "Dairy Farming", color: "#E73895" },
    { text: "Vacant Acreage", color: "#E73895" },
    { text: "Business", color: "#E73895" },
    { text: "Farming", color: "#E73895" },
    { text: "Residential", color: "#E73895" },
    { text: "Multi-Famil", color: "#E73895" },

    // Row 7
    { text: "Broker Mentors", color: "#CB2C92" },
    { text: "Our Listings", color: "#CB2C92" },
    { text: "Agriculture Land", color: "#CB2C92" },
    { text: "Log Homes Kit", color: "#CB2C92" },
    { text: "Business", color: "#CB2C92" },
    { text: "Vcant lots", color: "#CB2C92" },
    { text: "Vested Equity", color: "#CB2C92" },
    { text: "Commercial", color: "#CB2C92" },
    { text: "Commercial", color: "#CB2C92" },

    // Row 8
    { text: "Build 2 Suite", color: "#670E10" },
    { text: "Search Four Listing", color: "#670E10" },
    { text: "Development", color: "#670E10" },
    { text: "CYPS List 2 text", color: "#670E10" },
    { text: "SMS-MMS BLAST", color: "#670E10" },
    { text: "Vacant Acreage", color: "#670E10" },
    { text: "REIT-TRADE", color: "#670E10" },
    { text: "Financing", color: "#670E10" },
    { text: "Vacant Land", color: "#670E10" },

    // Row 9
    { text: "Build 2 Suite", color: "#B54B73" },
    { text: "Search Four Listing", color: "#B54B73" },
    { text: "Development", color: "#B54B73" },
    { text: "CYPS List 2 text", color: "#B54B73" },
    { text: "SMS-MMS BLAST", color: "#B54B73" },
    { text: "Vacant Acreage", color: "#B54B73" },
    { text: "REIT-TRADE", color: "#B54B73" },
    { text: "Financing", color: "#B54B73" },
    { text: "Vacant Land", color: "#B54B73" },

    // Row 10
    { text: "Build 2 Suite", color: "#3E1979" },
    { text: "Search Four Listing", color: "#3E1979" },
    { text: "Development", color: "#3E1979" },
    { text: "CYPS List 2 text", color: "#3E1979" },
    { text: "SMS-MMS BLAST", color: "#3E1979" },
    { text: "Vacant Acreage", color: "#3E1979" },
    { text: "REIT-TRADE", color: "#3E1979" },
    { text: "Financing", color: "#3E1979" },
    { text: "Vacant Land", color: "#3E1979" },

    // Row 11
    { text: "Build 2 Suite", color: "#D857B5" },
    { text: "Search Four Listing", color: "#D857B5" },
    { text: "Development", color: "#D857B5" },
    { text: "CYPS List 2 text", color: "#D857B5" },
    { text: "SMS-MMS BLAST", color: "#D857B5" },
    { text: "Vacant Acreage", color: "#D857B5" },
    { text: "REIT-TRADE", color: "#D857B5" },
    { text: "Financing", color: "#D857B5" },
    { text: "Vacant Land", color: "#D857B5" },
  ];

  return (
    <>
    <div
      className=" w-full relative"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover", // makes the full image fit without cropping
        backgroundRepeat: "no-repeat", // prevents tiling
        backgroundPosition: "center",

        // centers the image
      }}
    >
       <img className="absolute h-[69%] w-[35%] top-2 right-115" src="/images/onedrivelogo.png" alt="" />
      <div className="relative w-screen h-screen bg-no-repeat bg-center">
        <div className="absolute top-0 right-0 flex justify-end mr-4 text-white text-lg md:text-2xl font-bold img">
        <img className="mr-9 w-[70%] h-[70%]" src="/images/watermark.png" alt="" />
       
        </div>
        {/* Header */}
        <header className="absolute top-30 left-0 right-0 z-20 flex justify-end items-center p-4 ">
          {/* Arabic Text - Right Side */}
          <ShoppingCart className="h-10 w-10 text-white mr-10" />
          {/* Hamburger Button - Left Side */}
          <button
            onClick={toggleMenu}
            className="p-2 mr-9 bg-[#2B61DF] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-white my-1 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>

          {/* Menu Overlay */}
          <div
            className={`fixed top-50 left-4 right-4 rounded-[60px] z-40 transition-all duration-500 bg-[url('/images/footer.png')] bg-cover bg-center ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {/* Menu Container with Custom Dimensions and Border */}
            <div className="h-110 w-full border-7 rounded-[60px] border-black shadow-2xl overflow-hidden ">

              {/* Menu Content */}
              <div className="w-full p-6 h-full ">
                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3 mb-10 ">
                  {menuItems.map((item, index) => (
                 <button
                 key={index}
                 /* 1️⃣  relative = anchor for the tail
                    2️⃣  after:… classes lay out the triangle
                    3️⃣  rounded-full instead of 50 % (same thing, shorter)
                 */
                 className={`
                   relative speech-bubble            
                   rounded-[50%] text-white text-xs font-semibold   
                   hover:scale-105 transition-transform duration-200
                   shadow-lg hover:shadow-xl whitespace-nowrap
                   after:content-[''] after:absolute after:left-1/8 after:-translate-x-1/6
                   after:-top-[-20px] after:w-0px after:h-0px
                   after:border-x-[8px] after:border-x-transparent
                   after:border-t-[12px] after:border-t-[var(--bubble-col)]
                 `}
                
                 style={{
                   '--bubble-col': item.color,
                   backgroundColor: item.color,     
                   padding: '4px 40px',
                   fontSize: '12px',
                 }}
                 onClick={() => console.log(`Clicked: ${item.text}`)}
               >
                 {item.text}
               </button>
               
                  ))}
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
        <div className="speech-bubble absolute top-70 right-[-70px] transform -translate-x-1/2 -translate-y-16 rounded-[50%] bg-[#B54B73]  after:border-t-[18px] after:border-t-[#B54B73]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">CAP-ROR-REO</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble absolute  top-85 right-22 rounded-[50%] bg-[#670E10] after:border-t-[18px] after:border-t-[#670E10]">
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
        <div className="speech-bubble absolute top-90 left-29  rounded-[50%] bg-[#7852A9]  after:border-t-[18px] after:border-t-[#7852A9]">
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
        <div className="speech-bubble absolute bottom-39 left-160 rounded-[50%] bg-[#6A4928] after:border-t-[18px] after:border-t-[#6A4928]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Agent 100% Commission</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Red Dot */}
      <div className="absolute bottom-20 md:bottom-20 left-[52%] transform -translate-x-1/2 w-10 h-10  bg-red-500 rounded-full border-2 border-[#00FF00] "></div>
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
   <Footer/>
    </>
  );
}