import React from "react";
import { BsCaretRight } from "react-icons/bs";

const WorkFlowSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 mt-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white">
          Ready to Transform Your Workflow?
        </h1>

        <p className="text-xs text-white max-w-md mx-auto ">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="bg-white rounded-full">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent px-6 py-2 rounded-full font-medium cursor-pointer btn-block">
              Explore Products
            </button>
          </div>
          <button className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded-full font-medium cursor-pointer">
            <BsCaretRight /> Watch Demo
          </button>
        </div>
        <p className="text-xs text-zinc-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default WorkFlowSection;
