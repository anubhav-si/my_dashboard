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
import ProductListpage from './component/sideBarComponent/productstock/productStockpage.jsx'
import PricingPage from './component/sideBarComponent/pricing/pricingPage.jsx'
import TOdoPage from './component/sideBarComponent/Todo/todoPage.jsx'
import ContactPage from './component/sideBarComponent/contact/contactpage.jsx'
import InvoicePage from './component/sideBarComponent/invoice/invoicePage.jsx'
import UIElementsPage from './component/sideBarComponent/ui_element/uiElementPage.jsx'
import TeamPage from './component/sideBarComponent/team/teamPage.jsx'
import AddNewContact from './component/sideBarComponent/contact/components/addNewContectPage.jsx'
import ContactListPage from './component/sideBarComponent/contact/components/contactListPage.jsx'
import TeamMembersList from './component/sideBarComponent/team/components/teamMembersList.jsx'
import AddNewMember from './component/sideBarComponent/team/components/addNewMember.jsx'


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
       {
        path:"product_stock",
        element:<ProductListpage/>
      },
      {
        path:"pricing",
        element:<PricingPage/>
      },
      {
        path:"to_do",
        element:<TOdoPage/>
      },
       {
        path:"contact",
        element:<ContactPage/>,
        children:[
          {
            index: true,
            element:<ContactListPage/>
          },
          {
            path:"add_newContact",
            element:<AddNewContact/>
          },
         
        ]
      },
      {
        path:"invoice",
        element:<InvoicePage/>
      },
      {
        path:"ui_elements",
        element:<UIElementsPage/>
      },
      {
        path:"team",
        element:<TeamPage/>,
        children:[
          {
            index: true,
            element:<TeamMembersList/>
          },
          {
            path:"add_newmember",
            element:<AddNewMember/>
          }
        ]
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
