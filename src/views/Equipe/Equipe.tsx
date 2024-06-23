import EquipeCard from "./EquipeCard"
import Th from '../../img/thamicomfundo.jpeg'
import andre from '../../img/andre3.jpeg'
import Aluguel from "../Home/templates/Aluguel"
import { Header } from "../../components/Header"


function Equipe() {
    return (
        <div>
            <Header 
                title="Equipe"
                subtitle="Entre em contato com um de nossos advogados"
            />
            <div className="flex justify-center flex-wrap scale-75 md:scale-100">
                <EquipeCard
                    Img={Th}
                    Nome="Thamiris Ferreira de Oliveira"
                    Atuacao="Família e Criminal"
                    Telefone="(21) 96972-7164" 
                    hrefWpp="https://wa.me/message/V72SURNAJ3EKD1"
                    hrefEmail="mailto:thamirisferreiraadv@gmail.com"
                    
                />
                <EquipeCard
                    Img={andre}
                    Nome="André Luiz Dias Tavares"
                    Atuacao="Criminal"
                    Telefone="(21) 98100-5704" 
                    hrefWpp="https://wa.me/message/FVYFWSIX3YQHB1"
                    hrefEmail="mailto:andretavarescontato.adv@gmail.com"
                />
                
            </div>
            <Aluguel/>
        </div>

    )
}

export default Equipe