import React from "react";

function Footer() {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-lg">Company Info</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We dey hire</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-lg">Features</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-lg">Resources</h1>
          <div className="flex flex-col text-gray-500 text-sm font-semibold gap-3">
            <p>iOS & Android</p>
            <p>Watch a demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
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
