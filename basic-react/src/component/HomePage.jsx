import React,{ useEffect, useRef } from 'react';
import './HomePage.css';
import Slider from './homeSlider';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Set the playback speed to 0.5x
    }
  }, []);

  return (
    <div className='backgroundimg relative overflow-hidden sm:h-full'>
      <video autoPlay loop muted className='video' ref={videoRef}>
        <source src="/cycle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='content md:flex md:items-center md:justify-evenly sm:flex sm:items-center sm:justify-evenly sm:p-20'>
        
        
        <div className='mb-5 text-center border-solid ml-17 sm:mt-4 flex-col items-center justify-evenly'>
          <div className='md:text-start sm:text-center sm:mt-4 md:ml-12 md:mb-1  text-black font-bold'>World Best Shop</div>
          <div className='text-6xl md:text-4xl sm:text-4xl font-bold font-serif text-blue-950  md:ml-10 mb-5 md:text-start sm:text-center '>
            Cycle Shop
        
          </div>

          <div className='text-wrap ml-10 w-3/4 sm:text-xs md:text-start sm:text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis beatae molestias ab voluptate fuga dolorem iure et quia ullam rem impedit magnam ipsam sint vel veniam omnis obcaecati unde animi, optio, odit repellat architecto. Pariatur numquam ea sed perferendis cumque?

          </div>

        </div>


        <div className='slider-container flex items-center justify-evenly sm:p-20'>
          <Slider />  
        </div>


      </div>
    </div>
  );
}
