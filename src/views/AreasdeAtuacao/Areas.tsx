import AreaCard from "./templates/AreaCard/AreaCard"
import Trabalho from '../../img/trabalhista.jpg'
import WppButton from "../../components/WppButton"
import Militar from '../../img/militar.jpg'
import Banco from '../../img/bancario.png'
import DCivil from '../../img/direito_civil_foto.jpg'
import DConsumidor from '../../img/direito-consumidor.jpg'
import DCriminal from '../../img/direitocriminal.jpg'
import DFamilia from '../../img/direitodefamilia.jpg'
import DPrevidenciario from '../../img/direitoprevidenciario.jpg'
import { Header } from "../../components/Header"

function Areas() {
    return (
        <div>
            <Header
                title="Áreas de Atuação"
                subtitle="Dentre os serviços prestados pela Thamiris Ferreira Advocacia destacamos:"
            />

            <div className="flex justify-center items-center mx-10 flex-wrap">

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
                    AChref="/areasdeatuacao/familia"
                    ACTitle="Direito de Família e Sucessões"
                    ACImg={DFamilia}
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
            </div>
            <div>
                <WppButton />
            </div>
        </div>
    )
}

export default Areas