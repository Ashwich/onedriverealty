import React from 'react';
import bgimg from "../../../public/images/footer.png";

export default function footer() {
  return (
    <footer className="relative overflow-hidden mt-16" style={{
     backgroundImage: `url(${bgimg})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
      <div className="relative z-10 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Logo Section */}
          <div className="flex justify-center mb-12">
          <img src="/images/footerlogo.png" alt="Logo" className="w-52 h-48" />
          </div>

          <div className="speech-bubble absolute transform -translate-x-[-70%] -translate-y-18 rounded-[50%] bg-[#136207]  after:border-t-[18px] after:border-t-[#136207]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Board Members</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble  transform -translate-x-[-280%] -translate-y-16 rounded-[50%] bg-[#502D55]  after:border-t-[18px] after:border-t-[#502D55]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">Connect With Us</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble transform -translate-x-[180%] -translate-y-1  rounded-[50%] bg-[#3E1979] after:border-t-[18px] after:border-t-[#3E1979]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium  ">
            <div className="text-center">
              <div className="font-bold">Partners</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble transform -translate-x-[-3%] -translate-y-1   rounded-[50%] bg-[#004586]  after:border-t-[18px] after:border-t-[#004586]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium ">
            <div className="text-center">
              <div className="font-bold">We Support Gf</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble transform -translate-x-[-110%] -translate-y-1 rounded-[50%] bg-[#E73895] after:border-t-[18px] after:border-t-[#E73895]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium  ">
            <div className="text-center">
              <div className="font-bold">License Regulator</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble  transform -translate-x-[-80px] -translate-y-[-10px] rounded-[50%] bg-[#6A4928]  after:border-t-[18px] after:border-t-[#6A4928]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium ">
            <div className="text-center">
              <div className="font-bold">Terms & Conditions</div>
            </div>
          </button>
        </div>
        <div className="mb-25 speech-bubble transform -translate-x-[-110px] -translate-y-[-70px] rounded-[50%] bg-[#9B1C31]  after:border-t-[18px] after:border-t-[#9B1C31] ">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">2024 Copyright OneDriveRealty<br/> All Right Resrved</div>
            </div>
          </button>
        </div>
        <div className="speech-bubble  transform -translate-x-[-80px] -translate-y-[-10px] rounded-[50%] bg-[#7852A9] after:border-t-[18px] after:border-t-[#7852A9]">
          <button className="text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
            <div className="text-center">
              <div className="font-bold">obtain Real Estate</div>
            </div>
          </button>
        </div>
        </div>

        </div>
      
    </footer>
  );
}