import styled from "styled-components";

export const AreaHomeContainer = styled.div`

    @media (max-width: 950px) {
        margin: 0;
    }
`;

export const AreaHomeTitle = styled.h1`
    text-align: center;
    margin-left: 80px;
    font-size: 24px;
`;

export const AreaHomeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;
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
    transition: 1s;
    box-shadow: 6px 6px 0 var(--primary-color);
    transform: skewX(-10deg);

    &:hover {
        color: #fff;
        background-color: var(--primary-color);
        transition: 1.5s;
    }

    &:focus {
        outline: none;
    }
`;