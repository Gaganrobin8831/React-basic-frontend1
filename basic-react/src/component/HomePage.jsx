import React,{ useEffect, useRef } from 'react';
import './HomePage.css';
import Slider from './homeSlider';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Set the playback speed to 0.5x
    }
  }, []);

  return (
    <div className='backgroundimg'>
      <video autoPlay loop muted className='video' ref={videoRef}>
        <source src="/cycle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content md:flex md:items-center md:justify-evenly sm:flex sm:items-center sm:justify-evenly'>
        <div className='text'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur quisquam quasi consequatur quod vel reprehenderit perferendis fugiat iste placeat?</div>
        </div>
        <div className='slider-container flex items-center justify-evenly'>
          <Slider />  
        </div>
      </div>
    </div>
  );
}
