import { useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import QuizGame from "./pages/QuizGame";
import TimeUp from "./pages/TimeUp";
import { IntlProvider } from "react-intl";
import message_en from "./translation/en.json";
import message_hu from "./translation/hu.json";

const messages = {
    en: message_en,
    hu: message_hu
};

function Navigation() {

    const [locale, setLocale] = useState("en");

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <BrowserRouter basename="/quiz-game-reactjs">
                <Routes>
                    <Route path="/" element={<Home setLocale={setLocale}/>} />
                    <Route path="quiz/:language" element={<QuizGame/>} />
                    <Route path="timeup/:language" element={<TimeUp/>} />
                </Routes>
            </BrowserRouter>
        </IntlProvider>
  );
}

export default Navigation;

