import React, {useState} from 'react';
import styled from "@emotion/styled";

import PopUp from "./PopUp";

const ResultScreenWrap = styled.div`
    background-image: ${({bg}) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    .bg_shade{
        background: rgba(0,0,0,0.5);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ResultMessageContainer = styled.div`
    background: rgba(255,255,255,0.80);
    max-width: 800px;
    padding: 5vh 3.5vw;
    border-radius: 10px;
    user-select: none;
    h1 {
      font-size: 34px;
      text-align: center;
      color: #0d274d;
      span {
        display: inline-block;
        padding-left: 10px;
      }
    }
    img {
        max-height: 20vh;
    }
`;

const ScoreWrap = styled.div`
    font-size: 40px;
    font-weight: 300;
    padding: 0.25rem 0;
`;

const CreditButton = styled.button`
    border: none!important;
    background: none!important;
    font-weight: 600;
    text-decoration: none!important;
    color: #0d274d!important;
    &:focus, &:hover {
        outline: none;
    }
`;

const CreditsCard = styled.div`
     background: white;
     border-radius: 1.5rem;
     padding: 5vh 2vw;
     width: 1000px;
     max-width: 100%;
     user-select: none;
     position: relative;
     h3 {
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 35px;
        margin-bottom: 1rem;
     }
     .col-md-4 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            border-radius: 100vw;
            max-width: 100%;
            width: 220px;
            margin-bottom: 1.2rem;
            filter: drop-shadow(2px 4px 12px rgba(0,10,180,0.5)) 
         }
     }
     h4 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 3px;
     }
     a {
        text-decoration: none;
        color: #0d274d;
        font-size: 13px;
        text-align: center;
        display: block;
     }
`;

const SurveyButton = styled.a`
    text-decoration: none!important;
    background: #1e4471!important;
    color: white!important;
    padding: 0.75rem;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    border-radius: 0.35rem;
    margin-right: 8px;
    display: flex;
    align-items: center;
    height: 100%;
`;

const CloseButton = styled.button`
    border: none!important;
    outline: none!important;
    background: transparent!important;
    position: absolute;
    top: 10px;
    right: 10px;
    img {
    width: 32px!important;
    }
`;

export default ({ user, score, onReset = () => {} }) => {

    const [showCredits, setShowCredits] = useState(false);

    return  <ResultScreenWrap bg={require('../img/background.jpg')}>
        <div className="bg_shade">
            <CloseButton onClick={onReset}>
                <img alt="reset" src="https://img.icons8.com/fluent/2x/reset.png" />
            </CloseButton>
            <div style={{ maxWidth: '800px'}}>
                <ResultMessageContainer>
                    <h1>
                        <span>Thank you for playing HACK ME</span>
                        <span> SecCon 2020</span>
                        <span>Cyber Awareness Game</span>
                    </h1>
                    <div className="py-2 text-center">
                        <img draggable="false" src={require('../img/you_button.png')} alt="You are our best defence" />
                    </div>
                    <div className="d-flex justify-content-center mt-2 text-center">
                        <div>
                            <h4>{score > 8 ? 'Great Job' : score > 5 ?  'Good Job' : score > 3 ? 'Nice Work' : 'That\'s okay '} {user.name}!</h4>
                            <div>Here’s your HACK ME defense score:</div>
                            <ScoreWrap>{score}/10</ScoreWrap>
                        </div>
                    </div>
                    {showCredits && <PopUp maxWidth="1000px" isOpen={showCredits}>
                        <CreditsCard>
                                <CloseButton onClick={() => setShowCredits(false)}>
                                    <img alt="close" src="https://img.icons8.com/fluent/2x/close-window.png" />
                                </CloseButton>
                                <h3>Credits</h3>
                                <div className="row mx-0">
                                    <div className="col-md-4 px-2">
                                        <div>
                                            <img draggable="false" alt="Harikrishnan J" src={require('../img/team/harikrishnan.jpg')} />
                                            <h4>Harikrishnan J</h4>
                                            <a href="mailto:hjayacha@cisco.com">hjayacha@cisco.com</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-2">
                                        <div>
                                            <img draggable="false" alt="Prapanch Ramamoorthy" src={require('../img/team/prapanch.jpg')} />
                                            <h4>Prapanch Ramamoorthy</h4>
                                            <a href="mailto:praprama@cisco.com">praprama@cisco.com</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 px-2">
                                        <div>
                                            <img draggable="false" alt="Ashwin Shenoy" src={require('../img/team/ashwin.png')} />
                                            <h4>Ashwin Shenoy</h4>
                                            <a href="mailto:aswinshenoy65@gmail.com">aswinshenoy65@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                        </CreditsCard>
                    </PopUp>}
                    <div className="row mx-0">
                        <div className="col-md-4 d-flex align-items-center p-1">
                            <CreditButton onClick={() => setShowCredits(true)}>Credits</CreditButton>
                        </div>
                        <div className="col-md-4 d-flex text-center line-height-1 align-items-center justify-content-center p-1">
                            <CreditButton as="a"
                                target="_blank"
                                href="https://www.vice.com/en_us/article/d3devm/motherboard-guide-to-not-getting-hacked-online-safety-guide"
                            >
                                Learn More
                            </CreditButton>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-end p-1">
                            <SurveyButton
                                href="https://www.cisco.vovici.com/se/2C85931E639774C8"
                                target="_blank"
                            >
                                Quit Game
                            </SurveyButton>
                        </div>
                    </div>
                </ResultMessageContainer>
                <div className="text-center px-4" style={{ fontSize: '12px', color: '#DDD' }}>
                    <div className="mt-2 lead">Disclaimer</div>
                    <p className="mt-1 line-height-1">
                        The main aim of the game is to make you aware of the various cyber attacks on daily use devices,
                        so getting a wrong answer here is OK , but remember to read the Learn more section and equip yourself
                        for the real world.So go ahead and try again and get a perfect 10(It's fine with us 😉)
                    </p>
                </div>
            </div>
        </div>
    </ResultScreenWrap>
};
