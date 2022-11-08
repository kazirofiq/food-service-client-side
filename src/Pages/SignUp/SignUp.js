import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login/login.jpg'

const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
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
            <p className='text-center'>Already have an account please <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;