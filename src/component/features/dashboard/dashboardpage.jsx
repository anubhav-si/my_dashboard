import React from 'react'
import RevenueChart from './components/revenueChart'
import CustomersCard from './components/customercard'
import FeaturedProductCard from './components/featuredProdCard'
import SalesAnalyticsCard from './components/sales_analit_chart_card'

const Dashboardpage = () => {
  return (
    <div className='w-full'>
        <div>
          <h1 className=' mx-12 font-extrabold text-3xl'>Dashboard</h1>
        </div>
        <div>
            <RevenueChart/>
        </div>
        <div className='flex gap-6 w-[1247px] mx-auto  mt-8'>
            <CustomersCard/>
            <FeaturedProductCard/>
            <SalesAnalyticsCard/>
        </div>
    </div>
  )
}

export default Dashboardpage