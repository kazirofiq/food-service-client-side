import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ChechoutDetails from './ChechoutDetails';


const Checkout = () => {
    const {_id, title, price} = useLoaderData();

    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://food-delevery-server-servoce.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }
   
    

    return (
        <div className='p-10'>

            <ChechoutDetails></ChechoutDetails>

            <form onSubmit={handlePlaceOrder}>
                
               
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/R7XSpv4/form-bg.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">You are about to order: <span className='text-lime-600'>{title}</span>
                    </h1>
                
                    <h4 className='text-red-600 text-3xl my-4'>Price: ${price}</h4>

                    <div className='grid md:grid-cols-2 gap-4 my-4'>
                    <input type="text" name='firstName' placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" defaultValue={user?.email} placeholder="your email" name='email' readOnly className="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="phone number" name='phone' className="input input-bordered w-full max-w-xs" />
                    
                    </div>
                    <textarea name='message' className="textarea textarea-success w-full" placeholder="Order details"></textarea>

                <button className="btn btn-primary">Order Submit</button>
                </div>
                </div>
                </div>
                </form>
        </div>
    );
};

export default Checkout;