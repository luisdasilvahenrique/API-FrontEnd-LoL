import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export default function(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/summoner/:id" />    
            </Routes>
        </BrowserRouter>
    )
}