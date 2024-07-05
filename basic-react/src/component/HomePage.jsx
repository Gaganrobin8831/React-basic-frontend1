import React from 'react';
import Slider from './homeSlider'
export default function Home() {
  return (
    <div className='w-full md:h-96 bg-blue-200 md:flex items-center 
     sm:flex-wrap-reverse sm:h-screen '>
    <div className='h-96 md:w-6/12 sm:w-11/12'>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur quisquam quasi consequatur quod vel reprehenderit perferendis fugiat iste placeat?</div>
    </div >


    <div className='md:h-96 md:w-20 md:ml-40  md:flex md:items-center md:justify-evenly sm:flex sm:justify-center'>
    <Slider/>
    </div>
    
    </div>
  );
}
