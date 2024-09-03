import React, {useState} from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuthDetails from '../custom-hooks/useAuthDetails';

function SignIn() {
    const { authUser, userSignOut } = useAuthDetails();

    const SignIn= (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log (userCredentials)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form onSubmit={SignIn}>
                <h1>Sign In</h1>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign In</button>
            </form>
            <div>
                {
                    authUser ? 
                        (<div>
                            <p> Signed In </p>
                            <button onClick={userSignOut}> Sign Out </button>
                        </div>
                    )
                    : (
                        <div>
                            <p>Signed Out</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SignIn