import AreaPageExample from "../AreaPageExample/AreaPageExample"

import FamiliaImg from '../../../../img/direitodefamilia.jpg'

function Familia() {
    return(
        <>
            <AreaPageExample 
                ETitle="Direito de Família e Sucessões" 
                EImg={FamiliaImg} 
                EText={[
                    "✓ Pensão Alimentícia;\n",
                    "✓ Divórcio;\n",
                    "✓ Reconhecimento de paternidade;\n",
                    "✓ Reconhecimento de União Estável;\n",
                    "✓ Partilha de bens;\n",
                    "✓ Alteração no regime de bens;\n",
                    "✓ Guarda e convivência.\n",
                ]}
            />
           
        </>
    )
}

export default Familia