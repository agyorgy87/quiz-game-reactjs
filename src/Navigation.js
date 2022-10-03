import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import QuizGame from "./components/QuizGame";

function Navigation() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quiz" element={<QuizGame/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
