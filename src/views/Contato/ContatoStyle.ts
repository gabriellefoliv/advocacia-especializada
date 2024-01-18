import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-right: 350px;
`;

export const ContactTextGroup = styled.div`
    background-color: var(--primary-color);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    
`;

export const ContactTitle = styled.h1`
    text-align: center;
`;

export const ContactSubtitle = styled.p`
    text-align: center;
`;

export const FormContainer = styled.div`
    width: 700px;
    height: 450px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    margin-right: 350px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


export const StyledForm = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    padding: 15px;
`;

export const StyledLabel = styled.label`
    font-weight: 600;
    
`;

export const StyledInput = styled.input`
    height: 35px;
    /* border: none; */
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    margin: 12px 0;
    padding: 20px;
    outline: none;
    

`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 12px;
    text-decoration: none;
    border: none;
    background-color: var(--secondary-color);
    
`;

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 130px;
    outline: none;
    margin: 12px 0;
    padding: 20px;
    display: block;

`;

