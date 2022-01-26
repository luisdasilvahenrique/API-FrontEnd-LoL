import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Summoner from "../pages/Summoner";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/summoner/:id" element={<Summoner />} />    
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;