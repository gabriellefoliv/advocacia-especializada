import AreaPageExample from "../AreaPageExample/AreaPageExample"
import Trabalho from '../../../../img/trabalhista.jpg'
import WppButton from "../../../../components/WppButton/WppButton"
import { ButtonHolder } from "../AreaPageExample/AreaPageExampleStyle"


function Trabalhista() {
    return(
        <>
            <AreaPageExample 
                ETitle="Direito do Trabalho" 
                EImg={Trabalho} 
                EText={[
                    "  Contencioso Trabalhista:\n",
                    "✓ Reclamações individuais;\n",
                    "✓ Ações coletivas e ações civis públicas propostas por sindicatos e pelo Ministério Público do Trabalho (MPT);\n",
                    "✓ Processos administrativos decorrentes de fiscalização do Ministério Público do Trabalho e Ministério do Trabalho e Emprego;\n",
                    "✓ Acompanhamento personalizado em todos os Tribunais;\n",
                    "✓ Elaboração de relatórios gerenciais com dados processuais e estatísticos para acompanhamento, avaliação e gerenciamento do contencioso trabalhista;\n",
                    "✓ Gestão estratégica de conflitos e negociações coletivas.\n",
                ]}
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Trabalhista