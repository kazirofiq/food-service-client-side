import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {_id, title, price, img, description } = useLoaderData();
    return (
        <div>
            <div className="card w-9/12 bg-base-300 shadow-xl mx-auto mt-10 mb-20">
            <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
</div>
        </div>
    );
};

export default ServiceDetails;