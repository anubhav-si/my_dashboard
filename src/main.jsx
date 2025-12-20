import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboardpage from './component/features/dashboard/dashboardpage.jsx'
import Testfile from './component/testfile.jsx'
import Main_contentpage from './component/layout/main_contentpage.jsx'
import ProductsPage from './component/features/products/productPage.jsx'
import FavouritePage from './component/features/Favorites/favouritePage.jsx'
import Usercomponent from './component/features/inbox/component/usercomponent.jsx'
import Inboxpage from './component/features/inbox/inboxpage.jsx'
import Order_ListPage from './component/features/order_list/order_ListPage.jsx'
import ProductListpage from './component/features/productstock/productStockpage.jsx'
import PricingPage from './component/features/pricing/pricingPage.jsx'
import TOdoPage from './component/features/Todo/todoPage.jsx'
import ContactPage from './component/features/contact/contactpage.jsx'
import InvoicePage from './component/features/invoice/invoicePage.jsx'
import UIElementsPage from './component/features/ui_element/uiElementPage.jsx'
import TeamPage from './component/features/team/teamPage.jsx'
import AddNewContact from './component/features/contact/components/addNewContectPage.jsx'
import ContactListPage from './component/features/contact/components/contactListPage.jsx'
import TeamMembersList from './component/features/team/components/teamMembersList.jsx'
import AddNewMember from './component/features/team/components/addNewMember.jsx'
import LoginPage from './component/features/auth/loginPage.jsx'
import SignupPage from './component/features/auth/signupPage.jsx'
import NotFound from './component/errors/notFound.jsx'
import { AuthProvider } from './context/authcontect.jsx'
import SettingsPage from './component/features/settings/settings.jsx'

const router = createBrowserRouter([
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        index:true,
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
      {
        path:"settings",
        element:<SettingsPage/>
      },
      
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    
  </StrictMode>,
);
