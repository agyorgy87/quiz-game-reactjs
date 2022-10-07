import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import QuizGame from "./pages/QuizGame";

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
