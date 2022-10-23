import React from 'react'
import { FaFacebook ,FaTwitterSquare  } from 'react-icons/fa';


const Nav = () => {
  return (
    <div className='bg-gray-500'>
    <div className='container p-6  '>
        <nav className="flex items-center justify-between">
            <div className="logo-link">
                <img src="" alt="" /> alt holder for iage
            </div>
            <div className="nav-holder">
                <ul className="flex items-center">
                    <li className="mr-6"> Home </li>
                    <li className="mr-6"> About us  </li>
                    <li className="mr-6"> Destinations </li>
                    <li className="mr-6"> Activities </li>
                    <li className="mr-6"> Plan your trip </li>
                    <li className="mr-6"> contact us  </li>
                </ul>
            </div>
            <div className="social-icons">
                 <div className="flex items-center justify-between">
                    <span className='font-blue-500 text-2xl pr-3'>
                       <FaFacebook />
                    </span>
                    <span className='text-2xl'>
                        <FaTwitterSquare/>
                    </span>
                 </div>
            </div>
        </nav>
    </div>
    </div>
  )
}

export default Nav