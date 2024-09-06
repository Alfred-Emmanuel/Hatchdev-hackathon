import React from "react";

function Footer() {
  return (
    <div className="w-full py-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-auto">
        <div className="flex flex-col gap-5 flex-1 max-w-[300px] text-center md:text-left">
          <h1 className="font-bold text-lg">Company Info</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We dey hire</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 max-w-[300px] text-center md:text-left">
          <h1 className="font-bold text-lg">Features</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 max-w-[300px] text-center md:text-left">
          <h1 className="font-bold text-lg">Resources</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>iOS & Android</p>
            <p>Watch a demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 max-w-[300px] text-center md:text-left">
          <h1 className="font-bold text-lg">Support</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Live Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
