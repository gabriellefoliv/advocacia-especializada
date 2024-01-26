import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: var(--primary-color);
    display: flex;
    padding: 0px 20px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 240px;
`;

export const FooterLogo = styled.img`
    width: 400px;
    object-fit: cover;
    margin-top: -55px;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin: 0 60px;
    color: #fff;

`;

export const FooterShortcut = styled.a`
    outline: none;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    padding: 1px 10px;
    margin-bottom: 6px;
    
`;

export const FooterTitle = styled.p`
    text-align: center;
    color: #fff;
    margin-top: 20px;
    padding-top: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    display: flex;
    margin-top: -50px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (min-width: 1024px) {
        align-items: start;
        min-width: 120px;
    }

    a {
        color: #fff;
    }

    .socialMediaImg {
        svg path {
            transition: fill 0.5s ease-in-out;
        }

        &:hover svg path {
        fill: var(--secondary-color);
        }
    }
`

export const CopyrightContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CopyrightTitle = styled.p`
    color: #fff;

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`;