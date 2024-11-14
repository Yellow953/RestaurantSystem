import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import Burgers from "../Pages/Customer/Burgers";
import Orders from "../Pages/Customer/Orders";
import Login from "@/Pages/Auth/Login";
import BurgerDetails from "@/Pages/Customer/BurgerDetails";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/burgers/:id" element={<BurgerDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Burgers />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Welcome />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
