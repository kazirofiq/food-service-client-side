import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://food-delevery-server-servoce.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
            <p className='text-lime-700 font-bold'>Our menu</p>
            <h2 className='text-5xl font-bold'>Popular Dishes</h2>
            <p className='lg:px-16'>Nullam laoreet arcu eu massa euismod, quis dictum massa sodales. Proin eget scelerisque dui. Phasellus id enim lobortis, porta orci at, viverra turpis. Phasellus et odio ac velit eleifend condimentum vel at purus. Ut lobortis sed felis vitae luctus.</p>
        </div>
            <div className='grid gap-4 px-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
            <Link to='/service'>
                <button className='btn btn-outline btn-success text-red-600 text-center my-10 font-bold text'>Vew All Service</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Services;