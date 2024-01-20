import styled from "styled-components";

export const EquipeContainer = styled.div`
    /* background-color: var(--terciary-color); */
    /* padding: 30px 20px; */
    
`;

export const EquipeTextGroup = styled.div`
    background-color: var(--primary-color);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const EquipeTitle = styled.h1`
    text-align: center;
`;

export const SubTitle = styled.p`
    text-align: center;
    color: #fff;
`;

export const EquipeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;

    /* @media (min-width: 1024px) {
        align-items: start;
        min-width: 120px;
    } */

    /* &.col {
        padding: 0;
        flex-direction: column;
    } */

    a {
        color: #fff;
        width: 20px;
        height: 20px;
    }

    .socialMediaImg {
        width: 50px;
        height: 50px;
        svg path {
            transition: fill 0.5s ease-in-out;
        }

        &:hover svg path {
        fill: var(--LimeGreen);
        }
    }
`