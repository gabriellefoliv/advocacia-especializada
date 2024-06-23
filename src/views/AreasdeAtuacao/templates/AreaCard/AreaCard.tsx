
interface AreaCardProps {
    ACImg: any
    ACTitle: string
    AChref: string
}

function AreaCard({ACImg, ACTitle, AChref}:AreaCardProps) {
    return (
        <a className="w-[320px] h-[115px] mr-2 bg-white shadow-xl cursor-pointer flex justify-start items-center mt-12 transition duration-300" href={AChref}>
            <img className="w-24 h-24 rounded-sm shadow-xl ml-1" src={ACImg}/>
            <div className="ml-2 mx-2">
                <h1 className="font-bold py-2 text-[#611C18] text-xl hover:text-[#733C39] cursor-pointer transition duration-300 hover:opacity-50 hover:transition hover:duration-300">{ACTitle}</h1>
                <button>Saiba Mais</button>
            </div>
        </a>
    )
}

export default AreaCard
