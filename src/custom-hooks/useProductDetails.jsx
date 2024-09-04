import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { collection, doc, query, where, getDocs, writeBatch } from "firebase/firestore";

function useProductDetails(brandName) {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        async function getProductsOfBrand() {
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

              const productsCollection = collection(db, "brands", brandId, "products");
              const productsSnapshot = await getDocs(productsCollection);
              const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setProducts(productsList);
            } catch (error) {
              console.error("Error getting products: ", error);
            }
        }

        if (brandName) {
            getProductsOfBrand();
        }
    }, [brandName])

  return { products }
}

export default useProductDetails