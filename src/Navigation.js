import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import QuizGame from "./pages/QuizGame";
import TimeUp from "./pages/TimeUp";

function Navigation() {
    return (
    <BrowserRouter basename="/quiz-game-reactjs">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quiz/:language" element={<QuizGame/>} />
            <Route path="timeup/:language" element={<TimeUp/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
