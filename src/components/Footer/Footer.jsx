import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center md:justify-start  gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-neutral-200 text-md text-center md:text-left max-w-xs mx-auto">
              Premium digital tools for creators, professionals, businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className=" text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 text-center md:text-left justify-center md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 justify-center md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">
              Resources
            </h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 justify-center md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-left ">
            <h3 className="text-red-400 font-semibold mb-4 text-lg">
              Social Links
            </h3>
            <div className="mt-8 flex text-center md:text-left justify-center md:justify-start gap-6 text-2xl text-neutral-200">
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaDiscord />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row text-neutral-200 items-center justify-between gap-4 text-sm">
          <div>
            © {new Date().getFullYear()} DigiTools. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
