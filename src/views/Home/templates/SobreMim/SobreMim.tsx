import { SobreMimContainer, SobreMimImg, SobreMimText, SobreMimTextGroup, SobreMimTitle } from "./SobreMimStyle"

import assinando from '../../../../img/assinando.jpeg'

function SobreMim() {
    return(
        <SobreMimContainer>
            <SobreMimImg src={assinando}/>
            <SobreMimTextGroup>
                <SobreMimTitle>Quem sou eu?</SobreMimTitle>
                <SobreMimText>Eu me chamo Thamiris Ferreira de Oliveira, atualmente tenho 26 anos e sou advogada especializada em Trabalhista.</SobreMimText>
                <SobreMimText>Não sonhei ser Advogada, mas quando ingressei no curso de Direito me apaixonei por cada área. Ao longo da minha trajetória eu estagiei no Juizado Especial Cível, na Justiça Militar da União e em dois escritórios de Advocacia, que sem dúvidas foram os divisores de águas na minha carreira.</SobreMimText>
                <SobreMimText>Durante os 5 anos tive dúvida sobre qual segmento eu me especializaria, e confesso que não gostei muito de Trabalhista no meu primeiro contato. </SobreMimText>
                <SobreMimText>Mas como ocorre com a maioria das pessoas, o jogo virou e hoje é a área que eu mais tenho gosto de trabalhar, embora eu goste de quase todas. </SobreMimText>
                <SobreMimText>Por fim, hoje eu não lido tão somente com os casos que chegam até mim, mas com as vidas das pessoas que confiam no meu trabalho.</SobreMimText>
            </SobreMimTextGroup>
        </SobreMimContainer>
    )
}

export default SobreMim