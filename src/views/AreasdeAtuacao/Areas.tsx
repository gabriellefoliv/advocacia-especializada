import { AreaCard, AreaCardContainer, AreaCardContainerSup, AreaCardImg, AreaCardSobre, AreaCardTitle, AreaContainer, AreaSubTitle, AreaTextGroup, AreaTitle, PhotoContainer, SobreTextGroup } from "./AreasStyle"
import Trabalho from '../../img/trabalhista.jpg'
import Militar from '../../img/militar.jpg'
import Banco from '../../img/bancario.png'


function Areas() {
    return (
        <AreaContainer>
            <AreaTextGroup>
                <AreaTitle>Áreas de Atuação</AreaTitle>
                <AreaSubTitle>Dentre os serviços prestados pela Thamiris Ferreira Advocacia destacamos:</AreaSubTitle>
            </AreaTextGroup>
            <AreaCardContainerSup>

                <AreaCard>
                    <AreaCardTitle>Direito do Trabalho</AreaCardTitle>
                    <AreaCardContainer>
                        <PhotoContainer>
                            <AreaCardImg src={Trabalho}/>
                        </PhotoContainer>
                        <SobreTextGroup>
                            <AreaCardSobre>Cálculos Trabalhistas (rescisão);</AreaCardSobre>
                            <AreaCardSobre>Representação Processual;</AreaCardSobre>
                            <AreaCardSobre>Consultoria sobre aplicação da lei trabalhista e convenções coletivas de trabalho;</AreaCardSobre>
                            <AreaCardSobre>Assessoria jurídica preventiva;</AreaCardSobre>
                            <AreaCardSobre>Representação nas Delegacias Regionais do Trabalho e Ministério Público do trabalho;</AreaCardSobre>
                            <AreaCardSobre>Assessoria em acordos e convenções coletivas;</AreaCardSobre>
                            <AreaCardSobre>Acidente de trabalho;</AreaCardSobre>
                            <AreaCardSobre>Assessoria em plano de demissão voluntária.</AreaCardSobre>
                        </SobreTextGroup>
                    </AreaCardContainer>
                </AreaCard>

                <AreaCard>
                    <AreaCardTitle>Direito do Consumidor Bancário</AreaCardTitle>
                    <AreaCardContainer>
                        <PhotoContainer>
                            <AreaCardImg src={Banco}/>
                        </PhotoContainer>
                        <SobreTextGroup>
                        <AreaCardSobre>Redução em até 95% das dívidas</AreaCardSobre>
                            <AreaCardSobre>Superendividamento</AreaCardSobre>
                            <AreaCardSobre>Defesa de Busca e Apreensão</AreaCardSobre>
                            <AreaCardSobre>Revisão de juros de financiamento, de cartão de crédito e de empréstimo</AreaCardSobre>
                            <AreaCardSobre>Problemas envolvendo compras pela internet;</AreaCardSobre>
                            <AreaCardSobre>Produto com defeito ou não entregue;</AreaCardSobre>
                            <AreaCardSobre>Vícios na qualidade de produtos e serviços;</AreaCardSobre>
                            <AreaCardSobre>Atraso na entrega de produtos e/ou serviços;</AreaCardSobre>
                            <AreaCardSobre>Propaganda enganosa e Venda casada;</AreaCardSobre>
                            <AreaCardSobre>Prevenção e reparação de danos oriundos de relações de consumo;</AreaCardSobre>
                            <AreaCardSobre>Direito de arrependimento e devolução do produto;</AreaCardSobre>
                            <AreaCardSobre>Inscrição indevida em cadastros de inadimplentes, tais como: SPC e SERASA;</AreaCardSobre>
                            <AreaCardSobre>Assuntos envolvendo plano de saúde;</AreaCardSobre>
                            <AreaCardSobre>Problemas com serviços de telefonia, internet, TV a cabo;</AreaCardSobre>
                            <AreaCardSobre>Água e esgoto, energia elétrica, cancelamento ou atraso de voo, avaria e/ou extravio de carga ou bagagem</AreaCardSobre>
                            <AreaCardSobre>Pacote turístico;</AreaCardSobre>
                            <AreaCardSobre>Transportes coletivos;</AreaCardSobre>
                            <AreaCardSobre>Reajustes e juros abusivos.</AreaCardSobre>
                        </SobreTextGroup>
                    </AreaCardContainer>
                </AreaCard>

                <AreaCard>
                    <AreaCardTitle>Direito Militar</AreaCardTitle>
                    <AreaCardContainer>
                        <PhotoContainer>
                            <AreaCardImg src={Militar}/>
                        </PhotoContainer>
                        <AreaCardSobre>
                            Advocacia voltada para as questões castrenses, nas áreas 
                            Administrativa, Disciplinar e Penal Militar. Atuamos no âmbito das Forças 
                            Armadas e Forças Auxiliares. Nos dedicamos a busca pela aplicação do direito, 
                            considerando as peculiaridades próprias da vida castrense, sempre com foco na lei, 
                            doutrina e jurisprudências atualizadas e aplicáveis aos casos concretos.
                        </AreaCardSobre>
                    </AreaCardContainer>
                </AreaCard>

            </AreaCardContainerSup>
        </AreaContainer>
    )
}

export default Areas