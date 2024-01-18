import { EquipeCardContainer, EquipeContainer, EquipeTitle, SubTitle } from "./EquipeStyle"
import EquipeCard from "./template/EquipeCard"
import Th from '../../img/thamicomfundo.jpeg'


function Equipe() {
    return (
        <EquipeContainer>
            <EquipeTitle>Equipe</EquipeTitle>
            <SubTitle>Entre em contato com um de nossos advogados</SubTitle>
            <EquipeCardContainer>
                <EquipeCard
                    Img={Th}
                    Nome="Thamiris Ferreira"
                    Atuacao="Direito Trabalhista"
                    Telefone="(21) 98144-9194"
                />
                
                
            </EquipeCardContainer>
        </EquipeContainer>
    )
}

export default Equipe