import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

export default function RouteSwitch() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}