import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, RouterProvider, createHashRouter } from 'react-router-dom'
import { menu } from './utils/variables.tsx'

const router = createHashRouter([{
  path: "/",
  element: <App/>,
  children: menu
}]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
