import styled from "styled-components";

export const APHeader = styled.div`
    background-color: var(--primary-color);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const APTitle = styled.h1`
    text-align: center;
`;



export const APContainer = styled.div`
    margin: 50px;
    padding: 30px;
    /* height: 500px; */
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
    border: none;
    display: flex;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`;

export const APImg = styled.img`
    width: 550px;
    border-radius: 1%;
    object-fit: cover;

    margin: 10px 20px;
    border-radius: 20px;
    object-fit: cover;
    padding: 10px 20px;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 17px rgba(0,0,0,0.06);

    display: flex;
    justify-content: center;

    @media (max-width: 764px) {
        width: 90%;
        
    }
`;

export const APSobreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const APSobre = styled.p`
    padding: 0 20px;
    text-align: justify;
    color: gray;
    white-space: pre-line;

`;

export const ButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;