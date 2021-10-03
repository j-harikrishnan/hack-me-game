import React, {useState} from 'react';
import styled from "@emotion/styled";

const LandingScreenWrap = styled.div`
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

const LandingMessageContainer = styled.div`
    background: rgba(255,255,255,0.80);
    max-width: 800px;
    padding: 5vh 3.5vw;
    max-height: 75vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h1 {
      font-size: 36px;
      text-align: center;
      color: #0d274d;
      span {
        display: inline-block;
        padding-left: 10px;
      }
    }
    .lead {
        margin-bottom: 1rem;
    }
    h5{
      color: #0d274d;
      font-weight: 400;
    }
    ul {
        margin-bottom: 0;
    }
`;

const ActionBar = styled.div`
    background: rgba(255,255,255,0.95);
    padding: 2vh 3.5vw;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .input_wrapper {
      border-radius: 10px;
      background: rgba(220,220,220,0.70)!important;
      input {
        border: none!important;
        width: 100%;
        padding: 0 0.75rem;
        padding-bottom: 8px!important;
        padding-top: 3px!important;
        background: transparent!important;
        &:hover, &:focus {
          outline: none!important;
        }
      }
      .extra-pad-textbox {
        padding-top: 18px!important;
        padding-bottom: 18px!important;
      }
      label {
         font-size: 13px;
         padding: 0 0.75rem;
         margin: 0!important;
         color: #666;
      }
    }
    button {
      height: 100%;
      border: none!important;
      padding: 1rem;
      width: 100%;
      border-radius: 10px;
      background: #1e4471;
      color: white;
      user-select: none;
      &:hover, &:focus {
        background: #0d274d;
        outline: none!important;
      }
    }
`;

export default ({ onStart = () => {} }) => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onStart({ name });
    };

    return <LandingScreenWrap bg={require('../img/background.jpg')}>
        <div className="bg_shade">
            <div>
                <LandingMessageContainer>
                    <h1>
                        <div>Welcome to HACK ME</div>
                        <span> SecCon 2020</span>
                        <span>Cyber Awareness Game</span>
                    </h1>
                    <div>
                        <h5>About</h5>
                        <p>
                            HACK ME is a simple game of choices. The security of your home and office
                            are in your hands, every small mistake has a big impact. This game helps you
                            learn about the various attack vectors hackers use to exploit your day to day
                            use devices and how you can protect against these attacks proactively.
                        </p>
                        <div className="lead">YOU are our best defence.</div>
                        <h5>How to Play?</h5>
                        <ul>
                            <li>Click on the Blue dots to securely setup the devices</li>
                            <li>Two devices are hidden[Easter Eggs]. Happy Hunting!</li>
                            <li>
                                Click on the “HACK ME” button to challenge the hacker to exploit
                                the devices after setting up all blue dots.
                            </li>
                            <li>Click on the Red dots to identify your mistakes.</li>
                            <li>Learn about how the exploit was done by clicking the “Learn more” button.</li>
                        </ul>
                    </div>
                </LandingMessageContainer>
                <ActionBar>
                    <form onSubmit={handleSubmit}>
                        <div className="row mx-0">
                            <div className="col-9 px-1">
                                <div className="input_wrapper">
                                    {name.length>0 && <label>Your Name</label>}
                                    <input
                                        value={name} onChange={(e) => setName(e.currentTarget.value)}
                                        title="Name" placeholder="Please enter your name here" aria-label="Name of User"
                                        className={!name.length>0 && 'extra-pad-textbox'} required
                                    />
                                </div>
                            </div>
                            <div className="col-3 px-1">
                                <button aria-label="Start Game" type="submit">Start Game</button>
                            </div>
                        </div>
                    </form>
                </ActionBar>
            </div>
        </div>
    </LandingScreenWrap>

};