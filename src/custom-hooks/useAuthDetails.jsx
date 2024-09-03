import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function useAuthDetails() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthUser(user)
                const userRef = doc(db, "users", user.uid);
                await setDoc(userRef, {
                  email: user.email,
                  displayName: user.displayName,
                }, { merge: true });
            }
            else {
                setAuthUser(null)
            }
        })

        return () => listen();
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out successfully")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return { authUser, userSignOut };
}

export default useAuthDetails