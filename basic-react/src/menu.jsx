import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'

export default function Menubar() {
  return (
    <>
   



   
   <NavLink to="#">Home</NavLink>
   <NavLink to="#">About</NavLink>
   <NavLink to="#">Contact</NavLink>
   <NavLink to="#">Feedback</NavLink>


   
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