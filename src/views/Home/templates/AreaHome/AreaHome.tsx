import AreaHomeCard from "../AreaHomeCard/AreaHomeCard";
import { AreaHomeCardContainer, AreaHomeContainer, AreaHomeTitle } from "./AreaHomeStyle";
import trabalhista from '../../../../img/trabalhista.jpg'
import bancario from '../../../../img/bancario.png'
import militar from '../../../../img/militar.jpg'

function AreaHome() {
    return (
        <AreaHomeContainer>
            <AreaHomeTitle>Acesse uma de nossas áreas de atuação:</AreaHomeTitle>
            <AreaHomeCardContainer>
                <AreaHomeCard 
                    AreaHomeImg={trabalhista}
                    AreaHomeTitle="Direito do Trabalho"
                />
                <AreaHomeCard
                    AreaHomeImg={bancario}
                    AreaHomeTitle="Direito do Consumidor Bancário"
                />
                <AreaHomeCard
                    AreaHomeImg={militar}
                    AreaHomeTitle="Direito Militar"
                />
                
            </AreaHomeCardContainer>
        </AreaHomeContainer>
    )
}

export default AreaHome