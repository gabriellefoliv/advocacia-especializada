import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    height: 80px;
    display: flex;
    padding: 16px 12%;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
    
   
`;

export const HeaderLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
`;

export const HeaderNav = styled.nav`
    flex:1;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
    gap: 24px;
    
`;

export const Li = styled.li`
  
`;

export const Tab = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;