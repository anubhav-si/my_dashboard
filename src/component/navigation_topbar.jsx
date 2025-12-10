import React from 'react'
import img from '../assets/near_srh.png';
import icon from '../assets/icon_right.png';
import flag from '../assets/flag.png';
import usericon from '../assets/user_icon.png';

const Navigation_topbar = () => {
  return (
    <div className='w-full sticky top-0 left-52 z-50 flex h-16 mx-0 mb-8 p-4 bg-white  justify-between shadow-xl'>
        <div className='flex items-center'>
            <img className='w-14 h-10' src= {img} alt = "img"/>
            <input className='border-2 w-[20rem] rounded-xl px-4 h-8' type="text" placeholder='enter here '/>
        </div>
        <div className='flex items-center '>
          <img className='w-8 h-8' src={icon} alt='icon'/>
          <div className='flex items-center mx-4'>
            <img className='w-8 h-8 mx-4' src={flag} alt='flag'/>
            <h3>English</h3>
          </div>
          <div className='flex items-center mx-4'>
            <div className='mx-4 items-center justify-center text-center'><img className='w-10 h-10' src={usericon} alt='icon'/></div>
            <div className=' text-center items-center' ><h3>anubhav singh</h3><p>admin</p></div>
          </div>
        </div>
    </div>
  )
}

export default Navigation_topbar