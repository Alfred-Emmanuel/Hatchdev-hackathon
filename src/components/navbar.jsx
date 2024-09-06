import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { BsSearch, BsCart, BsList } from 'react-icons/bs';
// import useAuth from '../custom-hooks/useAuthDetails';
import { useAuth } from '../context/AuthContext'; // Use the AuthContext

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { authUser, userSignOut } = useAuth();
    // console.log (authUser)

    return (
        <nav className="mb-11 w-full absolute top-0 left-0 text-white py-4 bg-transparent">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-60">
                <div className="text-2xl font-700 text-blue-950">Bandage.</div>

                <div className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center w-full lg:w-auto text-blue-950">
                    <div className={`flex flex-col lg:flex-row lg:space-x-8 lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden lg:flex'}`}>
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative flex items-center">
                            <span>Brands</span>
                            {isDropdownOpen && (
                                <div className="absolute bg-gray-800 p-2 mt-2 rounded shadow-lg">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Option 1</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Option 2</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">Option 3</a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="hover:text-gray-400">About</a>
                        <a href="#" className="hover:text-gray-400">Blog</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                        <a href="#" className="hover:text-gray-400">Pages</a>
                        <a href="#" className= "px-4 py-1 w-full text-center text-blue-950 lg:hidden">Login/ Register</a>
                    </div>

                   
                </div>

                <div className={`flex items-center space-x-4 ${isMobileMenuOpen ? 'hidden' : 'lg:flex'}`}>
                    {
                        authUser ? (
                            <button className='text-black' onClick={userSignOut}>Logout</button>
                        ) : 
                        (
                            <a
                                href="/register"
                                className="text-black px-4 py-1 w-[154px] h-[42px] bg-white rounded"
                            >
                                Login/ Register
                            </a>
                        )
                    }
                </div>
                 <button
                        className="lg:hidden text-xl ml-auto text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <BsList />
                    </button>
            </div>
        </nav>
    );
}

export default Navbar;
