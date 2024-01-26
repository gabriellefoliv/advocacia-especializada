import WppButton from "../../../../components/WppButton/WppButton"
import AreaPageExample from "../AreaPageExample/AreaPageExample"
import { ButtonHolder } from "../AreaPageExample/AreaPageExampleStyle"

import Previ from '../../../../img/direitoprevidenciario.jpg'

function Previdenciario() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito Previdenciário" 
                EImg={Previ} 
                EText={[
                    "  Fases Administrativas e Judiciais:\n",
                    "✓ Aposentadorias;\n",
                    "✓ Pensão por morte;\n",
                    "✓ Auxílio-doença;\n",
                    "✓ Salário-maternidade;\n",
                    "✓ Salário-família;\n",
                    "✓ Auxílio-acidente;\n",
                    "✓ Auxílio-reclusão;\n",
                    "✓ BPC/LOAS\n",
                ]}
            />
            <ButtonHolder>
                <WppButton/>
            </ButtonHolder>
        </>
    )
}

export default Previdenciario