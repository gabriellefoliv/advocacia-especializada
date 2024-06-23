import AreaPageExample from "../AreaPageExample/AreaPageExample"

import ConsumidorImg from '../../../../img/direito-consumidor.jpg'

function Consumidor() {
    return (
        <>
            <AreaPageExample 
                ETitle="Direito do Consumidor" 
                EImg={ConsumidorImg} 
                EText={[
                    "✓ Problemas envolvendo compras pela internet;\n", 
                    "✓ Produto com defeito ou não entregue;\n", 
                    "✓ Vícios na qualidade de produtos e serviços;\n", 
                    "✓ Atraso na entrega de produtos e/ou serviços;\n", 
                    "✓ Propaganda enganosa e Venda casada;\n", 
                    "✓ Prevenção e reparação de danos oriundos de relações de consumo;\n", 
                    "✓ Direito de arrependimento e devolução do produto;\n", 
                    "✓ Inscrição indevida em cadastros de inadimplentes, tais como: SPC e SERASA;\n", 
                    "✓ Assuntos envolvendo plano de saúde;\n", 
                    "✓ Problemas com serviços de telefonia, internet, TV a cabo;\n", 
                    "✓ Água e esgoto, energia elétrica, cancelamento ou atraso de voo, avaria e/ou extravio de carga ou bagagem;\n", 
                    "✓ Pacote turístico;\n", 
                    "✓ Transportes coletivos;\n", 
                    "✓ Reajustes e juros abusivos.\n", 
                ]}
            />
            
        </>
    )
}

export default Consumidor