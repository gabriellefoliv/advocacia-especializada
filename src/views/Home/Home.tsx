// import Law from '../../img/videos/ultima.mp4'
import AdvLogo from '../../img/advbold.png'
import AreaHome from "./templates/AreaHome.tsx"
import Atendimento from "./templates/Atendimento.tsx"
import WppButton from "../../components/WppButton"
import SobreMim from "./templates/SobreMim.tsx"
import Aluguel from "./templates/Aluguel.tsx"

import Wavy from '../../img/wavy-bg/wave4.svg'


function Home() {
    return (
        <>
            <div className='relative md:h-96 flex justify-center bg-[#611C18] md:bg-transparent'>
                <img className='absolute w-full overflow-hidden bg-transparent bg-fixed' src={Wavy} />
                <div className='absolute -mt-12'>
                    <div className='flex'>
                        <img className='md:w-full w-96 -mt-4 md:mt-6 scale-50 md:scale-100' src={AdvLogo} />
                        <div className='hidden md:text-white md:p-24 md:text-center md:flex md:justify-center md:items-center md:flex-col'>
                            <h1 className='font-bold text-xl mb-3'>
                                ADVOCACIA ESPECIALIZADA
                            </h1>
                            <p className='text-base'>
                                A nossa equipe é composta por profissionais altamente qualificados nos mais
                                diversos rumos da Advocacia para desenvolverem estratégias eficazes para a
                                solução dos seus problemas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-0 md:px-0 overflow-hidden'>


            <SobreMim />

            <div>
                <WppButton />
            </div>

            <div className='w-full flex flex-col-reverse mb-10 md:flex md:flex-row md:items-center md:mt-20 md:mb-24 mx-6'>
                <AreaHome />
                <Atendimento />
            </div>

            <div>
                <WppButton />
            </div>

            <Aluguel />

            </div>

        </>
    )
}

export default Home