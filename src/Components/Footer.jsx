import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  // Handle map click
  const handleMapClick = () => {
    const location = "Kashimpur,Gazipur Sadar, Gazipur, Bangladesh";
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
  };

  // Payment channel logos in order
  const paymentLogos = [
    { name: 'visa', file: 'visa.png' },
    { name: 'bkash', file: 'bkash.png' },
    { name: 'rocket', file: 'rocket.png' },
    { name: 'upay', file: 'upay.png' },
    { name: 'surecash', file: 'surecash.png' },
    { name: 'taptapsend', file: 'taptapsend.png' },
    { name: 'cellfin', file: 'cell.png' },
    { name: 'bank', file: 'bank.png' },
    { name: 'citybank', file: 'citybank.png' },
    { name: 'islami', file: 'islami.png' },
    { name: 'brac', file: 'brac.png' },
    { name: 'ucb', file: 'ucb.png' }
  ];

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section - Logo, Contact, Pages, Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="space-y-4 text-sm">
              <div 
                className="flex items-start gap-3 cursor-pointer hover:text-teal-600 transition"
                onClick={handleMapClick}
                title="Click to view on map"
              >
                <MdLocationOn className="text-xl mt-0.5 flex-shrink-0 text-gray-600" />
                <span className="leading-relaxed">Kashimpur, Gazipur Sadar, Gazipur, Bangladesh</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MdEmail className="text-xl flex-shrink-0 text-gray-600" />
                <a href="mailto:info@wiztecbd.com" className="hover:text-teal-600 transition">
                  info@apparelbd.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900">(+880) 1713-027875</h3>
            </div>
          </div>

         
          <div></div>

          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">PAGES</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-700 hover:text-teal-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-teal-600 transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-700 hover:text-teal-600 transition">
                  Our Products
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">INFORMATION</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#account" className="text-gray-700 hover:text-teal-600 transition">
                  My Account
                </a>
              </li>
              <li>
                <a href="#corporate" className="text-gray-700 hover:text-teal-600 transition">
                  Corporate Enquires
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-700 hover:text-teal-600 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Channels Section */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-6 text-gray-900">PAYMENT CHANNELS</h3>
          <div className="flex flex-wrap items-center gap-2">
            {paymentLogos.map((payment) => (
              <div 
               
                className="  flex items-center justify-center shadow-sm hover:shadow-md transition"
            
              >
                <img
                  src={`/assets/${payment.file}`}
                  alt={payment.name}
                  className=" object-contain"
                  onError={(e) => {
                    e.target.style.opacity = '0.3';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-600">
              Copyright © <span className="text-orange-500 font-semibold">ApparelBD</span> 2025. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-sky-500 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex gap-6 text-sm">
              <a href="#terms" className="text-gray-600 hover:text-teal-600 transition">
                Teams & Condition
              </a>
              <a href="#privacy" className="text-gray-600 hover:text-teal-600 transition">
                Privacy & Policy
              </a>
              <a href="#refund" className="text-gray-600 hover:text-teal-600 transition">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;