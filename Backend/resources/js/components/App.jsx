import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Cars from "./Cars";
import Motorcycles from "./Motorcycles";
import Planes from "./Planes";
import Ships from "./Ships";
import Trains from "./Trains";
import Trucks from "./Trucks";
import Vintage from "./Vintage";
import Shop from "./Shop";
import Login from "./login";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Register from "./Register";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/lygi.web/public/" element={<NavBar />}>
                        <Route index element={<Home />} />
                        <Route path="/lygi.web/public/home/" element={<Home />} />
                        <Route path="/lygi.web/public/cars" element={<Cars />} />
                        <Route path="/lygi.web/public/cars/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/motorcycles" element={<Motorcycles />} />
                        <Route path="/lygi.web/public/motorcycles/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/planes" element={<Planes />} />
                        <Route path="/lygi.web/public/planes/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/ships" element={<Ships />} />
                        <Route path="/lygi.web/public/ships/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/trains" element={<Trains />} />
                        <Route path="/lygi.web/public/trains/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/trucks" element={<Trucks />} />
                        <Route path="/lygi.web/public/trucks/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/vintage" element={<Vintage />} />
                        <Route path="/lygi.web/public/vintage/:product" element={<Shop />} />
                        <Route path="/lygi.web/public/shop" element={<Shop />} />
                        <Route path="/lygi.web/public/login" element={<Login />} />
                        <Route path="/lygi.web/public/checkout" element={<Checkout />} />
                        <Route path="/lygi.web/public/cart" element={<Cart />} />
                        <Route path="/lygi.web/public/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
