import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Error from "./pages/error";
import StyledNavbar from "./NavlinkComponent/styledNavbar";

// nested routes using BrowserRouter
export default function Main(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<StyledNavbar/>} >
                    <Route index element = {<Home />} />
                    <Route path="about" element = {<About />} />
                    <Route path="product" element = {<Product />} />
                    <Route path="contact" element = {<Contact />} />
                    <Route path="*" element = {<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}