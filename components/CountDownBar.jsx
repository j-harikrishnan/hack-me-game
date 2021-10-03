import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ProgressBarWrap = styled.div`
    height: ${({ left }) => left > 0 ? `8px` : 0};
    width: 100%;
    transition: ease-in background 5s;
    margin-bottom: 1px;
    background: ${({ total, left }) =>
    total && left ?
        (total-left)/total*100 > 80 ?
            `linear-gradient(to right, #e2231a ${(total-left)/total*100}%, #0d274d ${(total-left)/total*100}% 100%);`
            : (total-left)/total*100 > 50 ?
            `linear-gradient(to right, #fbab18 ${(total-left)/total*100}%, #0d274d ${(total-left)/total*100}% 100%);`
            : `linear-gradient(to right, #00bceb ${(total-left)/total*100}%, #0d274d ${(total-left)/total*100}% 100%);`
        : null
};
`;

const ProgressBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const calculateSecondsLeft = (date) => date ? (date.getTime() - new Date().getTime())/1000 : 0;

const CountDownBar = ({ total, timestamp, onEnd = () => {}, questionsAnswered = 0, totalQuestions = 10 }) => {
    const [left, setSec] = useState(-1);

    useEffect(() => {
        if(timestamp){
            const interval = setInterval(() => {
                const secLeft = calculateSecondsLeft(timestamp);
                setSec(secLeft > 0 ? secLeft : -1);
                if(secLeft < 1) {
                    onEnd(true);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timestamp]);

    return <ProgressBarContainer>
        <ProgressBarWrap total={total} left={left > 0 ? left : 0} />
        <div className="mt-1 row mx-0" style={{ fontSize: '16px', color: '#DDD' }}>
            <div className="col-6 p-1 d-flex align-items-center">
                <img style={{ width: '24px' }} alt="time left" src="https://img.icons8.com/fluent/2x/hourglass.png" />
                { left  && <div className="d-inline-block px-1">{
                    left > 60 ? `${Math.floor(left/60)} min ${Math.round(left%60)} sec left` :
                    left >= 0 ? `${Math.round(left)} sec left` : null
                }</div>}
            </div>
            <div className="col-6 py-1 px-2 d-flex align-items-center justify-content-end">
                <img style={{ width: '24px' }} alt="time left" src="https://img.icons8.com/fluent/2x/tick-box.png" />
                <div className="ml-1">{questionsAnswered}/{totalQuestions} answered</div>
            </div>
        </div>
    </ProgressBarContainer>;
};

export default CountDownBar;