import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as ReactDOM from 'react-dom/client'
import './index.css'
import React from "react";
import Historia from './conteudo-pagina/Historia.jsx'
import App from './App.jsx';
import Contatos from './Contatos.jsx';
import Cursos from './conteudo-pagina/Cursos.jsx';
import PagInfo from "./conteudo-pagina/PagInfo.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        index: true,
        element: <Cursos />,
      },
      {
        path: "historia",
        element: <Historia />,
      },
      {
        path: "contato",
        element: <Contatos />
      },
      {
        path:"curso/info",
        element:<PagInfo/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
