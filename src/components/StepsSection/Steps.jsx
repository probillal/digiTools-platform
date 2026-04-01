import React from "react";
import userImage from "../../assets/user.png";

const Steps = () => {
  return (
    <div className="bg-[#ebeff3] p-8">
      <div className="text-center py-10">
        <h2 className="text-3xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="max-w-xl mx-auto text-xs mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card-1 */}
        <div className="relative bg-white rounded-lg text-center p-4 space-y-3">
          <div className="bg-linear-to-r from-[#e5e3f3] to-[#e7d7f3] w-16 h-16 rounded-full flex justify-center items-center mx-auto">
            <img className="w-10" src={userImage} alt="User Image" />
          </div>
          <h2 className="text-xl font-bold">Create Account</h2>
          <p className="text-xs w-60 mx-auto">
            Sign up for free in seconds. No credit card required to get started.
          </p>
          <div className="absolute top-4 right-4 flex justify-center items-center text-white h-10 w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            01
          </div>
        </div>
        {/* card-2 */}
        <div className="relative bg-white rounded-lg text-center p-4 space-y-3">
          <div className="bg-linear-to-r from-[#e5e3f3] to-[#e7d7f3] w-16 h-16 rounded-full flex justify-center items-center mx-auto">
            <img className="w-10" src={userImage} alt="User Image" />
          </div>
          <h2 className="text-xl font-bold">Choose Products</h2>
          <p className="text-xs w-60 mx-auto">
            Browse our catalog and select the tools that fit your needs.
          </p>
          <div className="absolute top-4 right-4  flex justify-center items-center text-white h-10 w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            02
          </div>
        </div>
        {/* card-3 */}
        <div className="relative bg-white rounded-lg text-center p-4 space-y-3">
          <div className="bg-linear-to-r from-[#e5e3f3] to-[#e7d7f3] w-16 h-16 rounded-full flex justify-center items-center mx-auto">
            <img className="w-10" src={userImage} alt="User Image" />
          </div>
          <h2 className="text-xl font-bold">Start Creating</h2>
          <p className="text-xs w-60 mx-auto">
            Download and start using your premium tools immediately.
          </p>
          <div className="absolute top-4 right-4  flex justify-center items-center text-white h-10 w-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
