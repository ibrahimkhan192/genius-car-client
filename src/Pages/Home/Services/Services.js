import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-orange-500 text-center">Service</p>
        <h2 className='text-5xl font-bold text-center'>Our Service Area</h2>
        <p className='w-1/2 mx-auto text-center p-4 font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-y-10 px-20 py-10'>
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <div className='text-center pb-10'><button className="btn btn-outline hover:text-white btn-info">More Services</button></div>
    </div>
  );
};

export default Services;