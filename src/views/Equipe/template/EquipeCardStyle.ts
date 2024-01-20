import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: 440px;
    background-color: #fff;
    margin: 30px 70px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const AdvImg = styled.img`
    width: 250px;
    height: 250px;
    margin: 10px 20px;
    border-radius: 20px;
    object-fit: cover;
    padding: 10px 20px;
    margin-left: 20px;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
    
`;

export const AdvName = styled.h3`
    text-align: center;
    margin-top: -5px;
    margin-bottom: 5px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1px;
    padding: 8px 0;
`;

export const Tag = styled.p`
    margin-left: 5px;
`;

export const Title = styled.p`
    font-weight: 600;
`;

export const EquipeWpp = styled.a`
    display: flex;
    width: 80px;
    height: 40px;
    padding: 0 5px;
    border-radius: 10px;
    border: none;
    align-items: center;
    background-clip: padding-box;
    background-color: green;
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
    margin: 0;
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

export const EquipeEmail = styled.a`
    display: flex;
    width: 80px;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;

    align-items: center;
    background-clip: padding-box;
    background-color: black;
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
    margin: 0;
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