import React from 'react';
import { Play, MapPin, Mail, ArrowRight } from 'lucide-react';

const VideoBanner = ({ data }) => {
  const baseUrl = "http://localhost:1337";
  if (!data) return null;

  const title = data.Title || "High-Quality Garments. Ethically Made.";
  const subTitle = data.SubTitle || "Elevate Your Brand With";
  const description = data.Description || "";
  const btn1 = data.Button1Text || "Contact Us";
  const btn2 = data.Button2Text || "Learn More";
  const videoUrl = data.BannerVideo?.url ? `${baseUrl}${data.BannerVideo.url}` : "";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      
      {/* 1. Background Video */}
      {videoUrl && (
        <video autoPlay loop muted playsInline key={videoUrl} className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70">
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* 2. Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pb-32">
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg md:text-xl mb-4">{subTitle}</p>
          <h1 className="text-white text-4xl md:text-7xl font-bold leading-[1.1] mb-8">{title}</h1>
          <p className="text-gray-200 text-base md:text-lg mb-10 max-w-xl opacity-90">{description}</p>
          <div className="flex gap-4">
            <button className="bg-[#f15a24] text-white px-8 py-3 font-semibold hover:bg-[#d44d1e] transition-all">{btn1}</button>
            <button className="border border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all">{btn2}</button>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
           <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-white/10 scale-125"></div>
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10">
                <Play className="text-[#f15a24] fill-[#f15a24] ml-1" size={24} />
              </button>
           </div>
        </div>
      </div>

      {/* 3. FIXED BOTTOM SECTION (MATCHING THE IMAGE) */}
      <div className="absolute bottom-0 left-0 w-full z-30 flex items-end">
        
        {/* Left Side: White Contact Bar */}
        <div className="bg-white flex-1 h-32 flex items-center px-10 lg:px-24 gap-12 shadow-2xl">
          <div className="flex items-center gap-4">
            <MapPin className="text-[#00b2b2]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-[#00b2b2] font-bold text-sm leading-none mb-1">Location</h4>
              <p className="text-gray-400 text-xs font-medium">Kashimpur, Gazipur Sadar / Gazipur</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#00b2b2]" size={32} strokeWidth={1.5} />
            <div>
              <h4 className="text-[#00b2b2] font-bold text-sm leading-none mb-1">Email</h4>
              <p className="text-gray-400 text-xs font-medium">compliance@danysknitwear.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Colored Blocks */}
        <div className="flex ">
          {/* 1st Block */}
          <div className="bg-[#f15a24] text-white p-10 w-[280px] lg:w-[300px] h-52 flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-4">Quality Product</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold group">
              Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 2nd  Block */}
          <div className="bg-[#00b2b2] text-white p-10 w-[280px] lg:w-[300px] h-52 flex flex-col justify-center">
            <h3 className="text-xl opacity-90 mb-2 font-medium">Project Overview</h3>
            <h2 className="text-2xl font-medium mb-6 leading-none tracking-tight">35 Millions</h2>
            <button className="flex items-center gap-2 text-sm font-bold group">
              Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;