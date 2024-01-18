import { AboutUs, Banner, HomeContainer, Hero, Text, Wrapper, LogoContainer, Logo, TextGroup, Buttons, ButtonEquipe, Button, ButtonContainer, ButtonImg, ButtonText, MainContainer, AdvFoto, AdvSobre, FotoContainer, LastContainer } from "./HomeStyle"
// import Law from '../../img/thamifoto.png'
import Law from '../../img/videos/ultima.mp4'
import AdvLogo from '../../img/advbold.png'
import Whatsapp from '../../img/whatsapp.png'
import Adv from '../../img/assinando.jpeg'
import AreaHome from "./templates/AreaHome/AreaHome"
import Atendimento from "./templates/Atendimento/Atendimento"

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
                            {/* <AboutUs>
                            Priorizamos o atendimento humanizado e personalizado, esse é o nosso diferencial, 
                            que apesar do Escritório ser Digital, optamos sempre que possível, dentro das 
                            possibilidades dos nossos clientes, pelo atendimento presencial ou por videoconferência. 
                            </AboutUs>
                            <AboutUs>
                            Oferecemos suporte via WhatsApp todos os dias da semana para sanar eventuais dúvidas 
                            e esclarecer andamentos processuais relevantes.
                            </AboutUs> */}
                        <Buttons>
                            <ButtonEquipe>Junte-se a Equipe</ButtonEquipe>
                            <Button>
                                <ButtonContainer>
                                    <ButtonImg src={Whatsapp}/>
                                    <ButtonText>Tenha um atendimento personalizado</ButtonText>
                                </ButtonContainer>
                            </Button>
                        </Buttons>
                        </TextGroup>
                    </Hero>
                </Wrapper>
            </HomeContainer>

            <MainContainer>
                <FotoContainer>
                    <AdvFoto src={Adv}/>
                </FotoContainer>
                
                <AdvSobre>Sobre mim</AdvSobre>
            </MainContainer>


            <LastContainer>
                <AreaHome/>
                <Atendimento/>
            </LastContainer>

        
        </>
    )
}

export default Home
