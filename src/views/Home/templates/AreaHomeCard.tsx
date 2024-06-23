interface AreaHomeProps {
    AreaHomeImg: any
    AreaHomeTitle: string
    hrefHomeCard: string
}

function AreaHomeCard({AreaHomeImg, AreaHomeTitle, hrefHomeCard}:AreaHomeProps) {
    return (
        <a className="bg-white cursor-pointer flex justify-start items-center mb-0" href={hrefHomeCard}>
            <img className="w-20 h-20 object-cover bg-[#fcf6f9] shadow-xl ml-1" src={AreaHomeImg}/>
            <div className="flex flex-col ml-2 p-5">
                <h1 className="py-1 text-lg font-bold hover:opacity-70">{AreaHomeTitle}</h1>
                <button className="p-2 border-none bg-red-900 text-white cursor-pointer w-80 hover:opacity-50 hover:transition hover:duration-500 transition duration-500 rounded-md">Saiba mais</button>
            </div>
        </a>
    )
}

export default AreaHomeCard
