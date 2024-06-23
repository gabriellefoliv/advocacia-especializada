import AreaPageExample from "../AreaPageExample/AreaPageExample"

import BancarioImg from '../../../../img/bancario.png'

function Bancario() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito do Consumidor Bancário" 
                EImg={BancarioImg} 
                EText={[
                    "✓ Redução em até 95% das dívidas\n",
                    "✓ Superendividamento\n",
                    "✓ Defesa de Busca e Apreensão\n",
                    "✓ Revisão de juros de financiamento\n",
                    "✓ Revisão de juros de cartão de crédito\n",
                    "✓ Revisão de juros de empréstimo\n",
                ]}
            />
            
        </>
    )
}

export default Bancario