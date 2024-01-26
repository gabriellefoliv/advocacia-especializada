import styled from "styled-components";

export const AreaHomeContainer = styled.div`

    @media (max-width: 950px) {
        margin: 0;
    }

    @media (max-width: 640px) {
        
    }
`;

export const AreaHomeTitle = styled.h1`
    text-align: center;
    margin-left: 80px;
    font-size: 24px;

    background: linear-gradient(90deg, black, transparent);
    background-size: 200%;
    animation: reveal both linear;
    animation-timeline: view();
    background-repeat: no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;


    @keyframes reveal {
        from {
            background-position-x: 200%;
        }
        to {
            background-position-x: 0%;
        }
    }

    @media (max-width: 640px) {
        margin: 0;
        margin-top: 50px;
    }
`;

export const AreaHomeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;

    @media (max-width: 640px) {
        margin: 0;
    }
`;

export const TodasAreas = styled.a`
    padding: 18px;
    color: var(--primary-color);
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    background: #fff;
    transition: 0.5s;
    box-shadow: 6px 6px 0 var(--terciary-color);
    transform: skewX(-5deg);

    &:hover {
        color: #fff;
        background-color: var(--primary-color);
        transition: 0.5s;
        transform: scale(1.01);
    }

    &:focus {
        outline: none;
    }
`;