import styled from "styled-components";

export const Overlay = styled.div`
    &.active {
        position: absolute;
        top: 52px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(0,0,0);
        background: linear-gradient(180deg, hsl(233, 26%, 24%) 0%, transparent 100%);
        transition: 1s;
    }
`;

export const HeaderContainer = styled.div`
    background-color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    padding: 16px 12%;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.01);
    
   
`;

export const HeaderLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
`;

export const HeaderNav = styled.nav`
    flex:1;
    padding: 16px 12%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 50;

    @media (min-width: 1024px) {
        .hamburguer {
            display: none;
        }
    }
`;

export const Ul = styled.ul`
    padding: 30px 0;
    margin: 0;
    border-radius: 5px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: #fff;
    width: 80vw;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    

    &.active {
        display: flex;
    }

    @media (min-width: 1024px) {
        width: auto;
        padding: 0;
        position: static;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        gap: 24px;
        transform: none;
    }
    
`;

export const Li = styled.li`
    text-align: center;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 18px;

    @media (min-width: 1024px) {
        font-size: 16px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -28px;
            width: 100%;
            height: 3px;
            display: block;
            opacity: 0;
            transition: 0.5s;
        }
        &:hover::after {
            opacity: 1;
        }
    }
`;

export const Tab = styled.a`
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;

export const Menu = styled.img`
    z-index: 5;
    width: 24px;
    cursor: pointer;

    &.close {
        width: 20px;
        height: 20px;
    }
`;