import React, {useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import { db } from '../firebase';
// import { collection, doc, query, where, getDocs, writeBatch, addDoc } from "firebase/firestore";
import useProductDetails from '../custom-hooks/useProductDetails';
import useBrandDetails from '../custom-hooks/useBrandDetails';
import Pagination from '../components/Pagination';
import BrandLogo from '../components/brands-logo';
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Modal from '../components/Modal';

function ProductList() {

const { brands } = useBrandDetails()
const [loading, setLoading] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [selectedBrand, setSelectedBrand] = useState('');
const [isEcoFriendly, setIsEcoFriendly] = useState('all');
const [priceRange, setPriceRange] = useState('all');
const [selectedProduct, setSelectedProduct] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  if (brands.length > 0) {
    setSelectedBrand(brands[0]?.name);
  }
}, [brands]);

const { products } = useProductDetails(selectedBrand);

const handleProductClick = (product) => {
  setSelectedProduct(product);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedProduct(null);
};

const handleBrandChange = (e) => {
  setSelectedBrand(e.target.value);
  setLoading(true);
};

const handleEcoFriendlyChange = (e) => {
  setIsEcoFriendly(e.target.value);
};

const handlePriceRangeChange = (e) => {
  setPriceRange(e.target.value);
};

useEffect(() => {
  if (products.length > 0) {
    setLoading(false);
  }
}, [products]);

const filteredProducts = products
  .filter((product) => {
    if (isEcoFriendly === 'yes') return product.isEcofriendly;
    if (isEcoFriendly === 'no') return !product.isEcofriendly;
    return true;
  })
  .filter((product) => {
    if (priceRange === 'low') return product.price < 50;
    if (priceRange === 'medium') return product.price >= 50 && product.price <= 100;
    if (priceRange === 'high') return product.price > 100;
    return true;
});

const productsPerPage = 12;
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

useEffect(() => {
  setCurrentPage(1);
}, [isEcoFriendly, priceRange, filteredProducts]);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goToNextPage = () => {
  if (currentPage < totalPages) {
    scrollToTop();
    setCurrentPage((prev) => prev + 1);
  }
};

const goToPreviousPage = () => {
  if (currentPage > 1) {
    scrollToTop();
    setCurrentPage((prev) => prev - 1);
  }
};

const goToFirstPage = () => {
  scrollToTop();
  setCurrentPage(1);
};

const goToPage = (pageNumber) => {
  scrollToTop();
  setCurrentPage(pageNumber);
};

  
  return (
    <main>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center md:pt-10'>
        <div className='w-[90%] md:w-[72%] flex items-center justify-between'>
          <div className="w-[30%] mx-auto my-4">
            <label htmlFor="brand-select" className="block text-sm font-medium text-gray-700">
                Select a Brand:
            </label>
            <select
                id="brand-select"
                value={selectedBrand}
                onChange={handleBrandChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {brands.map((brand) => (
                    <option key={brand.id} value={brand.name}>
                        {brand.name}
                    </option>
                ))}
            </select>
          </div>
          <div className="w-[30%] mx-4 my-4">
          <label htmlFor="eco-friendly-select" className="block text-sm font-medium text-gray-700">
            Is Ecofriendly:
          </label>
          <select
            id="eco-friendly-select"
            value={isEcoFriendly}
            onChange={handleEcoFriendlyChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          <div className="w-[30%] mx-4 my-4">
          <label htmlFor="price-select" className="block text-sm font-medium text-gray-700">
            Price Range:
          </label>
          <select
            id="price-select"
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="low">Below $50</option>
            <option value="medium">$50 - $100</option>
            <option value="high">Above $100</option>
          </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] md:w-[75%] justify-center items-center">
          {loading
          ? Array.from({ length: 8 }).map((_, index) => ( 
              <div key={index} className="flex flex-col items-center gap-2">
                <Skeleton height={176} width={176} />
                <Skeleton width={100} />
                <Skeleton width={80} />
                <Skeleton width={120} />
              </div>
            ))
          :currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center gap-2 mt-5 cursor-pointer"
                onClick={() => handleProductClick(product)} 
              >
                <img src={product.image} className="h-52 w-52 rounded-md shadow-md" alt={product.name} />
                <h1 className="text-sm font-semibold">{product.name}</h1>
                <p className="text-slate-400 font-medium text-xs">${product.price}</p>
              </div>
            ))
          ) : (
            <p className='ml-5 mt-5'>No products available for this filter.</p>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          goToFirstPage={goToFirstPage}
          goToPage={goToPage}
        />
        <BrandLogo />
        <div className='w-[90%] md:w-[70%] flex justify-between items-center h-20 pr-5'>
          <h1 className=' font-bold'>Bandage </h1>
          <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-500">
              <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-500">
              <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-blue-500">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </div>
        </div>
        {isModalOpen && selectedProduct && (
          <Modal product={selectedProduct} closeModal={closeModal} />
        )}
        <Footer />
      </div>
    </main>
  )
}

export default ProductList