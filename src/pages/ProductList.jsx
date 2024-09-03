import React from 'react'
import { db } from '../firebase';
import { collection, doc, setDoc, addDoc, getDoc, getDocs } from "firebase/firestore";
import Cloth from "../assets/cloth.png"
import Cloth2 from "../assets/fixed-height.png"
import Cloth3 from "../assets/fixed-height (2).png"
import Cloth10 from "../assets/fixed-height (1).png"
import Cloth4 from "../assets/fixed-height (3).png"
import Cloth5 from "../assets/fixed-height (4).png"
import Cloth6 from "../assets/fixed-height (5).png"
import Cloth7 from "../assets/product-cover-5.png"
import Cloth8 from "../assets/product-cover-5 (1).png"
import Cloth9 from "../assets/product-cover-5 (2).png"
import BrandLogo from '../components/brands-logo';
import Footer from '../components/Footer'
import Navbar from '../components/navbar'

function ProductList() {
//   const client = createStorefrontApiClient({
//     storeDomain: SHOPIFY_DOMAIN,
//     apiVersion: '2023-10',
//     publicAccessToken: STOREFRONT_ACCESS_TOKEN,
//   });

//   const shopQuery = `
//   query shop {
//     shop {
//       name
//       id
//     }
//   }
// `;
// async function fetchShopData() {
//   try {
//     const response = await client.fetch(shopQuery);

//     if (response.ok) {
//       const { errors, data, extensions } = await response.json();
//       console.log(data)
//     } else {
//       console.error("Error fetching data", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error occurred during fetch", error);
//   }
// }

// fetchShopData();

async function addBrand(brandData) {
  try {
    const brandRef = await addDoc(collection(db, "brands"), brandData);
    console.log("Brand added with ID: ", brandRef.id);
    return brandRef;
  } catch (error) {
    console.error("Error adding brand: ", error);
  }
}

async function addProductToBrand(brandId, productData) {
  try {
    const productRef = await addDoc(collection(db, "brands", brandId, "products"), productData);
    console.log("Product added with ID: ", productRef.id);
    return productRef;
  } catch (error) {
    console.error("Error adding product: ", error);
  }
}

const brandData = {
  name: "ExampleBrand",
  description: "This is an example brand",
  logo: "https://example.com/logo.png",
  website: "https://example.com",
  createdAt: new Date().toISOString()
};

const productData = {
  name: "Example Product",
  price: 99.99,
  description: "This is an example product",
  image: "url.com"
};

async function example() {
  const brandRef = await addBrand(brandData);
  if (brandRef) {
    await addProductToBrand(brandRef.id, productData);
    const products = await getProductsOfBrand(brandRef.id);
    console.log("Products of the brand: ", products);
  }
}

// example();


  const items = [
    { id: 1, src: Cloth, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 2, src: Cloth2, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 3, src: Cloth3, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 4, src: Cloth4, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 5, src: Cloth5, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 6, src: Cloth6, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 7, src: Cloth7, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 8, src: Cloth8, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 9, src: Cloth9, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
    { id: 10, src: Cloth10, title: 'Graphic Design', department: 'English Dept', price: '$16.53' },
  ];

  
  return (
    <main>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center pt-10 mt-20'>
        <div className="grid grid-cols-4 gap-4 w-[70%] justify-center items-center">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 ">
              <img src={item.src} className="h-44" alt={item.title} />
              <h1 className="text-sm font-semibold">{item.title}</h1>
              <p className="text-slate-600 font-semibold text-xs">{item.department}</p>
              <p className="text-slate-400 font-medium text-xs">{item.price}</p>
            </div>
          ))}
        </div>
        <div className='border-2 rounded-md w-[20%] flex items-center h-10 cursor-pointer my-10 px-3'>
            <div className='w-1/3 flex jusitfy-center'>
              <h1 className='text-gray-400'>First</h1>
            </div>
            <div className='flex w-1/2 items-center justify-center gap-3 h-full border-x-2 px-2'>
              <h1 className='h-full flex items-center px-3'>1</h1>
              <h1 className='h-full bg-[#23A6F0] flex items-center px-3 text-white'>2</h1>
              <h1 className='h-full flex items-center px-3'>3</h1>
            </div>
            <div className='w-1/3 flex justify-center text-[#23A6F0]'>
              <h1>Next</h1>
            </div>
        </div>
        <BrandLogo />
        <div className='w-[70%] flex justify-between items-center h-20 border-b border-slate-300 pr-5'>
          <h1 className=' text-sm font-bold'>Bandage </h1>
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
        <Footer />
      </div>
    </main>
  )
}

export default ProductList