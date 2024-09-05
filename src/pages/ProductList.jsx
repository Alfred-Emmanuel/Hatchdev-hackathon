import React, {useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { db } from '../firebase';
import { collection, doc, query, where, getDocs, writeBatch } from "firebase/firestore";
import useProductDetails from '../custom-hooks/useProductDetails';
import Pagination from '../components/Pagination';
import BrandLogo from '../components/brands-logo';
import Footer from '../components/Footer'
import Navbar from '../components/navbar'

function ProductList() {

// async function addBrand(brandData) {
//   try {
//     const brandRef = await addDoc(collection(db, "brands"), brandData);
//     console.log("Brand added with ID: ", brandRef.id);
//     return brandRef;
//   } catch (error) {
//     console.error("Error adding brand: ", error);
//   }
// }
const [loading, setLoading] = useState(true);
const { products } = useProductDetails("Abercrombie and fitch");

useEffect(() => {
  if (products.length > 0) {
    setLoading(false);
  }
}, [products]);

async function getProductsOfBrand(brandId) {
  try {
    const productsCollection = collection(db, "brands", brandId, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productsList;
  } catch (error) {
    console.error("Error getting products: ", error);
  }
}

const brandData = {
  name: "Abercrombie and fitch",
  description: "Abercrombie & Fitch Co. (A&F) is an American lifestyle retailer that focuses on contemporary clothing",
  // logo: "https://example.com/logo.png",
  // website: "https://example.com",
  createdAt: new Date().toISOString()
};

const productsData = [
    {
      name: "Classic Leather Jacket",
      price: 120.00,
      description: "A timeless leather jacket that adds an edge to any outfit.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9F8F7xnPNcDqM1kTFN-uSEGEK_I-yu798BA&s",
      isEcofriendly: false,
      style: "Outerwear"
    },
    {
      name: "Silk Scarf",
      price: 35.99,
      description: "Luxurious silk scarf perfect for all seasons.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjXQjVI8-a9mV6WKWfD3lNr2QA-9OkmrYvQ&s",
      isEcofriendly: true,
      style: "Accessories"
    },
    {
      name: "Vintage Denim Jeans",
      price: 75.50,
      description: "Classic straight-leg denim jeans with a vintage wash.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMuyjY383QjlnQ-XyeGckKcSxBvFVgHYYyw&s",
      isEcofriendly: true,
      style: "Bottoms"
    },
    {
      name: "Cashmere Sweater",
      price: 150.00,
      description: "Soft and warm cashmere sweater in a versatile color.",
      image: "https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/02/best-cashmere-sweaters-refresh-lead-1668555002-jpg.webp",
      isEcofriendly: false,
      style: "Knitwear"
    },
    {
      name: "Maxi Dress",
      price: 89.99,
      description: "Flowy and elegant maxi dress for any occasion.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9h47hseTAyo-mJ9x6edZprI1XRm-VZs_Bg&s",
      isEcofriendly: true,
      style: "Dresses"
    },
    {
      name: "Suede Boots",
      price: 95.00,
      description: "Stylish suede boots with a comfortable heel.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcbYDmNqFSdo3e2gU3zQ5y5HYmBdLDJcl_g&s",
      isEcofriendly: false,
      style: "Footwear"
    },
    {
      name: "Wool Peacoat",
      price: 130.00,
      description: "Double-breasted wool peacoat with a classic fit.",
      image: "https://cdn1.purificaciongarcia.com/wcscontent/photos/PG/2024/42/PH/42PH407500241/42PH407500241_06_1x1.jpg",
      isEcofriendly: true,
      style: "Outerwear"
    },
    {
      name: "Graphic Tee",
      price: 25.00,
      description: "Casual graphic tee with a bold print.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnof35_-ujDount4XClhPo0gT7xoki2I-Ng&s",
      isEcofriendly: false,
      style: "Tops"
    },
    {
      name: "Plaid Skirt",
      price: 45.50,
      description: "Chic plaid skirt with a modern twist.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHw49ZREnIsQ8ddCkiQORIcUXEvk9FJm2Jg&s",
      isEcofriendly: true,
      style: "Bottoms"
    },
    {
      name: "Leather Handbag",
      price: 120.00,
      description: "Elegant leather handbag with multiple compartments.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isEcofriendly: false,
      style: "Accessories"
    }
  ];

async function addProductsToBrand(brandId, products) {
  try {
    const batch = writeBatch(db);

    products.forEach((product) => {
      const productRef = doc(collection(db, "brands", brandId, "products"));
      batch.set(productRef, product);
    });

    await batch.commit();
    console.log("All products added successfully");
  } catch (error) {
    console.error("Error adding products: ", error);
  }
}

async function addProductsToExistingBrand(brandName, productsData) {
  try {
    const brandsCollection = collection(db, "brands");
    const brandQuery = query(brandsCollection, where("name", "==", brandName));
    const brandSnapshot = await getDocs(brandQuery);

    if (brandSnapshot.empty) {
      console.log(`No brand found with the name: ${brandName}`);
      return;
    }

    const brandDoc = brandSnapshot.docs[0];
    const brandId = brandDoc.id;

    await addProductsToBrand(brandId, productsData);
    const products = await getProductsOfBrand(brandId);
    console.log("Products of the brand: ", products);

  } catch (error) {
    console.error("Error adding products to existing brand: ", error);
  }
}

const brandName = "Abercrombie and fitch";
// addProductsToExistingBrand(brandName, productsData);

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;

const totalPages = Math.ceil(products.length / productsPerPage);

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
      <div className='w-full flex flex-col justify-center items-center pt-10 mt-20'>
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
          : currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col products-center gap-2 ">
              <img src={product.image} className="h-52 rounded-md shadow-md" alt={product.name} />
              <h1 className="text-sm font-semibold">{product.name}</h1>
              {/* <p className="text-slate-600 font-semibold text-xs">{product.department}</p> */}
              <p className="text-slate-400 font-medium text-xs">${product.price}</p>
            </div>
          ))}
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
        <Footer />
      </div>
    </main>
  )
}

export default ProductList