import React, { useState } from "react";
import {
  Droplet,
  Scissors,
  MousePointer2,
  ScissorsLineDashed,
  Wind,
  ClipboardCheck,
  Package,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    { id: 1, icon: Droplet, title: "Dyeing", desc: "Adding color to biodegradable materials" },
    { id: 2, icon: Scissors, title: "Cutting", desc: "Eco-friendly clothing items for all shapes and sizes" },
    { id: 3, icon: MousePointer2, title: "Sewing", desc: "Vouching for the ultimate sturdiness and durability of the fabric" },
    { id: 4, icon: ScissorsLineDashed, title: "Snipping of thread", desc: "A neat edge, a soft and smooth finish" },
    { id: 5, icon: Wind, title: "Ironing", desc: "Ironing it before shipping" },
    { id: 6, icon: ClipboardCheck, title: "Checking", desc: "Ensuring supreme quality standards are met" },
    { id: 7, icon: Package, title: "Package", desc: "Folding and packing with the utmost care" },
  ];

  return (
    <div className="relative py-16 px-6 md:px-10 font-sans overflow-hidden">
      {/* Half background - Adjusted height for responsiveness */}
      <div className="absolute inset-0 bg-[#CDF0EE] h-[600px] md:h-[750px] lg:h-[800px] top-0 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO SECTION */}
        <div className="relative mb-20 lg:mb-32 min-h-fit lg:min-h-[480px] flex flex-col lg:flex-row items-center">

          {/* JAGGED BG SHAPE */}
          <div className="absolute top-0 left-[-5%] w-[110%] md:w-[80%] lg:w-[65%] opacity-40 lg:opacity-100 z-0 pointer-events-none">
            <img
              src="/assets/image.png"
              alt="Background shape"
              className="w-full h-auto object-contain"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          {/* HERO TEXT CONTENT */}
          <div className="relative z-10 w-full lg:w-[60%] text-center lg:text-left pt-10 lg:pt-0 lg:pl-16">
            <div className="max-w-2xl mx-auto lg:-mt-28">
              <span className="inline-block px-4 py-1.5 border border-[#07B4B0] text-[#07B4B0] rounded-full text-xs font-bold mb-6 bg-white shadow-sm">
                Process
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#23384e] mb-6 leading-tight">
                Do You Want Custom Project <br className="hidden md:block" /> With Textilery? Contact Us
              </h1>

              <p className="text-[#6c7a87] text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                At Zaheen Knitwear Ltd., we pride ourselves on being your reliable
                partner for apparel production. Our commitment to ethical
                manufacturing ensures integrity.
              </p>

              <button className="px-8 py-3 border-2 border-[#07B4B0] text-[#07B4B0] rounded-md text-sm font-black hover:bg-[#07B4B0] hover:text-white transition-all duration-300 uppercase tracking-wider">
                Learn More
              </button>
            </div>
          </div>

          {/* CLOTHES RACK IMAGE - Hidden on mobile/tablet for clean layout */}
          <div className="absolute top-0 right-[-20px] w-[45%] hidden lg:block z-20">
            <img
              src="/assets/cloths.png"
              alt="Hanging clothes rack"
              className="w-full h-auto drop-shadow-2xl"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>

        {/* PROCESS CARDS GRID */}
        <div className="flex flex-col gap-8 md:gap-12 pt-10">
          
          {/* Top Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {features.slice(0, 4).map((f) => (
              <ProcessCard key={f.id} {...f} />
            ))}
          </div>

          {/* Bottom Row: 3 Cards (Centered on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-10 md:gap-8">
            {features.slice(4).map((f) => (
              <div key={f.id} className="w-full lg:w-[calc(25%-24px)] shadow-lg">
                <ProcessCard {...f} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const ProcessCard = ({ id, icon: Icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] cursor-pointer group min-h-[260px] transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* FILL ANIMATION BG */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-[#07B4B0] transition-all duration-500 ease-in-out z-0 rounded-2xl ${
          isHovered ? "h-full" : "h-0"
        }`}
      />

      {/* NUMBER BADGE */}
      <div
        className={`absolute -top-5 left-1/2 -translate-x-1/2
        w-11 h-11 rounded-full flex items-center justify-center
        text-sm font-black shadow-md z-20 transition-all duration-300 border-2
        ${
          isHovered
            ? "bg-[#EE4B21] text-white border-white scale-110"
            : "bg-white text-gray-500 border-gray-100"
        }`}
      >
        {id < 10 ? `0${id}` : id}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 pt-12 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
        <div className={`mb-6 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#EE4B21]"}`}>
          <Icon size={48} strokeWidth={1.5} />
        </div>

        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#23384e]"}`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed transition-colors duration-300 ${isHovered ? "text-white/90" : "text-[#6c7a87]"}`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;