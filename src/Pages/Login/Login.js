import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
import img from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const {signIn, providerLogin, setLoading} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            toast.success('Login Success!')
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true})
             // if(user.emailVerified){
    //         //     // navigate(from, { replace: true });
    //         // }
    //         // else{
    //             // toast.error('Your email is not verified. Please Verify')
    //         // }
        })
    
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
        .finally(() =>{
            setLoading(false);
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
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
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
            <p className='text-center'>New to Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;