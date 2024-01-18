import styled from "styled-components";

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
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;