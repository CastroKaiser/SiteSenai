import { Outlet } from "react-router-dom"
import Menu from "./conteudo-pagina/Menu"
import Footer from "./conteudo-pagina/Footer"
import React from "react"

function App() {
    return(
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default App