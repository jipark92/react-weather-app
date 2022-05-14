import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/about_contact/About"
import Contact from "./components/about_contact/Contact"

export default function RouteSwitch() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}