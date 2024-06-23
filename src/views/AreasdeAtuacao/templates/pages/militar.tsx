import AreaPageExample from "../AreaPageExample/AreaPageExample"

import MilitarImg from '../../../../img/militar.jpg'

function Militar() {
    return(
        <>
            <AreaPageExample 
                ETitle="Direito Militar" 
                EImg={MilitarImg} 
                EText={[
                    "✓ Advocacia voltada para as questões castrenses, nas áreas Administrativa, Disciplinar e Penal Militar;\n",
                    "✓ Atuamos no âmbito das Forças Armadas e Forças Auxiliares;\n",
                    "✓ Nos dedicamos a busca pela aplicação do direito, considerando as peculiaridades próprias da vida castrense, sempre com foco na lei, doutrina e jurisprudências atualizadas e aplicáveis aos casos concretos.\n",
                ]}
            />
            
        </>
    )
}

export default Militar