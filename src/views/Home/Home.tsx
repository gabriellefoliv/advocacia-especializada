import { AboutUs, Banner, HomeContainer, Hero, Text, Wrapper, LogoContainer, Logo, TextGroup, Buttons, LastContainer } from "./HomeStyle"
// import Law from '../../img/thamifoto.png'
import Law from '../../img/videos/ultima.mp4'
import AdvLogo from '../../img/advbold.png'
import AreaHome from "./templates/AreaHome/AreaHome"
import Atendimento from "./templates/Atendimento/Atendimento"
import WppButton from "../../components/WppButton/WppButton"
import { ButtonHolder } from "../AreasdeAtuacao/template/AreaPageExample/AreaPageExampleStyle"
import SobreMim from "./templates/SobreMim/SobreMim"

function Home() {
    return (
        <>
            <HomeContainer>
                {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
                <Wrapper>
                    <Banner autoPlay loop playsInline muted>
                        <source src={Law} type="video/mp4"/>
                        
                    </Banner>

                    <Hero>
                        <LogoContainer>
                            <Logo src={AdvLogo} />
                        </LogoContainer>
                        <TextGroup>
                            <Text>ADVOCACIA ESPECIALIZADA</Text>
                            <AboutUs>
                            A nossa equipe é composta por profissionais altamente qualificados nos mais 
                            diversos rumos da Advocacia para desenvolverem estratégias eficazes para a 
                            solução dos seus problemas.
                            </AboutUs>
                        <Buttons>
                            <WppButton/>
                        </Buttons>
                        </TextGroup>
                    </Hero>
                </Wrapper>
            </HomeContainer>

            <SobreMim/>

            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>

            <LastContainer>
                <AreaHome/>
                <Atendimento/>
            </LastContainer>

            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>

            

        
        </>
    )
}

export default Home
