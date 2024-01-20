import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;
    /* background-color: var(--primary-color); */

`;

export const Banner = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index:-1;
    width: 2300px;
    /* .source {
        width: 1024px;
    } */
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-image: linear-gradient(rgba(11, 39, 65, 0.22) , rgba(0,0,0,0.5));
    }
`;

export const Hero  = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    /* @media (min-width: 640px) {
        display
    } */
    
    
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const Logo = styled.img`
  
`;

export const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    @media (max-width: 1024px) {
        display: none;
    }
   
`;

export const Text = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 10px 100px;
    /* color: var(--primary-color); */
`;


export const AboutUs = styled.p`
    color: #fff;
    padding: 10px;
    margin-right: 39px;
    font-size: 24px;
    text-align: justify;
    
`;

  


export const RightImg = styled.img`
    /* width: 200px;
    height: 500px; */
    margin: 0 200px;
    padding: 20px 0px;
    
`;
    
export const Buttons = styled.div`
      display: flex;
      justify-content: center;
      padding: 20px 0;
`;
    
export const ButtonEquipe = styled.button`
    width: 80px;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;

    align-items: center;
    background-clip: padding-box;
    background-color: var(--primary-color);
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
    margin: 0 10px;
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

export const MainContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -200px;
`;

export const AdvFoto = styled.img`
    width: 350px;
`;

export const FotoContainer = styled.div`
    width: 500px; 
    height: 300px;

`;

export const AdvSobre = styled.p`
    font-weight: 600;
    font-size: 42px;
`;

export const LastContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 100px;

    @media (max-width: 950px) {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 50px;
        
    }
`;