import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;

    @media (max-width: 1210px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        
    }

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
    height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 740px) {
        transform: scale(0.8);
    }

    @media (max-width: 525px) {
        transform: scale(0.5);
        margin-top: -100px;
    }
    
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
    font-weight: 800;

    &:hover {
        background-color: var(--primary-color);
        transition: 0.5s;
        color: #fff;
    }
    
`;

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 130px;
    outline: none;
    margin: 12px 0;
    padding: 20px;
    display: block;
`;

// export const Message = styled.h1`
//     width: 100%;
//     position: relative;
//     margin-bottom: 60px;
//     display: flex;
//     justify-content: center;
// `;

// export const Success = styled.div`
//     font-size: 20px;
//     color: green;
//     position: absolute;
//     animation: buttons .3s linear;
//     display: none;

//     @keyframes buttons{
//     0%{
//         transform: scale(0.1);
//     }
//     50%{
//         transform: scale(0.5);
//     }
//     100%{
//         transform: scale(1);
//     }
// }
// `;

// export const Danger = styled.div`
//     font-size: 20px;
//     color: red;
//     position: absolute;
//     transition: .3s;
//     animation: buttons .3s linear;
//     display: none;

//     @keyframes buttons{
//     0%{
//         transform: scale(0.1);
//     }
//     50%{
//         transform: scale(0.5);
//     }
//     100%{
//         transform: scale(1);
//     }
// }
// `;

export const ContactImg = styled.img`
    width: 600px;
    margin-right: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 90px;


    @media (max-width: 650px) {
        display: none;

    }
`;

export const StyledTitle = styled.h1`
    text-align: center;
    margin-top: 15px;
`;

export const StyledBackground = styled.div`

`;