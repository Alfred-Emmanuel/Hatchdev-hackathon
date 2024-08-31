import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="w-full absolute top-0 left-0 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-60">
        <div className="text-2xl font-bold text-blue-950">Bandage.</div>

        {/* Center - Navigation Links */}
        <div className="nav-link flex space-x-8 items-center text-violet-600">
        <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <div className="relative flex items-center">
            <span>Shop</span>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="ml-1 focus:outline-none"
            >
              <FaChevronDown className="w-5 h-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 p-2 mt-60 rounded shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            Pages
          </a>
        </div>

        {/* Right Side - Request Demo */}
        <div>
        <a
          href="#"
          className=" text-black px-4 py-3 w-[154px] h-[42px]"
        >
          Login/ Register
        </a>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar;