import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
 const { image, id, prev, next } = slide;
 return (
  <div id={`slide${id}`} className="carousel-item relative w-full">
   <div className='img-gradent'>
    <img src={image} alt='' className="w-full rounded-xl" />
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
    <h1 className='text-6xl font-bold text-white boss'>Affordable <br />
     Price for Car <br />
     Servicing
    </h1>
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 mt-4 top-2/4">
    <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam inventore architecto pariatur! Porro pariatur eius quisquam a facilis harum deserunt.</p>
   </div>
   <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2 mt-28">
    <button className="btn btn-info mr-5 text-white">Discover More</button>
    <button className="btn btn-outline btn-info text-white">Latest Project</button>
   </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
    <a href={`#slide${next}`} className="btn btn-circle ">❯</a>
   </div>
  </div>
 );
};

export default BannerItem;