import AreaPageExample from "../AreaPageExample/AreaPageExample"

import CriminalImg from '../../../../img/direitocriminal.jpg'

function Criminal() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito Criminal " 
                EImg={CriminalImg} 
                EText={[
                    "✓ Acompanhamento à delegacia;\n",
                    "✓ Audiência de custódia;\n",
                    "✓ Violência doméstica;\n",
                    "✓ Habeas Corpus;\n",
                    "✓ Atendimento à presídios;\n",
                    "✓ Inquérito policial militar;\n",
                    "✓ Tribunal do júri;\n",
                    "✓ Execução penal e recursos.\n",
                    
                ]}
            />
            
        </>
    )
}

export default Criminal