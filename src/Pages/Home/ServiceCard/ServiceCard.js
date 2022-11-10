import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id, img, price, title,description} = service;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='font-bold text-red-600'>Price: ${price}</p>
            {
                description.length > 10 ?
                <p>{description.slice(0, 100) + '...'} <Link className='text-red-600' to={`/checkout/${_id}`}>Read More...</Link></p>
                :
                <p>{description}</p>
            }
            <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary"> View details</button>
            </Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;