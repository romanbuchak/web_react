import React from "react";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Home from "./main/home/Home";
import Catalog from "./main/catalog/Catalog";
import Cart from "./main/cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SecondPage from "./main/catalog/SecondPage";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/novelty/:id" element={<SecondPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;