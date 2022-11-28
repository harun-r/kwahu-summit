import React, {Fragment} from 'react';
import {Route, Routes} from "react-router-dom";

//Router Pages
import HomePage from "../pages/home-page/HomePage";
import AboutSummitPage from "../pages/about-summit/AboutSummitPage";
import SpeakerPage from "../pages/speaker-page/SpeakerPage";
import SpeakersPage2 from "../pages/speakers-page-2/SpeakersPage2";
const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-summit" element={<AboutSummitPage/>} />
                <Route path="/speakers" element={<SpeakerPage/>} />
                <Route path="/invited-personalities" element={<SpeakersPage2/>} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;
