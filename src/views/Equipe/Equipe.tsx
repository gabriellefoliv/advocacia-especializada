import { EquipeCardContainer, EquipeContainer, EquipeTextGroup, EquipeTitle, SubTitle } from "./EquipeStyle"
import EquipeCard from "./template/EquipeCard"
import Th from '../../img/thamicomfundo.jpeg'
import andre from '../../img/andre3.jpeg'
import Aluguel from "../Home/templates/Aluguel/Aluguel"


function Equipe() {
    return (
        <EquipeContainer>
            <EquipeTextGroup>
                <EquipeTitle>Equipe</EquipeTitle>
                <SubTitle>Entre em contato com um de nossos advogados</SubTitle>
            </EquipeTextGroup>
            <EquipeCardContainer>
                <EquipeCard
                    Img={Th}
                    Nome="Thamiris Ferreira"
                    Atuacao="Direito Trabalhista"
                    Telefone="(21) 96972-7164" 
                    hrefWpp="https://wa.me/message/V72SURNAJ3EKD1"
                    hrefEmail="mailto:thamirisferreiraadv@gmail.com"
                    
                />
                <EquipeCard
                    Img={andre}
                    Nome="André Tavares"
                    Atuacao="Auxiliar Jurídico"
                    Telefone="(21) 98100-5704" 
                    hrefWpp="https://wa.me/message/FVYFWSIX3YQHB1"
                    hrefEmail="mailto:andretavarescontato.adv@gmail.com"
                />
                
            </EquipeCardContainer>
            <Aluguel/>
        </EquipeContainer>

    )
}

export default Equipe