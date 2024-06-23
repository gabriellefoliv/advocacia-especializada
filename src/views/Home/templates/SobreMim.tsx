import assinando from '../../../img/assinando.jpeg'

function SobreMim() {
    return(
        <div className='mt-4 md:-mt-52 md:mx-20 md:p-10 flex md:flex-row flex-col justify-content items-center'>
            <img className='w-56 md:w-96' src={assinando}/>
            <div className='m-8 p-0 md:m-12 md:p-10 flex flex-col text-justify'>
                <h1 className='font-bold text-2xl'>Quem sou eu?</h1>
                <p className='opacity-70 font-bold py-2'>Eu me chamo Thamiris Ferreira de Oliveira, atualmente tenho 26 anos e sou advogada especializada em Trabalhista.</p>
                <p className='opacity-70 font-bold py-2'>Não sonhei ser Advogada, mas quando ingressei no curso de Direito me apaixonei por cada área. Ao longo da minha trajetória eu estagiei no Juizado Especial Cível, na Justiça Militar da União e em dois escritórios de Advocacia, que sem dúvidas foram os divisores de águas na minha carreira.</p>
                <p className='opacity-70 font-bold py-2'>Durante os 5 anos tive dúvida sobre qual segmento eu me especializaria, e confesso que não gostei muito de Trabalhista no meu primeiro contato. </p>
                <p className='opacity-70 font-bold py-2'>Mas como ocorre com a maioria das pessoas, o jogo virou e hoje é a área que eu mais tenho gosto de trabalhar, embora eu goste de quase todas. </p>
                <p className='opacity-70 font-bold py-2'>Por fim, hoje eu não lido tão somente com os casos que chegam até mim, mas com as vidas das pessoas que confiam no meu trabalho.</p>
            </div>
        </div>
    )
}

export default SobreMim