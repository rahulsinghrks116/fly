import React from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
       <div>
       <SiConsul className='icon'/>
       </div>
       <div className='none flex'>
        <li className='flex'><BsPhoneVibrate/>Support</li>
        <li className='flex'><AiOutlineGlobal/>Language</li>
       </div>
       <div className='atb flex'>
           <span>Sign In</span>
           <span>Sign Out</span>
       </div>


      </div>
    </div>
  )
}

export default Navbar
