import React, { useState } from 'react';

import Button from './Button';


export default function Menubar() {
  let Links = [
    {name:"Home",link:"/"},
    {name:"About",link:"/"},
    {name:"Service",link:"/"},
    {name:"Feedback",link:"/"},
  ];
  let [open, setOpen] =useState(false)
  return (
    <>
   <div className='shadow-md w-full fixed top-0 left-0 z-50'>
    <div className='md:flex items-center justify-between bg-blue-200 py-4 md:px-10 px-7 '>
      <div className='font-bold text-4xl cursor-pointer flex items-center font-[Poppins] text-gray-800 w-auto'>
        <span className='text-5xl text-blue-950 mr-1 mt-1'>
        <ion-icon name="logo-react"></ion-icon>
        </span>
        Desginer
      </div>

      <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-16 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu-outline'}></ion-icon>

      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100  sm:opacity-0 `}>
        {
          Links.map((Link)=>(
            <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
              <a href="{Link.link}" className='text-blue-950 font-bold hover:text-gray-200 duration-500'>{Link.name}</a></li>
          ))
        }
        <Button>
          Get Started
        </Button>

        {/* <Button>
          Read More
        </Button> */}
      </ul>

    </div>

   </div>
   
    </>
  );
}
