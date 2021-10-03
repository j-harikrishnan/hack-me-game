import React from 'react';
import styled from "@emotion/styled";
import shortid from 'shortid';

const ScenarioWrapper = styled.div`
    background: rgba(255,255,255,0.75);
    width: 100%;
    min-width: 500px;
    min-height: 50vh;
    max-width: 100vw;
    border-radius: 15px;
    position: relative;
    .row {
        padding: 2vh 2.5vw;
    }
`;

const HeaderSection = styled.div`
    background: rgba(255,255,255,0.6);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    color: black;
    padding: 3vh 2.5vw;
    h5 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }
`;

const OptionButton = styled.button`
    background: #0d274d;
    color: white;
    border-radius: 15px;
    padding: 0.8rem 1rem;
    text-align: left;
    width: 100%;
    margin: 0.35rem 0;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.5);
    border: none!important;
    line-height: 1.35;
    transition: all 0.5s ease;
    &:hover, &:focus {
      outline: none!important;
      background: white;
      color: #0d274d;
      transition: all 0.5s ease;
    }
`;

const CloseButton = styled.button`
     border: none!important;
     outline: none!important;
     background: transparent!important;
     position: absolute;
     top: 5px;
     right: 5px;
     img {
        width: 32px;
     }
`

export default ({
    device, image, scenario, options, onClose, onAnswer,
}) => {

    return <ScenarioWrapper>
        <CloseButton onClick={onClose}><img alt="close" src="https://img.icons8.com/fluent/2x/close-window.png" /></CloseButton>
        <div>
            <HeaderSection>
                <h5>{device}</h5>
                <p>{scenario}</p>
            </HeaderSection>
            <div className="row mx-0">
                <div className="col-md-8 px-1">
                    <div className="w-100">
                        <div>
                            {(options && options.length > 0) && options.map((o) =>
                                <OptionButton key={shortid.generate()} onClick={() => onAnswer(o)}>
                                    {o.label}
                                </OptionButton>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center px-2">
                    <img draggable="false" alt={device} style={{ width: '220px', maxWidth: '100%' }} src={image} />
                </div>
            </div>
        </div>
    </ScenarioWrapper>
}