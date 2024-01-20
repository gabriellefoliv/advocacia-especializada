import { HeaderContainer, HeaderLogo, HeaderNav, Li, Menu, Overlay, Tab, Ul } from "./HeaderStyle";
import Balanca from '../../img/balanca.png'
import close from '../../img/icon-close.svg'
import hamburguer from '../../img/icon-hamburger.svg'
import { useState } from "react";

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenuActive = () => {
        setMenuActive(!menuActive);
        window.scrollTo(0, 0);
    }
    return (
        <>
            <Overlay className={menuActive ? 'active' : ''} />
            <HeaderContainer>
                <HeaderLogo src={Balanca}/>
                <HeaderNav>
                    <Ul className={menuActive ? 'active':'list'}>
                        <Li>
                            <Tab href='/'>Home</Tab>
                        </Li>
                        <Li>
                            <Tab href='/equipe'>Equipe</Tab>
                        </Li>
                        <Li>
                            <Tab href='/areasdeatuacao'>Áreas de Atuação</Tab>
                        </Li>
                        <Li>
                            <Tab href='/contato'>Contato</Tab>
                        </Li>
                    </Ul>
                    <Menu src={menuActive ? close : hamburguer} alt="menu" onClick={toggleMenuActive} className={menuActive ? 'close hamburguer' : 'hamburguer'}/>
                </HeaderNav>
            </HeaderContainer>
        </>
    )
}

export default Header