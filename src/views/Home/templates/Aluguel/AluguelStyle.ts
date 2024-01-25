import styled from "styled-components";

export const AluguelContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);

`;


export const AluguelTitle = styled.h1`
  
`;

export const AluguelSubtitle = styled.p`
    color: #444444;
`;

export const AluguelButton = styled.a`
    display: flex;
    width: 80px;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;

    align-items: center;
    background-clip: padding-box;
    background-color: var(--primary-color);
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 40px;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:hover {
        transform: translateY(-3px);
    }

    &:focus {
        background-color: #fb8332;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

    }

    &:active {
        background-color: #c85000;
        box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
        transform: translateY(0);
    }

`;

