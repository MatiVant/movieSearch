import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, useLoaderData, useNavigate} from 'react-router-dom'
import Login from './components/Login.jsx'
import Listado from './components/Listado.jsx'
import '../index.css'
import Detalle from './components/Detalle.jsx'
import Busqueda from './components/Busqueda.jsx'
import App from './App.jsx' 
import Home from './components/Home.jsx'
import Contacto from './components/Contacto.jsx'
import Favoritos from './components/Favoritos.jsx'
import { loadMovie } from './loaders/movieLoad.js'
import { loadMovieSearch } from './loaders/searchLoad.js'





const router = createBrowserRouter([

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <App  />,
    children: [

      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listado',
        element: <Listado />,
        loader: loadMovie
      },
      {
        path: '/favoritos',
        element: <Favoritos />
      },
      {
        path: '/detalle',
        element: <Detalle />
      },
      {
        path: '/busqueda',
        element: <Busqueda />,
        // loader: loadMovieSearch
    
      },
      {
        path: '/contacto',
        element: <Contacto />
    
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
         
      <RouterProvider router={router} />
    
  
)
