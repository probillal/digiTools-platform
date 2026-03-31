import React from "react";
import bannerImage from "../../assets/banner.png";
import bannerCircle from "../../assets/blue-circle.png";
import { BsCaretRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="min-h-162.5 flex justify-center text-center md:text-left items-center overflow-hidden py-5">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E9E7FF] px-4 py-1.5 rounded-full text-sm font-medium mx-auto lg:mx-0">
            <img src={bannerCircle} alt="" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
            Supercharge Your
            <br />
            <span className="text-black">Digital Workflow</span>
          </h1>

          <p className="text-lg text-zinc-600 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap justify-center md:justify-start  gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-50 transition">
              <BsCaretRight /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={bannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
