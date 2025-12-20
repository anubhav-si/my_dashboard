import React from 'react'


const Mainpage_card = ({title,count,percentage,logo}) => {
  return (
    <div className=' bg-white py-3  px-4 w-68 shadow-2xl h-40 rounded-2xl mx-6'>
        <div className='flex  justify-between'>
            <div className=' text-xl'>
            <h2>{title}</h2>
            <h1 className='py-5 font-bold text-3xl'>{count}</h1>
        </div>
        <div>
            <img className='w-16' src={logo} alt="userloggo" />
        </div>
        </div>
        <div>
            <h2 className=' '>{`${percentage}% Up from Yesterday`}</h2>
        </div>
    </div>
  )
}

export default Mainpage_card;