import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as ReactDOM from 'react-dom/client'
import './index.css'
import React from "react";
import Historia from './Historia.jsx'
import App from './App.jsx';
import Contatos from './Contatos.jsx';
import Cursos from './components/Cursos.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Cursos/>,
      },
      {
        path: "/historia",
        element: <Historia />,
      },
      {
        path: "/contato",
        element: <Contatos />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
