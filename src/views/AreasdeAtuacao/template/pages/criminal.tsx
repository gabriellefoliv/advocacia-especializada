import WppButton from "../../../../components/WppButton/WppButton"
import AreaPageExample from "../AreaPageExample/AreaPageExample"
import { ButtonHolder } from "../AreaPageExample/AreaPageExampleStyle"

import CriminalImg from '../../../../img/direitocriminal.jpg'

function Criminal() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito Criminal " 
                EImg={CriminalImg} 
                EText={[
                    "✓ Crimes contra a honra e a pessoa;\n",
                    "✓ Defesa em Inquérito Policial;\n",
                    "✓ Habeas Corpus;\n",
                    "✓ Acompanhamento em Delegacia;\n",
                    "✓ Maria da Penha;\n",
                    "✓ Crimes contra o Patrimônio;\n",
                    "✓ Crimes contra a Dignidade Sexual;\n",
                    "✓ Pedido de Liberdade Provisória;\n",
                    "✓ Estelionato;\n",
                    "✓ Prisão Preventiva;\n",
                    "✓ Crimes contra a Administração Pública.\n",
                ]}
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Criminal