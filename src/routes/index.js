import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Summoner from "../pages/Summoner";

export default function Exec(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/summoner/:id" component={Summoner} />    
            </Routes>
        </BrowserRouter>
    );
}
