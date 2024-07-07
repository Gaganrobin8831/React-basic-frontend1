import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <>
      <div className='aboutpage w-full h-full mt-16 mb-16 text-center'>
        <u className='text-blue-950'>
          <div className='text-4xl mb-5 text-blue-950 font-extrabold'>
            About Us
          </div>
        </u>

        <div className='image-container relative w-full h-80'>
          <img src="./3rd.jpg" className='aboutimg w-full h-full object-cover' />
          <div className='abouttext absolute inset-0 flex flex-col justify-center items-center text-white'>
           
            <div className='abouttext2 sm:text-lg md:text-4xl sm:font-bold  md:font-extrabold font-serif  text-blue-950  md:ml-10 mb-5'>
              About Cycle Shop
            </div>
            <div className='text-wrap text-lg  ml-10 w-3/4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis beatae molestias ab voluptate fuga dolorem iure et quia ullam rem impedit magnam ipsam sint vel veniam omnis obcaecati unde animi, optio, odit repellat architecto. Pariatur numquam ea sed perferendis cumque?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
