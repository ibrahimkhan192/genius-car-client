import React from 'react';

const ServiceCard = ({service}) => {
 const {img, price, title} = service;
 return (
  <div className="card w-80 bg-base-100 shadow-xl">
   <figure><img src={img} alt="Shoes" /></figure>
   <div className="card-body">
    <h2 className="card-title">
     {title}
     <div className="badge badge-info text-white">NEW</div>
    </h2>
    <div className="card-actions justify-start font-semibold text-orange-500">
     <div className="text-xl">Price</div>
     <div className="text-xl">${price}</div>
    </div>
   </div>
  </div>
 );
};

export default ServiceCard;