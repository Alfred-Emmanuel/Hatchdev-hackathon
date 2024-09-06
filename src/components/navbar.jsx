import { useState, useEffect } from 'react';
import { BsList } from 'react-icons/bs';
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthContext'; // Use the AuthContext
import { AnimatePresence, motion } from "framer-motion";

// Active className function
const activeClassName = "text-blue-950 font-bold";
const activeStyleCallback = ({ isActive }) => (isActive ? activeClassName : "hover:text-gray-400");

// Separate NavLinks Component with Auth Handling and Brands Dropdown
const NavLinks = ({ authUser, userSignOut }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <NavLink to="/about" className={activeStyleCallback}>About</NavLink>
      <NavLink to="/blog" className={activeStyleCallback}>Blog</NavLink>
      <NavLink to="/contact" className={activeStyleCallback}>Contact</NavLink>
      <NavLink to="/pages" className={activeStyleCallback}>Pages</NavLink>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center"
        >
          Brands
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white text-blue-950 p-2 mt-2 rounded shadow-lg">
            <NavLink to="/brands/option1" className="block px-4 py-2 hover:bg-gray-100 rounded">Option 1</NavLink>
            <NavLink to="/brands/option2" className="block px-4 py-2 hover:bg-gray-100 rounded">Option 2</NavLink>
            <NavLink to="/brands/option3" className="block px-4 py-2 hover:bg-gray-100 rounded">Option 3</NavLink>
          </div>
        )}
      </div>
      {authUser ? (
        <button className="text-black" onClick={userSignOut}>Logout</button>
      ) : (
        <NavLink to="/register" className="px-4 py-1 text-blue-950 rounded">Login/Register</NavLink>
      )}
    </>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { authUser, userSignOut } = useAuth();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`w-full relative top-0 left-0 text-white py-4 bg-transparent ${isMobileMenuOpen ? 'mb-40' : 'mb-8'}`}> {/* Changed to relative positioning */}
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-60">
        {/* Logo */}
        <div className="text-2xl font-700 text-blue-950">Bandage.</div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl text-black"
          onClick={toggleMobileMenu}
        >
          <BsList />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-blue-950">
          <NavLinks authUser={authUser} userSignOut={userSignOut} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white text-blue-950 w-full absolute top-full left-0 z-50 flex flex-col items-center justify-center" // Ensured proper alignment
          >
            <div className="flex flex-col items-center space-y-2 p-4">
              <NavLinks authUser={authUser} userSignOut={userSignOut} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
