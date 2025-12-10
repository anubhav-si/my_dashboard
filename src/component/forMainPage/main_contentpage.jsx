import React from 'react'
import Navigation_topbar from '../navigation_topbar'
import Mainpage_card from '../cards/mainpage_card'
import totalUserLogo from '../../assets/forCards/totaluser.png';
import totalorderLogo from '../../assets/forCards/totalorder.png';
import totalsalesLogo from '../../assets/forCards/totalsales.png';
import totalpendingLogo from '../../assets/forCards/totalpending.png';
import ChartComponent from './chartComponent';
import Prod_co_mainP from './prod_co_mainP';
import salesData from './dataForMainPageChart';

const Main_contentpage = () => {
  console.log(salesData);
  return (
   <div className=' w-full overflow-y-auto'>
       
        <div>
          <h1 className='mb-7 mx-12 font-extrabold text-3xl'>Dashboard</h1>
        </div>
        <div className='flex mx-6'>
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

export default Main_contentpage