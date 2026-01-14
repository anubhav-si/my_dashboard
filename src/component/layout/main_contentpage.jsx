import React from 'react'
import Navigation_topbar from './topbar';
import Mainpage_card from '../common/mainpage_card';
import totalUserLogo from '../../assets/icons/totaluser.png';
import totalorderLogo from '../../assets/icons/totalorder.png';
import totalsalesLogo from '../../assets/icons/totalsales.png';
import totalpendingLogo from '../../assets/icons/totalpending.png';
import ChartComponent from './chartComponent';
import Prod_co_mainP from './productlist';
import salesData from './dataForMainPageChart';

const Main_contentpage = () => {
  
  return (
   <div className=' w-full overflow-y-auto  '>
       
        <div>
          <h1 className='mb-6 sm:mb-7 mx-2 sm:mx-6 md:mx-12 font-extrabold text-2xl sm:text-3xl'>Home</h1>
        </div>
        <div className='flex flex-wrap gap-4 my-6 sm:my-10 mx-2 sm:mx-6'>
          <Mainpage_card title="Total User" count="40523" percentage="6.5" logo={totalUserLogo}/>
          <Mainpage_card title="Total Order" count="1152" percentage="10.5" logo={totalorderLogo}/>
          <Mainpage_card title="Total Sales" count="$60583" percentage="3.5" logo={totalsalesLogo}/>
          <Mainpage_card title="Total pending" count="123" percentage="3.1" logo={totalpendingLogo}/>
        </div>
       
        <div>
          <ChartComponent data ={salesData} />
        </div>
        <div>
          <Prod_co_mainP/>
        </div>
        
   </div>
  )
}

export default Main_contentpage;