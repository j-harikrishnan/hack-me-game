import React, { useState, useEffect } from 'react';

import Room from '../components/Room';
import LandingScreen from '../components/LandingScreen';
import Base from '../components/Base';
import ResultScreen from "../components/ResultScreen";

const MainPage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const [score, setScore] = useState(null);

    return <Base>
    {score !== null ? <ResultScreen score={score} user={userInfo} onReset={() => { setUserInfo(null); setScore(null); }} /> :
        userInfo ? <Room onFinish={setScore} /> :
        <LandingScreen onStart={setUserInfo} />
    }
    </Base>

};

export default MainPage;