import { Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Cursos from "./components/Cursos"
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