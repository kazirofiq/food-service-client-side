import React from 'react';

const ServiceCard = ({service}) => {
    const {img, price, title,description} = service;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='font-bold text-red-600'>Price: ${price}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;