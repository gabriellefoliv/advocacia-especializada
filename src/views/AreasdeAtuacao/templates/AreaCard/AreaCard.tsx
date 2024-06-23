
interface AreaCardProps {
    ACImg: any
    ACTitle: string
    AChref: string
}

function AreaCard({ACImg, ACTitle, AChref}:AreaCardProps) {
    return (
        <a className="w-[320px] mr-2 bg-white shadow-xl cursor-pointer flex flex-col justify-start items-center mt-12 transition duration-300 rounded-md" href={AChref}>
            <img className="w-72 h-40 rounded-sm shadow-xl ml-1" src={ACImg}/>
            <div className="flex flex-col justify-center items-center mt-2">
                <h1 className="font-bold py-2 text-[#611C18] text-xl hover:text-[#733C39] cursor-pointer transition duration-300 hover:opacity-50 hover:transition hover:duration-300">{ACTitle}</h1>
                <button className="bg-red-900 p-1 px-4 mb-4 rounded-md text-white font-bold transition duration-500 hover:transition hover:duration-500 hover:opacity-70">Saiba Mais</button>
            </div>
        </a>
    )
}

export default AreaCard
