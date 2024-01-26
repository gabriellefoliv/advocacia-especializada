import styled from "styled-components";

export const SobreMimContainer = styled.div`
    margin: 40px 80px;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);

    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
    }

`;

export const SobreMimImg = styled.img`
    width: 400px;

    @media (max-width: 1024px) {
        transform: scale(0.8);
    }

    @media (max-width: 640px) {
        transform: scale(0.6);
        margin-top: -110px;
        
    }
`;

export const SobreMimTextGroup = styled.div`
    margin: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: justify;

    @media (max-width: 1024px) {
        padding: 5px;
        margin: 0px;
    }

    @media (max-width: 640px) {
        margin-top: -70px;
    }
`;

export const SobreMimText = styled.p`
    opacity: 0.7;
    font-weight: 600;
    padding: 4px 0;
    animation: fade linear both;
    animation-timeline: view();


    @media (max-width: 1024px) {
        font-size: 14px;
        padding: 4px;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;

export const SobreMimTitle = styled.h1`
    font-weight: 600;
    background: linear-gradient(90deg, black, transparent);
    background-size: 200%;
    animation: reveal both linear;
    animation-timeline: view();
    background-repeat: no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;


    @keyframes reveal {
        0% {
            background-position-x: 200%;
        }
        50% {
            background-position-x: 0%;
        }
    }

`;