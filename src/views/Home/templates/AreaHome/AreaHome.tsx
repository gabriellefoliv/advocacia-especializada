import AreaHomeCard from "../AreaHomeCard/AreaHomeCard";
import { AreaHomeCardContainer, AreaHomeContainer, AreaHomeTitle, TodasAreas } from "./AreaHomeStyle";
import trabalhista from '../../../../img/trabalhista.jpg'
import bancario from '../../../../img/bancario.png'
import militar from '../../../../img/militar.jpg'

function AreaHome() {
    return (
        <AreaHomeContainer>
            <AreaHomeTitle>Acesse uma de nossas áreas de atuação:</AreaHomeTitle>
            <AreaHomeCardContainer>
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/trabalhista" 
                    AreaHomeImg={trabalhista}
                    AreaHomeTitle="Direito do Trabalho"
                />
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/bancario"
                    AreaHomeImg={bancario}
                    AreaHomeTitle="Direito do Consumidor Bancário"
                />
                <AreaHomeCard
                    hrefHomeCard="/areasdeatuacao/militar"
                    AreaHomeImg={militar}
                    AreaHomeTitle="Direito Militar"
                />
            <TodasAreas href="/areasdeatuacao">Conheça todas as áreas</TodasAreas>
            </AreaHomeCardContainer>
        </AreaHomeContainer>
    )
}

export default AreaHome