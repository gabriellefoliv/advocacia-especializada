import { HeaderContainer, HeaderLogo, HeaderNav, Li, Tab, Ul } from "./HeaderStyle";
import Balanca from '../../img/balanca.png'

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src={Balanca}/>
            <HeaderNav>
                <Ul>
                    <Li>
                        <Tab href='/'>Home</Tab>
                    </Li>
                    <Li>
                        <Tab href='/equipe'>Equipe</Tab>
                    </Li>
                    <Li>
                        <Tab href='/areasdeatuacao'>Áreas de Atuação</Tab>
                    </Li>
                </Ul>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header