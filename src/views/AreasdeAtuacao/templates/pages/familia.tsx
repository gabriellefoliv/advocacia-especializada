import AreaPageExample from "../AreaPageExample/AreaPageExample"

import FamiliaImg from '../../../../img/direitodefamilia.jpg'

function Familia() {
    return(
        <>
            <AreaPageExample 
                ETitle="Direito de Família e Sucessões" 
                EImg={FamiliaImg} 
                EText={[
                    "✓ Separações, divórcios e união estável;\n",
                    "✓ Ações de alimentos;\n",
                    "✓ Regulamentação de visitas;\n",
                    "✓ Investigação de paternidade e anulatórias;\n",
                    "✓ Guarda, adoção, curatela, interdições entre outros assuntos;\n",
                    "✓ Separação e divórcio extrajudicial (Lei 11.441/07);\n",
                    "✓ Planejamento sucessório (testamentos);\n",
                    "✓ Inventários e testamentos, com partilha e transferência patrimonial;\n",
                    "✓ Inventário consensual extrajudicial (Lei 11.441/07);\n",
                ]}
            />
           
        </>
    )
}

export default Familia