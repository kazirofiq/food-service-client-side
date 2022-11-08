import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, providerLogin} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setError('');
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    const handleGoogleSign = () =>{
        providerLogin(googleProvider)
        .then(result => {
            toast.success('Login Success!')
            const user = result.user;
            console.log(user);
            // navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero my-20 p-10 w-full">
            <div className="hero-content grid md:grid-cols-2 gap-6  flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='' src={img} alt="" />
            </div>
            <div className="card py-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
            <label className="label">
            <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            </form>
            <div>
                            <p className='text-red-600 text-center'>{error}</p>
                        </div>
                <div className='m-2'>
                    <p className='text-center'>..........Login with social media..............</p>

                    <div className='flex gap-10 justify-center m-4'>
                        <FaGoogle onClick={handleGoogleSign} className='text-xl'></FaGoogle>
                        <FaGithub  className='text-xl'></FaGithub>
                    </div>
                </div>
            <p className='text-center'>Already have an account please <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;