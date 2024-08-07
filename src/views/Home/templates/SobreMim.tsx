import Img from '../../../img/sobreescritorio.jpeg'

function SobreMim() {
    return(
        <div className='mt-40 md:mt-10 md:p-10 flex md:flex-row flex-col justify-content items-center'>
            <img className='w-56 md:w-96' src={Img}/>
            <div className='mx-8 p-0 flex flex-col text-justify'>
                <h1 className='font-bold text-2xl'>Sobre o Escritório</h1>
                <p className='opacity-70 py-2'>Com mais de 200 processos judiciais em andamento e já finalizados, o nosso escritório atua em todo território Brasileiro, tanto de forma presencial quanto de forma digital através de videoconferência, visando agilizar a resolução processual e garantir o conforto dos nossos clientes. Com uma trajetória excepcional e atuação em centenas de processos judiciais, diligências e serviços jurídicos, somos totalmente comprometidos com a transparência e agilidade, utilizando todos os recursos disponíveis para alcançar o melhor resultado para os nossos clientes.</p>
                <p className='opacity-70 py-2'>Nossa equipe é formada por profissionais altamente qualificados e dedicados à constante atualização, incorporação e melhoria no serviço oferecido com inovações tecnológicas, assegurando um atendimento eficiente e humanizado.</p>
            </div>
        </div>
    )
}

export default SobreMim