import React, {useState} from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
            }) 
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <form onSubmit={Register}>
                <h1>Sign Up</h1>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <input type='password' placeholder='Confirm your password' /> */}
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default SignUp