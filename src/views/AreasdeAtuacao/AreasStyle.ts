import styled from "styled-components";

export const AreaContainer = styled.div`
    /* padding: 20px; */
    /* margin-top: 30px; */
`;

export const AreaTextGroup = styled.div`
    background-color: var(--primary-color);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const AreaTitle = styled.h1`
    text-align: center;
    color: #fff;
`;

export const AreaSubTitle = styled.p`
    color: #fff;
    text-align: center;

`;

export const AreaCardContainerSup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    gap: 12px;
    flex-wrap: wrap;

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5vw;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: .5vw;

    }
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 30px;
`;