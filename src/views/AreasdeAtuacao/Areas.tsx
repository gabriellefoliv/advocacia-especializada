import AreaCard from "./templates/AreaCard/AreaCard"
import WppButton from "../../components/WppButton"
import DCriminal from '../../img/direitocriminal.jpg'
import DFamilia from '../../img/direitodefamilia.jpg'
import { Header } from "../../components/Header"

function Areas() {
    return (
        <div>
            <Header
                title="Áreas de Atuação"
                subtitle="Dentre os serviços prestados pela Thamiris Ferreira Advocacia destacamos:"
            />

            <div className="mt-24 md:mt-10 flex justify-center items-center mx-10 flex-wrap">
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
            </div>
            <div>
                <WppButton />
            </div>
        </div>
    )
}

export default Areas