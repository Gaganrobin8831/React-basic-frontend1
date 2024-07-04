import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
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
   <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-red-700 py-4 md:px-10 px-7 '>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 w-auto'>
        <span className='text-3xl text-indigo-600 m-1 pt-2'>
        <ion-icon name="logo-react"></ion-icon>
        </span>
        Desginer
      </div>

      <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu-outline'}></ion-icon>

      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100  sm:opacity-0`}>
        {
          Links.map((Link)=>(
            <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href="{Link.link}" className='text-gray-800 hover:text-gray-200 duration-500'>{Link.name}</a></li>
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

// const Nav = () => {
//     const {isOpen,setIsOpen} = useState(false)
    
//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     }

//   return(
//       <nav className='w-1/3'>
//        <div className='flex justify-between'>
//         <NavLink/>
//        </div>
//        <div>

//          <button onClick={toggleNavbar}>
//             {isOpen ? <X /> :<Menubar/>}
//          </button>
//        </div>

//       </nav>
//   ); 
// }