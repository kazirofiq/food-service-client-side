import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import img from '../../assets/login/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

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
            // setError('');
            // navigate(from, {replace: true})
             // if(user.emailVerified){
    //         //     // navigate(from, { replace: true });
    //         // }
    //         // else{
    //             // toast.error('Your email is not verified. Please Verify')
    //         // }
        })
    // const handleSubmit = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     signIn(email, password)
    //     .then(result => {
    //         toast.success('Login Success!')
    //         const user = result.user;
    //         console.log(user);
    //         form.reset();
    //         setError('');
    //         navigate(from, {replace: true})
    //         // if(user.emailVerified){
    //         //     // navigate(from, { replace: true });
    //         // }
    //         // else{
    //             // toast.error('Your email is not verified. Please Verify')
    //         // }
    //     })
        .catch(error => {
            console.error(error)
            // setError(error.message)
        })
    //     .finally(() =>{
    //         setLoading(false);
    //     })
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
            <p className='text-center'>New to Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;