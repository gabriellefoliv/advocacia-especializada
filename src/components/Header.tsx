import Wavy from '../img/wavy-bg/layered-waves-haikei (4).svg'

type HeaderProps = {
    title: string;
    subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
    return (
        <div className='relative md:h-96 flex justify-center overflow-hidden'>
            <img className='absolute w-full overflow-hidden bg-transparent bg-fixed md:scale-y-75 md:-mt-32' src={Wavy} />
            <div className='absolute md:-mt-8'>
                <div className='flex py-6 px-1 md:py-8 md:p-12 justify-center items-center'>
                    <div className='text-white -mt-2 md:mt-10 md:p-20 text-center flex justify-center items-center flex-col'>
                        <h1 className='font-bold text-base md:text-4xl md:mb-4'>
                            {title}
                        </h1>
                        <p className='text-sm md:text-lg'>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}