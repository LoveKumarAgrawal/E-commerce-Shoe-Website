import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import Sports from './components/Sports.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import ShoeListing from './components/ShoeListing.jsx'
import Signup from './components/Signup.jsx'
import AddToCart from './components/AddToCart.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"men",
        element:<Men />
      },
      {
        path:"women",
        element:<Women />
      },
      {
        path:"sports",
        element:<Sports />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"/shoe/:id",
        element:<ShoeListing />
      }
    ]
  },
  {
    path:"/signup",
    element:<Signup />
  },
  {
    path:'/addtocart',
    element:<AddToCart />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
