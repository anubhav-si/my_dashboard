import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboardpage from './component/sideBarComponent/dashboard/dashboardpage.jsx'
import Testfile from './component/testfile.jsx'
import Main_contentpage from './component/forMainPage/main_contentpage.jsx'
import ProductsPage from './component/sideBarComponent/products/productPage.jsx'
import FavouritePage from './component/sideBarComponent/Favorites/favouritePage.jsx'
import Usercomponent from './component/sideBarComponent/inbox/component/usercomponent.jsx'
import Inboxpage from './component/sideBarComponent/inbox/inboxpage.jsx'

import Order_ListPage from './component/sideBarComponent/order_list/order_ListPage.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Main_contentpage/>
      },
      {
        path:"dashboard",
        element:<Dashboardpage/>
      },
      {
        path:"products",
        element:<ProductsPage/>
      },
      {
        path:"favourite",
        element:<FavouritePage/>
      },
       {
        path:"inbox",
        element:<Inboxpage/>,
        children:[]
      },
       {
        path:"order_list",
        element:<Order_ListPage/>
      },
    ]
  },
  {
    path:'/test',
    element:<Testfile/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
