import { EquipeCardContainer, EquipeContainer, EquipeTextGroup, EquipeTitle, SubTitle } from "./EquipeStyle"
import EquipeCard from "./template/EquipeCard"
import Th from '../../img/thamicomfundo.jpeg'
import andre from '../../img/andre2.jpeg'


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
                    hrefWpp="https://www.github.com/gabriellefoliv"
                    hrefEmail="https://www.github.com/gabriellefoliv"
                />
                <EquipeCard
                    Img={andre}
                    Nome="André Tavares"
                    Atuacao="Auxiliar Jurídico"
                    Telefone="(21) 98100-5704" 
                    hrefWpp="https://www.github.com/gabriellefoliv"
                    hrefEmail="https://www.github.com/gabriellefoliv"
                />
                
            </EquipeCardContainer>
        </EquipeContainer>
    )
}

export default Equipe