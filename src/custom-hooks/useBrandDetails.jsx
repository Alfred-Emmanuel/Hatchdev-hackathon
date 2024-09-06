import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { collection, doc, query, where, getDocs, writeBatch } from "firebase/firestore";

function useBrandDetails() {
    const [ brands, setBrands ] = useState([])

    useEffect(() => {
        async function getBrands() {
            try {
                const brandsCollection = collection(db, "brands");
                const brandSnapshot = await getDocs(brandsCollection);
            
                if (brandSnapshot.empty) {
                    console.log(`No brand found.`);
                    return;
                }
            
                const brandDoc = brandSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
            //   const brandsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              setBrands(brandDoc);
            } catch (error) {
              console.error("Error getting products: ", error);
            }
        }

        getBrands()

    }, [])

  return { brands }
}

export default useBrandDetails