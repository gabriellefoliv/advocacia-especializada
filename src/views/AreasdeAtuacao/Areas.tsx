import { AreaButton, AreaCardContainerSup, AreaContainer, AreaSubTitle, AreaTextGroup, AreaTitle } from "./AreasStyle"
import AreaCard from "./template/AreaCard/AreaCard"
import Trabalho from '../../img/trabalhista.jpg'
import WppButton from "../../components/WppButton/WppButton"
import Militar from '../../img/militar.jpg'
import Banco from '../../img/bancario.png'
import DCivil from '../../img/direito_civil_foto.jpg'
import DConsumidor from '../../img/direito-consumidor.jpg'
import DCriminal from '../../img/direitocriminal.jpg'
import DFamilia from '../../img/direitodefamilia.jpg'
import DImobiliario from '../../img/direitoimobiliario.jpg'
import DPrevidenciario from '../../img/direitoprevidenciario.jpg'
import DSucessoes from '../../img/direitosucessoes.jpg'

function Areas() {
    return (
        <AreaContainer>
            <AreaTextGroup>
                <AreaTitle>Áreas de Atuação</AreaTitle>
                <AreaSubTitle>Dentre os serviços prestados pela Thamiris Ferreira Advocacia destacamos:</AreaSubTitle>
            </AreaTextGroup>
            <AreaCardContainerSup>

                <AreaCard
                    AChref="/areasdeatuacao/trabalhista"
                    ACTitle="Direito do Trabalho"
                    ACImg={Trabalho}
                />
                <AreaCard
                    AChref="/areasdeatuacao/civel"
                    ACTitle="Direito Civil"
                    ACImg={DCivil}
                />
                <AreaCard
                    AChref="/areasdeatuacao/consumidor"
                    ACTitle="Direito do Consumidor"
                    ACImg={DConsumidor}
                />
                <AreaCard
                    AChref="/areasdeatuacao/previdenciario"
                    ACTitle="Direito Previdenciário"
                    ACImg={DPrevidenciario}
                />
                <AreaCard
                    AChref="/areasdeatuacao/criminal"
                    ACTitle="Direito Criminal"
                    ACImg={DCriminal}
                />
                <AreaCard
                    AChref="/areasdeatuacao/imobiliario"
                    ACTitle="Direito Imobiliário"
                    ACImg={DImobiliario}
                />
                <AreaCard
                    AChref="/areasdeatuacao/familia"
                    ACTitle="Direito de Família"
                    ACImg={DFamilia}
                />
                <AreaCard
                    AChref="/areasdeatuacao/sucessoes"
                    ACTitle="Direito de Sucessões"
                    ACImg={DSucessoes}
                />
                <AreaCard
                    AChref="/areasdeatuacao/militar"
                    ACTitle="Direito Militar"
                    ACImg={Militar}
                />
                <AreaCard
                    AChref="/areasdeatuacao/bancario"
                    ACTitle="Direito do Consumidor Bancário"
                    ACImg={Banco}
                />
            </AreaCardContainerSup>
            <AreaButton>    
                <WppButton/>
            </AreaButton>
        </AreaContainer>
    )
}

export default Areas