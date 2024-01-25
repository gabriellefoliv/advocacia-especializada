import styled from "styled-components";

export const AreaCardContainer = styled.a`
    width: 320px;
    height: 115px;
    background-color: #fff;
    /* border-radius: 10px; */
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0px;
    margin-top: 50px;
    text-decoration: none;

    &:hover {
        box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.7);
        transition: 0.3s;
        /* transform: translate(2.5px, 0) rotate(2.5deg) scale(1.1); */
        transform: scale(1.1);
        
        &:before { transform: translate(-2.5px, 0) rotate(-2.5deg); }
        &:after { transform: translate(-5px, 0) rotate(-5deg); }
        
    }
    transform-origin: center bottom;
    
    &:before,
    &:after {
        transform-origin: 50% 100%;
    }
    
  

`;

export const AreaCardImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 5%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #FFFFFF;
    padding: .2rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    margin-left: 5px;

`;

export const AreaCardTitle = styled.h1`
    padding: 5px 0;
    color: var(--primary-color);
    font-size: 18px;

    &:hover {
        color: var(--terciary-color);
    }
`;

export const AreaCardMais = styled.button`
    
    padding: 7px;
    border: none;
    background-color: var(--terciary-color);
    color: #fff;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;

export const AreaCardGroup = styled.div`
    margin-left: 10px;

`;